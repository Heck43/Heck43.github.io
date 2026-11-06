// Memory cache for direct webhook updates and dynamic track timers
let manualNowPlaying = null;
let lastManualUpdate = 0;

// Track when each song was first detected playing: trackKey -> timestamp ms
const activeTrackStarts = new Map();
// Cache track durations: trackKey -> seconds
const durationCache = new Map();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'public, max-age=3, s-maxage=3, stale-while-revalidate=5');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle direct POST webhook from phone or browser
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
          position: typeof body.position === 'number' ? body.position : 0,
          duration: typeof body.duration === 'number' ? body.duration : 210,
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
    // If webhook is currently playing, smoothly calculate elapsed position
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
          const largeImg = current.image.find(img => img.size === 'extralarge' || img.size === 'large');
          cover = largeImg ? largeImg['#text'] : '';
        }

        // Track duration & elapsed timer
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
              // If image was missing in getrecenttracks, try album image from track info
              if (!cover && infoData?.track?.album?.image) {
                const img = infoData.track.album.image.find(i => i.size === 'extralarge' || i.size === 'large');
                if (img && img['#text']) cover = img['#text'];
              }
            }
          } catch (e) {}
        }

        const now = Date.now();
        if (isNowPlaying) {
          if (!activeTrackStarts.has(trackKey)) {
            activeTrackStarts.set(trackKey, now);
            // Prune old entries
            for (const k of activeTrackStarts.keys()) {
              if (k !== trackKey) activeTrackStarts.delete(k);
            }
          }
        }

        const startTime = activeTrackStarts.get(trackKey) || now;
        const elapsedSec = isNowPlaying ? Math.min(duration, Math.max(0, Math.floor((now - startTime) / 1000))) : 0;

        return res.status(200).json({
          success: true,
          source: 'lastfm',
          isPlaying: isNowPlaying,
          isPaused: false,
          title: trackTitle,
          artist: artistName,
          album: albumName,
          cover: cover || 'media/tracks/femtanyl-all-the-time.jpg',
          url: current.url || 'https://music.youtube.com',
          duration: duration,
          position: elapsedSec,
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
