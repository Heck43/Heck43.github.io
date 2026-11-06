export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'public, max-age=10, s-maxage=10, stale-while-revalidate=20');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const profileUrl = 'https://steamcommunity.com/id/heck1337/?l=english';

  try {
    const steamRes = await fetch(profileUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache'
      },
      signal: AbortSignal.timeout(6000)
    });

    if (!steamRes.ok) {
      throw new Error(`Steam responded with status ${steamRes.status}`);
    }

    const html = await steamRes.text();

    // 1. Exact Online / In-Game / Offline State targeting user container
    const statusMatch = html.match(/class="profile_in_game persona ([^"]+)"/i);
    const headerMatch = html.match(/class="profile_in_game_header">([^<]+)<\/div>/i);
    const nameMatch = html.match(/class="profile_in_game_name">([^<]+)<\/div>/i);

    const personaClass = statusMatch ? statusMatch[1].toLowerCase() : '';
    let onlineState = 'offline';
    let stateMessage = 'Currently Offline';
    let currentGame = null;

    if (personaClass.includes('in-game')) {
      onlineState = 'in-game';
      currentGame = nameMatch ? nameMatch[1].trim() : 'Playing a game';
      stateMessage = `In-Game: ${currentGame}`;
    } else if (personaClass.includes('online')) {
      onlineState = 'online';
      stateMessage = headerMatch ? headerMatch[1].trim() : 'Online';
    } else {
      onlineState = 'offline';
      stateMessage = headerMatch ? headerMatch[1].trim() : 'Currently Offline';
    }

    // 2. Avatar
    let avatar = 'media/steam-avatar.jpg';
    const avatarMatch = html.match(/<div class="playerAvatarAutoSizeInner">\s*<img src="([^"]+)"/i);
    if (avatarMatch) {
      avatar = avatarMatch[1];
    }

    // 3. Level
    let level = 24;
    const levelMatch = html.match(/<span class="friendPlayerLevelNum">(\d+)<\/span>/i);
    if (levelMatch) {
      level = parseInt(levelMatch[1], 10);
    }

    // 4. Bio / Summary
    let summary = "I'm just a regular gamer :3";
    const bioMatch = html.match(/<div class="profile_summary">([\s\S]*?)<\/div>/i);
    if (bioMatch) {
      summary = bioMatch[1].replace(/<[^>]*>?/gm, '').trim() || summary;
    }

    // 5. Recent Games from HTML
    const games = [];
    const gameBlocks = html.split('class="recent_game"');
    gameBlocks.shift();

    for (const block of gameBlocks) {
      const nameMatch = block.match(/<div class="game_name"><a [^>]*>([\s\S]*?)<\/a>/i);
      const linkMatch = block.match(/<a href="([^"]*\/app\/(\d+)[^"]*)"/i);
      const capsuleMatch = block.match(/<img class="game_capsule" src="([^"]+)"/i);
      const detailsMatch = block.match(/<div class="game_info_details">([\s\S]*?)<\/div>/i);

      if (nameMatch) {
        const name = nameMatch[1].trim();
        const link = linkMatch ? linkMatch[1] : '';
        const appId = linkMatch ? linkMatch[2] : '';
        const capsule = capsuleMatch ? capsuleMatch[1] : '';
        const details = detailsMatch ? detailsMatch[1].replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim() : '';

        let hours = '';
        const hrsMatch = details.match(/([\d\.]+)\s*hrs?\s*on\s*record/i);
        if (hrsMatch) {
          hours = `${hrsMatch[1]} ч`;
        } else {
          const pastMatch = details.match(/([\d\.]+)\s*hrs?\s*past\s*2\s*weeks/i);
          if (pastMatch) hours = `${pastMatch[1]} ч`;
        }

        let sub = '';
        const past2wMatch = details.match(/([\d\.]+)\s*hrs?\s*past\s*2\s*weeks/i);
        if (past2wMatch) {
          sub = `${past2wMatch[1]} ч за 2 нед.`;
        } else if (details.includes('last played')) {
          const lp = details.match(/last played on ([\w\s\d]+)/i);
          sub = lp ? `запуск: ${lp[1].trim()}` : 'недавно';
        }

        games.push({
          name,
          appId,
          link: link || `https://steamcommunity.com/app/${appId}`,
          icon: capsule || (appId ? `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/capsule_184x69.jpg` : 'media/steam-farcry6.jpg'),
          hours: hours || 'недавно',
          sub: sub || 'в библиотеке'
        });
      }
    }

    if (games.length < 4) {
      games.push({
        name: 'Wallpaper Engine',
        appId: '431960',
        link: 'https://steamcommunity.com/app/431960',
        icon: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/431960/capsule_184x69.jpg',
        hours: '22 ч',
        sub: 'в библиотеке'
      });
    }

    return res.status(200).json({
      success: true,
      timestamp: Date.now(),
      steam: {
        steamID64: '76561199103695244',
        steamID: 'Heck_43',
        onlineState,
        stateMessage,
        currentGame,
        avatar,
        level,
        summary,
        recentGames: games.slice(0, 4)
      }
    });

  } catch (err) {
    return res.status(200).json({
      success: false,
      fallback: true,
      error: err.message,
      steam: {
        steamID64: '76561199103695244',
        steamID: 'Heck_43',
        onlineState: 'offline',
        stateMessage: 'Currently Offline',
        currentGame: null,
        avatar: 'media/steam-avatar.jpg',
        level: 24
      }
    });
  }
}
