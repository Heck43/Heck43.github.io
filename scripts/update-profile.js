/**
 * Profile Live Updater (ESM)
 * Fetches real-time public data for Heck43 (Steam HTML & GitHub)
 * Uses Steam Community Profile HTML (primary real-time source)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STEAM_ID = 'heck1337';
const STEAM_ID64 = '76561199103695244';
const GITHUB_USER = 'Heck43';

async function fetchSteamHtmlData() {
  try {
    const res = await fetch(`https://steamcommunity.com/id/${STEAM_ID}/?l=english`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      },
      signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) throw new Error(`Steam HTML HTTP ${res.status}`);
    const html = await res.text();

    // 1. Online / In-Game / Offline status
    let onlineState = 'offline';
    let stateMessage = 'Currently Offline';
    let currentGame = null;

    const inGameBlock = html.match(/<div class="profile_in_game persona (in-game|online|offline)">([\s\S]*?)<\/div>\s*<\/div>/i);
    if (inGameBlock) {
      const cls = inGameBlock[1].toLowerCase();
      const content = inGameBlock[2];
      const headerMatch = content.match(/<div class="profile_in_game_header">([\s\S]*?)<\/div>/i);
      const header = headerMatch ? headerMatch[1].trim() : '';

      if (cls === 'in-game') {
        onlineState = 'in-game';
        const nameMatch = content.match(/<div class="profile_in_game_name">([\s\S]*?)<\/div>/i);
        currentGame = nameMatch ? nameMatch[1].trim() : (header || 'Steam Game');
        stateMessage = `In-Game: ${currentGame}`;
      } else if (cls === 'online') {
        onlineState = 'online';
        stateMessage = 'Online';
      } else {
        onlineState = 'offline';
        stateMessage = header || 'Currently Offline';
      }
    } else {
      if (html.includes('persona in-game')) {
        onlineState = 'in-game';
        const nameMatch = html.match(/<div class="profile_in_game_name">([\s\S]*?)<\/div>/i);
        currentGame = nameMatch ? nameMatch[1].trim() : 'Steam Game';
        stateMessage = `In-Game: ${currentGame}`;
      } else if (html.includes('persona online')) {
        onlineState = 'online';
        stateMessage = 'Online';
      } else {
        onlineState = 'offline';
        stateMessage = 'Currently Offline';
      }
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
    const gameBlocks = html.split('<div class="recent_game">');
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
          icon: capsule || 'media/steam-calltoarms.jpg',
          hours: hours || 'недавно',
          sub: sub || 'в библиотеке'
        });
      }
    }

    if (games.length < 4) {
      const fallbacks = [
        { name: 'Far Cry 6', appId: '2369390', link: 'https://steamcommunity.com/app/2369390', icon: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2369390/capsule_184x69.jpg', hours: '42 ч', sub: 'в библиотеке' },
        { name: 'Wallpaper Engine', appId: '431960', link: 'https://steamcommunity.com/app/431960', icon: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/431960/capsule_184x69.jpg', hours: '22 ч', sub: 'в библиотеке' }
      ];
      for (const fb of fallbacks) {
        if (games.length < 4 && !games.some(g => g.name === fb.name)) {
          games.push(fb);
        }
      }
    }

    return {
      steamID64: STEAM_ID64,
      steamID: 'Heck_43',
      onlineState,
      stateMessage,
      currentGame,
      avatar,
      memberSince: 'November 2, 2020',
      summary,
      level,
      gamesCount: '135+',
      badgesCount: 17,
      recentGames: games
    };
  } catch (err) {
    console.warn('Steam HTML fetch failed:', err.message);
    return null;
  }
}

async function fetchGitHubData() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`, {
      headers: { 'User-Agent': 'Node-Fetch' },
      signal: AbortSignal.timeout(5000)
    });
    if (!res.ok) throw new Error(`GitHub HTTP ${res.status}`);
    const data = await res.json();
    return {
      public_repos: data.public_repos || 26,
      followers: data.followers || 1,
      created_at: data.created_at || '2023-02-23T00:00:00Z',
      avatar_url: data.avatar_url || ''
    };
  } catch (err) {
    return null;
  }
}

async function main() {
  console.log('Fetching live profile data from Steam HTML (real-time ESM)...');
  const [steam, github] = await Promise.all([fetchSteamHtmlData(), fetchGitHubData()]);

  const existingPath = path.resolve(__dirname, '../data/profile-live.json');
  let existing = {};
  if (fs.existsSync(existingPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(existingPath, 'utf8'));
    } catch (e) {}
  }

  const payload = {
    lastUpdated: new Date().toISOString(),
    timestamp: Date.now(),
    steam: steam || existing.steam || {},
    github: github || existing.github || {}
  };

  const dataDir = path.resolve(__dirname, '../data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  fs.writeFileSync(path.join(dataDir, 'profile-live.json'), JSON.stringify(payload, null, 2));
  console.log('Successfully updated profile-live.json:');
  console.log('Steam State:', payload.steam.onlineState, 'Message:', payload.steam.stateMessage);
  console.log('Recent Games:', payload.steam.recentGames?.map(g => `${g.name} (${g.hours})`));
}

main().catch(console.error);
