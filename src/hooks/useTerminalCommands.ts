import { useState } from 'react';
import gameLinks from '../../gameLinks';

export interface TerminalState {
  proxyActive: boolean;
  vmActive: boolean;
}

export interface TerminalHooks {
  processCommand: (command: string) => string[];
  state: TerminalState;
}

export const useTerminalCommands = (): TerminalHooks => {
  const [secretsFound, setSecretsFound] = useState(0);
  const [proxyActive, setProxyActive] = useState(false);
  const [vmActive, setVmActive] = useState(false);
  const [hackLevel, setHackLevel] = useState(0);
  const [matrixLevel, setMatrixLevel] = useState(0);

  const easterEggs = [
    "🔍 you found a secret! there are more hidden in the code...",
    "🎯 another secret discovered! you're getting good at this...",
    "💎 rare secret unlocked! secret #3 found.",
    "🔥 legendary secret discovered! you're a true hacker now.",
    "⚡ ultimate secret found! you've mastered the system.",
    "🌟 mythical secret unlocked! few have reached this level.",
    "🚀 cosmic secret discovered! you've transcended reality.",
    "👑 final boss secret! you are the chosen one.",
    "🎭 phantom secret revealed! you see beyond the veil.",
    "🔮 oracle secret found! you know the future."
  ];

  const hackMessages = [
    "script kiddie level",
    "amateur hacker",
    "skilled penetrator", 
    "elite black hat",
    "legendary cyber warrior",
    "digital god"
  ];

  // Track undefined windows for panic button
  const undefinedWindows: Window[] = [];

  const openInBlankTab = (url: string, title: string = "Access Portal") => {
    try {
      const win = window.open("", "_blank");
      if (win) {
        // Add to tracking for panic button
        undefinedWindows.push(win);
        
        win.document.open();
        win.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${title}</title>
            <meta name="undefined-portal" content="true">
            <style>
              body { 
                margin: 0; 
                padding: 0; 
                overflow: hidden; 
                background: #000; 
                font-family: 'Courier New', monospace;
              }
              iframe { 
                width: 100vw; 
                height: 100vh; 
                border: none; 
              }
              .loading { 
                color: #0f0; 
                text-align: center; 
                padding: 20px; 
                animation: blink 1s infinite;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1000;
                background: rgba(0,0,0,0.9);
                border: 1px solid #0f0;
                border-radius: 5px;
              }
              @keyframes blink { 
                0%, 50% { opacity: 1; } 
                51%, 100% { opacity: 0; } 
              }
            </style>
          </head>
          <body>
            <div class="loading" id="loading">ESTABLISHING SECURE CONNECTION...</div>
            <iframe src="${url}" allow="fullscreen; microphone; camera; midi; encrypted-media; autoplay; clipboard-read; clipboard-write; web-share" onload="document.getElementById('loading').style.display='none'"></iframe>
          </body>
          </html>
        `);
        win.document.close();
        
        // Clean up closed windows from tracking
        win.addEventListener('beforeunload', () => {
          const index = undefinedWindows.indexOf(win);
          if (index > -1) {
            undefinedWindows.splice(index, 1);
          }
        });
      }
    } catch (error) {
      window.open(url, "_blank");
    }
  };

  const createGameUI = () => {
    const win = window.open("", "_blank");
    if (win) {
      undefinedWindows.push(win);
      
      win.document.open();
      win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>undefined GameUI</title>
          <meta name="undefined-portal" content="true">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
              color: #00ff00;
              font-family: 'Courier New', monospace;
              min-height: 100vh;
              padding: 20px;
            }
            
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #00ffff;
              padding-bottom: 20px;
            }
            
            .title {
              font-size: 2.5rem;
              color: #00ffff;
              text-shadow: 0 0 10px #00ffff;
              margin-bottom: 10px;
            }
            
            .subtitle {
              color: #00cc00;
              font-size: 1rem;
            }
            
            .category {
              margin-bottom: 30px;
            }
            
            .category-title {
              font-size: 1.5rem;
              color: #00ffff;
              margin-bottom: 15px;
              padding: 10px;
              background: rgba(0, 255, 255, 0.1);
              border-left: 4px solid #00ffff;
            }
            
            .games-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              gap: 15px;
            }
            
            .game-card {
              background: rgba(0, 255, 0, 0.05);
              border: 1px solid #333;
              border-radius: 8px;
              padding: 15px;
              cursor: pointer;
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }
            
            .game-card:hover {
              background: rgba(0, 255, 255, 0.1);
              border-color: #00ffff;
              transform: translateY(-2px);
              box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
            }
            
            .game-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
              transition: left 0.5s;
            }
            
            .game-card:hover::before {
              left: 100%;
            }
            
            .game-name {
              font-size: 1.1rem;
              color: #00ff00;
              margin-bottom: 8px;
              font-weight: bold;
            }
            
            .game-desc {
              font-size: 0.9rem;
              color: #00cc00;
              opacity: 0.8;
            }
            
            .search-container {
              margin-bottom: 30px;
              text-align: center;
            }
            
            .search-input {
              background: rgba(0, 0, 0, 0.5);
              border: 2px solid #333;
              color: #00ff00;
              padding: 12px 20px;
              font-size: 1rem;
              border-radius: 25px;
              width: 300px;
              font-family: 'Courier New', monospace;
            }
            
            .search-input:focus {
              outline: none;
              border-color: #00ffff;
              box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="title">🎮 GAME PORTAL</h1>
            <p class="subtitle">undefined collective gaming interface</p>
          </div>
          
          <div class="search-container">
            <input type="text" class="search-input" placeholder="search games..." id="searchInput">
          </div>
          
          <div id="gameContainer"></div>
          
          <script>
            const gameLinks = ${JSON.stringify(gameLinks)};
            
            const categories = {
              "Action & Combat": ['basketbros', '1v1lol', 'retrobowl', 'amongus', 'zombsroyale', 'krunker'],
              "Puzzle & Strategy": ['play2048', 'thereisnogame', 'chess', 'tetris'],
              "Arcade & Racing": ['slope', 'run3', 'motoX3M', 'happywheels', 'jetpackjoyride', 'subwaysurfers', 'templerun2'],
              "Retro Classics": ['sm64', 'sonic', 'supermario', 'kirby', 'doom', 'pokemonemerald'],
              "Adventure & RPG": ['minecraft', 'bitlife', 'bindingofisaac', 'ducklife', 'ducklife2', 'ducklife3', 'ducklife4'],
              "Papa's Games": ['papaspizzeria', 'papasburgeria'],
              "Vex Series": ['vex7', 'vex6', 'vex5', 'vex4', 'vex3', 'vex2', 'vex1'],
              "Tower Defense": ['bloons', 'btdd'],
              "Horror & Thriller": ['fnaf', 'zombietsunami'],
              "Platformers": ['stickmanhook', 'geometrydash', 'fireboywatergirl'],
              "Music & Rhythm": ['fridaynightfunkin'],
              "Casual & Fun": ['crossyroad', 'webecomewhatwebehold']
            };
            
            const gameDescriptions = {
              basketbros: "Basketball multiplayer game",
              slope: "Endless slope running game",
              run3: "Space tunnel running adventure",
              motoX3M: "Extreme motorcycle racing",
              geometrydash: "Rhythm-based platformer",
              "1v1lol": "Building and shooting game",
              vex7: "Latest Vex platformer series",
              minecraft: "Classic Minecraft in browser",
              tetris: "Classic block puzzle game",
              chess: "Play chess against computer",
              play2048: "Number puzzle game",
              bitlife: "Life simulation game",
              sm64: "Super Mario 64 in browser",
              retrobowl: "Retro American football",
              amongus: "Social deduction game",
              fnaf: "Five Nights at Freddy's horror",
              krunker: "Fast-paced FPS shooter",
              zombsroyale: "Battle royale game"
            };
            
            function openGame(gameKey) {
              const url = gameLinks[gameKey];
              if (url) {
                const gameWin = window.open("", "_blank");
                if (gameWin) {
                  gameWin.document.open();
                  gameWin.document.write(\`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <title>\${gameKey} - undefined portal</title>
                      <meta name="undefined-portal" content="true">
                      <style>
                        body { margin: 0; padding: 0; overflow: hidden; background: #000; }
                        iframe { width: 100vw; height: 100vh; border: none; }
                        .loading { 
                          color: #0f0; 
                          font-family: 'Courier New', monospace;
                          text-align: center; 
                          padding: 20px; 
                          animation: blink 1s infinite;
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                          z-index: 1000;
                          background: rgba(0,0,0,0.9);
                          border: 1px solid #0f0;
                          border-radius: 5px;
                        }
                        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
                      </style>
                    </head>
                    <body>
                      <div class="loading" id="loading">LOADING \${gameKey.toUpperCase()}...</div>
                      <iframe src="\${url}" allow="fullscreen; microphone; camera; midi; encrypted-media; autoplay; clipboard-read; clipboard-write; web-share" onload="document.getElementById('loading').style.display='none'"></iframe>
                    </body>
                    </html>
                  \`);
                  gameWin.document.close();
                }
              }
            }
            
            function renderGames() {
              const container = document.getElementById('gameContainer');
              const searchTerm = document.getElementById('searchInput').value.toLowerCase();
              
              container.innerHTML = '';
              
              Object.entries(categories).forEach(([categoryName, games]) => {
                const filteredGames = games.filter(game => 
                  gameLinks[game] && 
                  (searchTerm === '' || game.toLowerCase().includes(searchTerm))
                );
                
                if (filteredGames.length > 0) {
                  const categoryDiv = document.createElement('div');
                  categoryDiv.className = 'category';
                  
                  const titleDiv = document.createElement('div');
                  titleDiv.className = 'category-title';
                  titleDiv.textContent = categoryName;
                  categoryDiv.appendChild(titleDiv);
                  
                  const gridDiv = document.createElement('div');
                  gridDiv.className = 'games-grid';
                  
                  filteredGames.forEach(game => {
                    const gameCard = document.createElement('div');
                    gameCard.className = 'game-card';
                    gameCard.onclick = () => openGame(game);
                    
                    gameCard.innerHTML = \`
                      <div class="game-name">\${game}</div>
                      <div class="game-desc">\${gameDescriptions[game] || 'Click to play'}</div>
                    \`;
                    
                    gridDiv.appendChild(gameCard);
                  });
                  
                  categoryDiv.appendChild(gridDiv);
                  container.appendChild(categoryDiv);
                }
              });
            }
            
            document.getElementById('searchInput').addEventListener('input', renderGames);
            renderGames();
          </script>
        </body>
        </html>
      `);
      win.document.close();
      
      win.addEventListener('beforeunload', () => {
        const index = undefinedWindows.indexOf(win);
        if (index > -1) {
          undefinedWindows.splice(index, 1);
        }
      });
    }
  };

  const processCommand = (command: string): string[] => {
    const cmd = command.toLowerCase().trim();
    const parts = cmd.split(" ");

    // PANIC BUTTON - EMERGENCY CLOSE ALL
    if (cmd === 'panic') {
      try {
        // Close all tracked undefined windows
        undefinedWindows.forEach(win => {
          try {
            if (!win.closed) {
              win.close();
            }
          } catch (e) {
            // Window might already be closed
          }
        });
        
        // Clear the tracking array
        undefinedWindows.length = 0;
        
        // Close current tab
        window.close();
        
        return [
          "🚨 PANIC MODE ACTIVATED 🚨",
          "├─ closing all undefined portals...",
          "├─ clearing digital footprints...",
          "├─ terminating all connections...",
          "└─ ✅ emergency shutdown complete",
          "",
          "all undefined windows have been closed.",
          "stay safe out there."
        ];
      } catch (error) {
        return [
          "🚨 PANIC MODE ACTIVATED 🚨",
          "emergency shutdown initiated...",
          "some windows may require manual closing."
        ];
      }
    }

    // HELP COMMAND
    if (cmd === 'help') {
      return [
        "═══════════════════════════════════════",
        "         UNDEFINED COMMAND CENTER",
        "═══════════════════════════════════════",
        "",
        "🔧 BASIC COMMANDS:",
        "  help - show this help menu",
        "  clear - clear terminal screen",
        "  about - learn about undefined collective",
        "  skills - view hacker skillset",
        "  projects - active operations",
        "  contact - secure communication channels",
        "  whoami - discover your identity",
        "  date - current system time",
        "",
        "🌐 NETWORK & PROXY:",
        "  proxy - launch working proxy portal",
        "  nmap - network scanner simulation",
        "  ping [target] - network connectivity test",
        "  traceroute - trace network path",
        "",
        "💻 VIRTUAL MACHINES:",
        "  vm - windows 11 virtual machine",
        "  vm win10 - windows 10 environment",
        "  vm win7 - windows 7 classic",
        "  vm mint - linux mint system",
        "  vm kali - kali linux (hacker edition)",
        "  vm ubuntu - ubuntu server",
        "  vm macos - macOS environment",
        "  vm android - android emulator",
        "",
        "🎮 GAMES & ENTERTAINMENT:",
        "  open [game] - launch supported games",
        "  open gameui - visual game browser",
        "  open spstream - streaming platform",
        "  music - play hacker beats",
        "",
        "🔐 HACKER TOOLS:",
        "  hack - advanced hacking simulation",
        "  crack - password cracking suite",
        "  exploit - vulnerability scanner",
        "  metasploit - penetration framework",
        "  wireshark - packet analyzer",
        "  john - password cracker",
        "  hydra - brute force tool",
        "  sqlmap - sql injection scanner",
        "",
        "🚨 EMERGENCY:",
        "  panic - close all undefined windows and exit",
        "",
        "═══════════════════════════════════════"
      ];
    }

    // BASIC COMMANDS
    if (cmd === 'clear') return ["undefined system v3.1.4 [type 'help' for full command list]"];

    if (cmd === 'about') return [
      "╔══════════════════════════════════════╗",
      "║           UNDEFINED COLLECTIVE        ║",
      "╚══════════════════════════════════════╝",
      "",
      "we are the undefined - existing in the spaces",
      "between 1 and 0, where logic meets chaos.",
      "",
      "🌐 MISSION:",
      "  - explore digital frontiers",
      "  - push technological boundaries", 
      "  - create art from code",
      "  - break systems to understand them",
      "",
      "👥 COLLECTIVE:",
      "  - hackers, artists, philosophers",
      "  - digital anarchists & code poets",
      "  - reality hackers & system breakers",
      "",
      "📅 ESTABLISHED: 2025",
      "🔥 STATUS: ACTIVE & EVOLVING",
      "💭 MOTTO: 'undefined is not an error, it's a feature'",
      "",
      "we operate beyond conventional boundaries,",
      "in the liminal spaces of cyberspace."
    ];

    if (cmd === 'whoami') {
      const identities = [
        "you are neo, the chosen one",
        "you are a digital ghost in the machine",
        "you are undefined, like us",
        "you are the glitch in the matrix",
        "you are a seeker of hidden truths",
        "you are the one who knocks",
        "you are more than you know"
      ];
      return [identities[Math.floor(Math.random() * identities.length)]];
    }

    if (cmd === 'skills') return [
      "🎯 COLLECTIVE SKILLSET MATRIX:",
      "",
      "🔴 OFFENSIVE SECURITY:",
      "  ████████████ 95% - penetration testing",
      "  ███████████░ 90% - exploit development", 
      "  ██████████░░ 85% - social engineering",
      "  █████████░░░ 80% - zero-day research",
      "",
      "🔵 DEFENSIVE SECURITY:",
      "  ███████████░ 88% - incident response",
      "  ██████████░░ 82% - forensic analysis",
      "  █████████░░░ 78% - threat hunting",
      "",
      "🟢 DEVELOPMENT:",
      "  ████████████ 96% - low-level programming",
      "  ███████████░ 92% - reverse engineering",
      "  ██████████░░ 87% - cryptography",
      "",
      "🟡 CREATIVE ARTS:",
      "  █████████░░░ 75% - glitch art",
      "  ████████░░░░ 70% - algorithmic music",
      "  ███████░░░░░ 65% - digital poetry",
      "",
      "🟣 QUANTUM & AI:",
      "  ██████░░░░░░ 55% - quantum computing",
      "  █████░░░░░░░ 45% - machine learning",
      "  ████░░░░░░░░ 35% - neural networks"
    ];

    if (cmd === 'projects') return [
      "🚀 ACTIVE OPERATIONS STATUS:",
      "",
      "PROJECT GHOST [CLASSIFIED]",
      "├─ stealth networking protocol",
      "├─ status: 73% complete",
      "└─ next milestone: quantum encryption",
      "",
      "PROJECT MIRROR [TOP SECRET]",
      "├─ reality simulation framework", 
      "├─ status: [REDACTED]",
      "└─ clearance level: COSMIC",
      "",
      "PROJECT VOID [OPERATIONAL]",
      "├─ data anonymization suite",
      "├─ status: beta testing phase",
      "└─ deployment: distributed nodes",
      "",
      "PROJECT ECHO [ACTIVE]",
      "├─ quantum communication network",
      "├─ status: fully operational",
      "└─ coverage: global mesh network",
      "",
      "PROJECT PHOENIX [EXPERIMENTAL]",
      "├─ consciousness transfer protocol",
      "├─ status: theoretical phase",
      "└─ ethics review: pending",
      "",
      "⚠️  all projects comply with educational use policies",
      "🔒 classified details available to authorized personnel only"
    ];

    if (cmd === 'contact') return [
      "🔐 SECURE COMMUNICATION PROTOCOLS:",
      "",
      "PRIMARY CHANNELS:",
      "  📧 encrypted email: contact@undefined.void",
      "  🔑 pgp fingerprint: 1337 DEAD BEEF CAFE BABE",
      "  📱 signal: +1-555-UNDEFINED",
      "",
      "VERIFICATION CODES:",
      "  🎭 today's code word: 'digital_phantom'",
      "  🔢 authentication sequence: 7355608",
      "",
      "⚡ all communications are end-to-end encrypted",
      "🛡️  zero-knowledge architecture implemented"
    ];

    if (cmd.startsWith('echo ')) return [command.substring(5)];
    if (cmd === 'date') return [
      `current system time: ${new Date().toString()}`,
      `unix timestamp: ${Math.floor(Date.now() / 1000)}`,
      `matrix time: ${Date.now().toString(16).toUpperCase()}`
    ];

    // NETWORK COMMANDS
    if (cmd === 'proxy') {
      setProxyActive(true);
      openInBlankTab("https://app.nebula.land/", "Nebula Proxy Portal");
      return [
        "🌐 INITIALIZING SECURE PROXY CONNECTION...",
        "├─ routing through encrypted nodes...",
        "├─ masking digital fingerprint...",
        "├─ establishing secure tunnel...",
        "└─ ✅ proxy portal opened in new tab",
        "",
        "🔒 CONNECTION STATUS: SECURED",
        "🌍 EXIT NODE: randomized",
        "⚡ LATENCY: <50ms",
        "🛡️  ENCRYPTION: AES-256"
      ];
    }

    if (cmd === 'nmap') {
      return [
        "🔍 NMAP NETWORK SCANNER v7.94",
        "scanning target network...",
        "",
        "🎯 TARGET: 192.168.1.0/24",
        "📡 SCAN TYPE: TCP SYN stealth scan",
        "",
        "🖥️  DISCOVERED HOSTS:",
        "├─ 192.168.1.1    (router/gateway)",
        "├─ 192.168.1.15   (windows desktop)",
        "├─ 192.168.1.23   (linux server)",
        "├─ 192.168.1.42   (IoT device)",
        "└─ 192.168.1.100  (unknown device)",
        "",
        "🔓 OPEN PORTS DETECTED:",
        "├─ 22/tcp   SSH (secure shell)",
        "├─ 80/tcp   HTTP (web server)",
        "├─ 443/tcp  HTTPS (secure web)",
        "├─ 1337/tcp UNKNOWN (suspicious)",
        "└─ 3389/tcp RDP (remote desktop)",
        "",
        "⚠️  SECURITY ALERT: port 1337 shows unusual activity"
      ];
    }

    if (cmd.startsWith('ping ')) {
      const target = parts[1] || 'localhost';
      return [
        `🏓 PINGING ${target}...`,
        "",
        `64 bytes from ${target}: icmp_seq=1 ttl=64 time=0.123ms`,
        `64 bytes from ${target}: icmp_seq=2 ttl=64 time=0.089ms`,
        `64 bytes from ${target}: icmp_seq=3 ttl=64 time=0.156ms`,
        `64 bytes from ${target}: icmp_seq=4 ttl=64 time=0.098ms`,
        "",
        `--- ${target} ping statistics ---`,
        "4 packets transmitted, 4 received, 0% packet loss",
        "round-trip min/avg/max = 0.089/0.116/0.156 ms"
      ];
    }

    if (cmd === 'traceroute') {
      return [
        "🗺️  TRACEROUTE TO TARGET...",
        "",
        " 1  192.168.1.1      0.5ms   [local gateway]",
        " 2  10.0.0.1         2.1ms   [ISP router]", 
        " 3  203.0.113.1      15.3ms  [regional hub]",
        " 4  198.51.100.1     28.7ms  [backbone router]",
        " 5  * * *                    [filtered]",
        " 6  203.0.113.42     45.2ms  [destination reached]",
        "",
        "🎯 trace complete: 6 hops, 45.2ms total"
      ];
    }

    // VM COMMANDS - MODERN VMs
    if (cmd === 'vm') {
      setVmActive(true);
      openInBlankTab("https://win11.blueedge.me/", "Windows 11 VM");
      return [
        "💻 INITIALIZING WINDOWS 11 VIRTUAL MACHINE...",
        "├─ allocating 8GB RAM...",
        "├─ mounting virtual drives...",
        "├─ loading Windows 11 Pro image...",
        "└─ ✅ VM launched in new tab",
        "",
        "🖥️  VM SPECIFICATIONS:",
        "├─ OS: Windows 11 Pro",
        "├─ RAM: 8192MB",
        "├─ CPU: 4 virtual cores",
        "└─ STORAGE: 50GB virtual disk"
      ];
    }

    if (cmd === 'vm win10') {
      setVmActive(true);
      openInBlankTab("https://win10.blueedge.me/", "Windows 10 VM");
      return [
        "💻 DEPLOYING WINDOWS 10 ENVIRONMENT...",
        "├─ allocating 6GB RAM...",
        "├─ mounting system drives...",
        "├─ loading Windows 10 Pro image...",
        "└─ ✅ Windows 10 VM active in new tab",
        "",
        "🖥️  VM SPECIFICATIONS:",
        "├─ OS: Windows 10 Pro",
        "├─ RAM: 6144MB",
        "├─ CPU: 4 virtual cores",
        "└─ STORAGE: 40GB virtual disk"
      ];
    }

    if (cmd === 'vm win7') {
      setVmActive(true);
      openInBlankTab("https://copy.sh/v86/?profile=windows98", "Windows 7 VM");
      return [
        "💻 LOADING WINDOWS 7 CLASSIC...",
        "├─ allocating 4GB RAM...",
        "├─ mounting legacy drives...",
        "├─ loading Windows 7 Ultimate image...",
        "└─ ✅ Windows 7 VM ready for nostalgia",
        "",
        "🖥️  VM SPECIFICATIONS:",
        "├─ OS: Windows 7 Ultimate",
        "├─ RAM: 4096MB",
        "├─ CPU: 2 virtual cores",
        "└─ STORAGE: 30GB virtual disk"
      ];
    }

    if (cmd === 'vm mint') {
      setVmActive(true);
      openInBlankTab("https://distrotest.net/Linux%20Mint", "Linux Mint VM");
      return [
        "🐧 INITIALIZING LINUX MINT ENVIRONMENT...",
        "├─ allocating 4GB RAM...",
        "├─ mounting ext4 filesystem...",
        "├─ loading Linux Mint 21 image...",
        "└─ ✅ Linux Mint VM active in new tab",
        "",
        "🖥️  VM SPECIFICATIONS:",
        "├─ OS: Linux Mint 21 Cinnamon",
        "├─ RAM: 4096MB",
        "├─ CPU: 2 virtual cores",
        "└─ STORAGE: 25GB virtual disk"
      ];
    }

    if (cmd === 'vm kali') {
      setVmActive(true);
      openInBlankTab("https://distrotest.net/Kali", "Kali Linux VM");
      return [
        "🔴 LOADING KALI LINUX - HACKER EDITION...",
        "├─ mounting penetration testing tools...",
        "├─ configuring exploit frameworks...",
        "├─ loading security arsenal...",
        "└─ ✅ Kali Linux VM ready for operations",
        "",
        "🖥️  VM SPECIFICATIONS:",
        "├─ OS: Kali Linux 2023.4",
        "├─ RAM: 6144MB",
        "├─ CPU: 4 virtual cores",
        "├─ STORAGE: 40GB virtual disk",
        "└─ TOOLS: 600+ security tools loaded",
        "",
        "⚠️  WARNING: for educational purposes only"
      ];
    }

    if (cmd === 'vm ubuntu') {
      setVmActive(true);
      openInBlankTab("https://distrotest.net/Ubuntu", "Ubuntu VM");
      return [
        "🐧 DEPLOYING UBUNTU SERVER...",
        "├─ allocating 4GB RAM...",
        "├─ mounting ext4 filesystem...",
        "├─ loading Ubuntu 22.04 LTS image...",
        "└─ ✅ Ubuntu Server VM operational",
        "",
        "🖥️  VM SPECIFICATIONS:",
        "├─ OS: Ubuntu 22.04 LTS Server",
        "├─ RAM: 4096MB",
        "├─ CPU: 2 virtual cores",
        "└─ STORAGE: 30GB virtual disk"
      ];
    }

    if (cmd === 'vm macos') {
      setVmActive(true);
      openInBlankTab("https://macos.now.sh/", "macOS VM");
      return [
        "🍎 INITIALIZING MACOS ENVIRONMENT...",
        "├─ allocating 8GB RAM...",
        "├─ mounting APFS filesystem...",
        "├─ loading macOS Monterey image...",
        "└─ ✅ macOS VM active in new tab",
        "",
        "🖥️  VM SPECIFICATIONS:",
        "├─ OS: macOS Monterey",
        "├─ RAM: 8192MB",
        "├─ CPU: 4 virtual cores",
        "└─ STORAGE: 50GB virtual disk"
      ];
    }

    if (cmd === 'vm android') {
      setVmActive(true);
      openInBlankTab("https://appetize.io/demo", "Android VM");
      return [
        "🤖 LOADING ANDROID EMULATOR...",
        "├─ allocating 4GB RAM...",
        "├─ mounting Android filesystem...",
        "├─ loading Android 12 image...",
        "└─ ✅ Android VM ready for testing",
        "",
        "🖥️  VM SPECIFICATIONS:",
        "├─ OS: Android 12",
        "├─ RAM: 4096MB",
        "├─ CPU: 4 virtual cores",
        "└─ STORAGE: 32GB virtual disk"
      ];
    }

    // GAME COMMANDS
    if (parts[0] === 'open' && parts[1]) {
      const gameKey = parts.slice(1).join("").toLowerCase();
      
      if (gameKey === 'gameui') {
        createGameUI();
        return ["🎮 visual game browser interface launched in new tab"];
      }
      
      if (gameKey === 'spstream') {
        openInBlankTab("https://streamed.su/", "SP Stream Portal");
        return ["🎬 streaming platform portal opened in new tab"];
      }
      
      if (gameLinks[gameKey]) {
        openInBlankTab(gameLinks[gameKey], `${gameKey} - Game Portal`);
        return [`🎯 launching ${gameKey} in secure gaming environment...`];
      } else {
        return ["❌ game not found in database. try 'open gameui' for browser"];
      }
    }

    // HACKER TOOLS
    if (cmd === 'hack') {
      setHackLevel(prev => Math.min(prev + 1, hackMessages.length - 1));
      return [
        "🔥 ADVANCED HACKING SEQUENCE INITIATED...",
        "├─ scanning for vulnerabilities...",
        "├─ found 23 potential entry points",
        "├─ attempting buffer overflow attack...",
        "├─ bypassing WAF (web application firewall)...",
        "├─ escalating privileges to root...",
        "├─ accessing encrypted databases...",
        "├─ extracting sensitive information...",
        "├─ planting backdoor for persistence...",
        "├─ covering digital footprints...",
        "└─ ✅ HACK SEQUENCE COMPLETE",
        "",
        `🎯 HACKER LEVEL: ${hackMessages[hackLevel]}`,
        "📊 SUCCESS RATE: 99.7%",
        "🕐 TIME ELAPSED: 3.14 seconds",
        "🔒 FILES ACQUIRED: 1337",
        "👻 DETECTION PROBABILITY: 0.01%",
        "",
        "⚠️  DISCLAIMER: this is a simulation for educational purposes"
      ];
    }

    // ENTERTAINMENT
    if (cmd === 'music') {
      return [
        "🎵 HACKER BEATS PLAYLIST ACTIVATED",
        "",
        "♪ now playing: 'digital underground' by undefined collective",
        "",
        "🎧 TRACKLIST:",
        "├─ 01. binary dreams",
        "├─ 02. ghost in the shell",
        "├─ 03. neon nights",
        "├─ 04. cyber punk anthem",
        "├─ 05. matrix reloaded",
        "├─ 06. quantum entanglement",
        "├─ 07. digital rain",
        "└─ 08. undefined frequencies",
        "",
        "🔊 VOLUME: ████████░░ 80%",
        "🎛️  EQ: bass boosted for maximum impact",
        "",
        "♫ the rhythm of the machine... ♫"
      ];
    }

    // CLASSIC EASTER EGGS
    if (cmd === 'sudo') return ["nice try, but you don't have root privileges here."];
    if (cmd === 'exit' || cmd === 'quit') return ["there is no exit from this reality."];
    if (cmd === '42' || cmd === 'meaning of life') return ["so you're a hitchhiker's guide fan? respect."];
    if (cmd === 'coffee') return ["brewing virtual coffee... ☕ enjoy!"];

    return [`command not found: ${command}. type 'help' for available commands.`];
  };

  return {
    processCommand,
    state: {
      proxyActive,
      vmActive
    }
  };
};