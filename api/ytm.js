// Memory cache for direct webhook updates
let manualNowPlaying = null;
let lastManualUpdate = 0;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'public, max-age=5, s-maxage=5, stale-while-revalidate=10');

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
          source: body.source || 'YouTube Music',
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
    return res.status(200).json({
      success: true,
      source: 'webhook',
      ...manualNowPlaying
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
        
        let cover = '';
        if (Array.isArray(current.image)) {
          const largeImg = current.image.find(img => img.size === 'extralarge' || img.size === 'large');
          cover = largeImg ? largeImg['#text'] : '';
        }

        return res.status(200).json({
          success: true,
          source: 'lastfm',
          isPlaying: isNowPlaying,
          isPaused: false,
          title: current.name,
          artist: typeof current.artist === 'object' ? (current.artist['#text'] || current.artist.name) : current.artist,
          album: typeof current.album === 'object' ? current.album['#text'] : current.album,
          cover: cover || 'media/tracks/femtanyl-all-the-time.jpg',
          url: current.url || 'https://music.youtube.com',
          duration: 215,
          position: isNowPlaying ? 45 : 0,
          date: current.date ? current.date['#text'] : 'сейчас'
        });
      }
    }
  } catch (err) {}

  // High-fidelity fallback state (Femtanyl - ALL THE TIME in YouTube Music)
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
