// Memory cache for direct webhook updates and dynamic track timers
let manualNowPlaying = null;
let lastManualUpdate = 0;

// State tracker for active listening sessions: user -> tracker
const sessionTrackers = new Map();
// Cache track durations: trackKey -> seconds
const durationCache = new Map();
// Cache resolved covers: queryKey -> image url
const coverCache = new Map();

function isPlaceholder(url) {
  if (!url || typeof url !== 'string' || !url.trim()) return true;
  return url.includes('2a96cbd8b46e442fc41c2b86b821562f') ||
         url.includes('default_album') ||
         url.includes('noimage');
}

// Fetch cover from MusicBrainz + CoverArtArchive (covers Rotteen, LapFox, Renard, indie, etc.)
async function fetchMusicBrainzCover(title, artist, album) {
  const cleanTitle = (title || '').replace(/^[^\w\s]+|[^\w\s]+$/g, '').trim();
  const searchQueries = [];
  
  if (album && album.length > 2) {
    searchQueries.push(`release:${album}`);
  }
  searchQueries.push(`${artist} ${cleanTitle.split('-')[0].trim()}`);
  searchQueries.push(artist);

  for (const q of searchQueries) {
    try {
      const mbRes = await fetch(
        `https://musicbrainz.org/ws/2/release/?query=${encodeURIComponent(q)}&fmt=json&limit=3`,
        {
          headers: { 'User-Agent': 'MetawkaPortfolio/2.0 ( contact@heck43.github.io )' },
          signal: AbortSignal.timeout(2200)
        }
      );
      if (mbRes.ok) {
        const mbData = await mbRes.json();
        const releases = mbData?.releases || [];
        for (const rel of releases) {
          if (rel.id) {
            try {
              const caaRes = await fetch(`https://coverartarchive.org/release/${rel.id}`, { signal: AbortSignal.timeout(1800) });
              if (caaRes.ok) {
                const caaData = await caaRes.json();
                const front = caaData?.images?.find(i => i.front)?.image || caaData?.images?.[0]?.image;
                if (front) {
                  return front.replace(/^http:/, 'https:');
                }
              }
            } catch (e) {}
          }
        }
      }
    } catch (e) {}
  }
  return null;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'public, max-age=2, s-maxage=2, stale-while-revalidate=4');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle direct POST webhook from phone, browser extension, or desktop userscript
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (body && body.title) {
        manualNowPlaying = {
          title: body.title,
          artist: body.artist || 'Unknown Artist',
          album: body.album || '',
          cover: body.cover || 'media/tracks/femtanyl-all-the-time.jpg',
          url: body.url || 'https://music.youtube.com',
          isPlaying: body.isPlaying !== false,
          isPaused: Boolean(body.isPaused),
          position: typeof body.position === 'number' ? Math.floor(body.position) : 0,
          duration: typeof body.duration === 'number' ? Math.floor(body.duration) : 210,
          source: 'webhook',
          timestamp: Date.now()
        };
        lastManualUpdate = Date.now();
        return res.status(200).json({ success: true, stored: manualNowPlaying });
      }
    } catch (e) {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }

  // If a manual webhook update was received recently (within 5 minutes), prioritize it
  if (manualNowPlaying && (Date.now() - lastManualUpdate < 300000)) {
    const elapsed = manualNowPlaying.isPaused 
      ? manualNowPlaying.position 
      : Math.min(manualNowPlaying.duration, manualNowPlaying.position + Math.floor((Date.now() - manualNowPlaying.timestamp) / 1000));

    return res.status(200).json({
      success: true,
      source: 'webhook',
      ...manualNowPlaying,
      position: elapsed
    });
  }

  // Otherwise, query Last.fm API
  const url = new URL(req.url, 'http://localhost');
  const user = url.searchParams.get('user') || 'heck43';
  const apiKey = 'b25b959554ed76058ac220b7b2e0a026';

  try {
    const lfmRes = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(user)}&api_key=${apiKey}&format=json&limit=2`,
      { signal: AbortSignal.timeout(4000) }
    );

    if (lfmRes.ok) {
      const data = await lfmRes.json();
      const rawTrack = data?.recenttracks?.track;
      const tracks = Array.isArray(rawTrack) ? rawTrack : (rawTrack ? [rawTrack] : []);

      if (tracks.length > 0) {
        const current = tracks[0];
        const isNowPlaying = Boolean(current['@attr'] && current['@attr'].nowplaying === 'true');
        
        const trackTitle = current.name || 'Unknown Track';
        const artistName = typeof current.artist === 'object' ? (current.artist['#text'] || current.artist.name) : (current.artist || 'Unknown Artist');
        const albumName = typeof current.album === 'object' ? current.album['#text'] : (current.album || '');

        let cover = '';
        if (Array.isArray(current.image)) {
          const largeImg = current.image.find(img => img.size === 'extralarge' || img.size === 'large' || img.size === 'medium');
          cover = (largeImg && largeImg['#text'] && !isPlaceholder(largeImg['#text'])) ? largeImg['#text'] : '';
        }

        const trackKey = `${user}:${artistName}:${trackTitle}`.toLowerCase();
        let duration = 210;

        if (durationCache.has(trackKey)) {
          duration = durationCache.get(trackKey);
        } else {
          try {
            const infoRes = await fetch(
              `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${encodeURIComponent(artistName)}&track=${encodeURIComponent(trackTitle)}&format=json`,
              { signal: AbortSignal.timeout(1800) }
            );
            if (infoRes.ok) {
              const infoData = await infoRes.json();
              const durMs = parseInt(infoData?.track?.duration, 10);
              if (durMs && durMs > 0) {
                duration = Math.round(durMs / 1000);
                durationCache.set(trackKey, duration);
              }
              if (!cover && infoData?.track?.album?.image) {
                const img = infoData.track.album.image.find(i => i.size === 'extralarge' || i.size === 'large');
                if (img && img['#text'] && !isPlaceholder(img['#text'])) {
                  cover = img['#text'];
                }
              }
            }
          } catch (e) {}
        }

        // Check if cover is in cache
        if (!cover && coverCache.has(trackKey)) {
          cover = coverCache.get(trackKey);
        }

        // Fallback 1: Query MusicBrainz + CoverArtArchive
        if (!cover || isPlaceholder(cover)) {
          try {
            const mbCover = await fetchMusicBrainzCover(trackTitle, artistName, albumName);
            if (mbCover) {
              cover = mbCover;
              coverCache.set(trackKey, cover);
            }
          } catch (e) {}
        }

        // Fallback 2: Query iTunes Search API
        if (!cover || isPlaceholder(cover)) {
          try {
            const itunesRes = await fetch(
              `https://itunes.apple.com/search?term=${encodeURIComponent(artistName + ' ' + trackTitle)}&media=music&limit=1`,
              { signal: AbortSignal.timeout(1600) }
            );
            if (itunesRes.ok) {
              const itData = await itunesRes.json();
              const itImg = itData?.results?.[0]?.artworkUrl100;
              if (itImg) {
                cover = itImg.replace('100x100bb', '600x600bb');
                coverCache.set(trackKey, cover);
              }
            }
          } catch (e) {}
        }

        // Fallback 3: Local curated portfolio artwork matching for Halley Labs / LapFox / indie
        if (!cover || isPlaceholder(cover)) {
          const tLow = trackTitle.toLowerCase();
          const aLow = artistName.toLowerCase();
          if (aLow.includes('renard') || aLow.includes('rotteen') || aLow.includes('lapfox') || aLow.includes('halley') || aLow.includes('kitsune') || aLow.includes('mayhem') || aLow.includes('truxton') || aLow.includes('darius') || aLow.includes('negaren') || aLow.includes('jackal') || tLow.includes('trauma') || tLow.includes('moonlight') || tLow.includes('because maybe') || tLow.includes('bumblefuck') || tLow.includes('ep!') || tLow.includes('party') || tLow.includes('rinse out')) {
            cover = 'media/tracks/renard-trauma.jpg';
          } else if (aLow.includes('femtanyl') || tLow.includes('pistol') || tLow.includes('time') || tLow.includes('lovesick') || tLow.includes('katamari') || tLow.includes('act right') || tLow.includes('dogmatica') || tLow.includes('push ur t3mpo')) {
            cover = 'media/tracks/femtanyl-all-the-time.jpg';
          } else if (aLow.includes('fem&m') || tLow.includes('silly') || tLow.includes('down')) {
            cover = 'media/tracks/femm-down-down-down-down.jpg';
          } else if (aLow.includes('mailpup') || tLow.includes('puppyplay')) {
            cover = 'media/tracks/mailpup-puppyplay.jpg';
          } else if (aLow.includes('stomach') || tLow.includes('circuit')) {
            cover = 'media/tracks/stomach-book-circuit-bent.jpg';
          } else if (aLow.includes('russel') || tLow.includes('bass') || tLow.includes('eat you up')) {
            cover = 'media/tracks/russelbuck-bass-down-low.jpg';
          } else if (aLow.includes('unfamiliar')) {
            cover = 'media/tracks/unfamiliar-123.jpg';
          } else {
            cover = 'media/tracks/femtanyl-all-the-time.jpg';
          }
        }

        // ===== ACCURATE PLAY/PAUSE & 00:00 START TRACKER =====
        const now = Date.now();
        let tracker = sessionTrackers.get(user);

        if (!tracker) {
          tracker = {
            trackKey: trackKey,
            title: trackTitle,
            artist: artistName,
            duration: duration,
            startedAt: now,
            position: 0,
            isPaused: !isNowPlaying,
            pausedAt: !isNowPlaying ? now : 0,
            totalPausedMs: 0,
            lastPoll: now
          };
          sessionTrackers.set(user, tracker);
        } else {
          tracker.duration = duration;
          // 1. Detect track change: Always reset to 0:00!
          if (tracker.trackKey !== trackKey) {
            tracker.trackKey = trackKey;
            tracker.title = trackTitle;
            tracker.artist = artistName;
            tracker.startedAt = now;
            tracker.position = 0;
            tracker.totalPausedMs = 0;
            tracker.isPaused = !isNowPlaying;
            tracker.pausedAt = !isNowPlaying ? now : 0;
          } else {
            // 2. Same track: accurately handle play vs pause
            if (isNowPlaying) {
              if (tracker.isPaused) {
                // Resumed playback from pause!
                tracker.totalPausedMs += Math.max(0, now - (tracker.pausedAt || now));
                tracker.isPaused = false;
                tracker.pausedAt = 0;
              }
              // Calculate elapsed seconds excluding paused time
              const elapsed = Math.floor((now - tracker.startedAt - tracker.totalPausedMs) / 1000);
              tracker.position = Math.min(duration, Math.max(0, elapsed));
            } else {
              // Pause detected: freeze current position!
              if (!tracker.isPaused) {
                tracker.isPaused = true;
                tracker.pausedAt = now;
              }
              // Keep tracker.position frozen at its current second
            }
          }
          tracker.lastPoll = now;
        }

        // If paused for more than 15 minutes, switch to idle last played
        const isIdle = tracker.isPaused && (now - (tracker.pausedAt || now) > 15 * 60 * 1000);

        return res.status(200).json({
          success: true,
          source: 'lastfm',
          isPlaying: !isIdle,
          isPaused: tracker.isPaused,
          title: trackTitle,
          artist: artistName,
          album: albumName,
          cover: cover,
          url: current.url || 'https://music.youtube.com',
          duration: duration,
          position: tracker.position,
          date: current.date ? current.date['#text'] : 'сейчас'
        });
      }
    }
  } catch (err) {}

  // High-fidelity fallback state (Femtanyl - ALL THE TIME)
  return res.status(200).json({
    success: true,
    source: 'preset',
    isPlaying: true,
    isPaused: false,
    title: 'ALL THE TIME',
    artist: 'Femtanyl',
    album: 'CHASER',
    cover: 'media/tracks/femtanyl-all-the-time.jpg',
    url: 'https://music.youtube.com',
    duration: 172,
    position: 48
  });
}
