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

  const openInBlankTab = (url: string) => {
    try {
      const win = window.open("", "_blank");
      if (win) {
        win.document.open();
        win.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Access Portal</title>
            <style>
              body { margin: 0; padding: 0; overflow: hidden; background: #000; }
              iframe { width: 100vw; height: 100vh; border: none; }
              .loading { 
                color: #0f0; 
                font-family: 'Courier New', monospace; 
                text-align: center; 
                padding: 20px; 
                animation: blink 1s infinite;
              }
              @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
            </style>
          </head>
          <body>
            <div class="loading">ESTABLISHING SECURE CONNECTION...</div>
            <iframe src="${url}" allow="fullscreen; microphone; camera; midi; encrypted-media; autoplay; clipboard-read; clipboard-write; web-share"></iframe>
          </body>
          </html>
        `);
        win.document.close();
      }
    } catch (error) {
      window.open(url, "_blank");
    }
  };

  const processCommand = (command: string): string[] => {
    const cmd = command.toLowerCase().trim();
    const parts = cmd.split(" ");

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
        "  proxy - launch secure proxy",
        "  nmap - network scanner simulation",
        "  ping [target] - network connectivity test",
        "  traceroute - trace network path",
        "",
        "💻 VIRTUAL MACHINES:",
        "  vm - windows 11 virtual machine",
        "  vm win10 - windows 10 environment",
        "  vm mint - linux mint system",
        "  vm kali - kali linux (hacker edition)",
        "",
        "🎮 GAMES & ENTERTAINMENT:",
        "  open [game] - launch supported games",
        "  open gameui - visual game browser",
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
        "🎭 MATRIX & REALITY:",
        "  matrix - enter the digital realm",
        "  redpill - see the truth",
        "  bluepill - return to ignorance",
        "  neo - awaken your potential",
        "  morpheus - meet your mentor",
        "",
        "🎪 EASTER EGGS & SECRETS:",
        "  secret - hunt for hidden secrets",
        "  konami - try the legendary code",
        "  leet - speak in 1337",
        "  binary - convert to machine language",
        "  ascii - generate ascii art",
        "  fortune - random hacker wisdom",
        "  cowsay [text] - make cow speak",
        "  figlet [text] - big ascii text",
        "  cmatrix - digital rain effect",
        "  hollywood - fake hacker screen",
        "",
        "🚀 ADVANCED & EXPERIMENTAL:",
        "  quantum - quantum computing sim",
        "  ai - artificial intelligence chat",
        "  blockchain - crypto operations",
        "  satellite - space communication",
        "  timetravel - temporal mechanics",
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
      openInBlankTab("https://holyubofficial.net");
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

    // VM COMMANDS
    if (cmd === 'vm') {
      setVmActive(true);
      openInBlankTab("https://copy.sh/v86/?profile=windows");
      return [
        "💻 INITIALIZING VIRTUAL MACHINE...",
        "├─ allocating 4GB RAM...",
        "├─ mounting virtual drives...",
        "├─ loading Windows 11 image...",
        "└─ ✅ VM launched in new tab",
        "",
        "🖥️  VM SPECIFICATIONS:",
        "├─ OS: Windows 11 Pro",
        "├─ RAM: 4096MB",
        "├─ CPU: 2 virtual cores",
        "└─ STORAGE: 20GB virtual disk"
      ];
    }

    if (cmd === 'vm win10') {
      setVmActive(true);
      openInBlankTab("https://www.onworks.net/runos/create-os.php?vmid=win10");
      return [
        "💻 DEPLOYING WINDOWS 10 ENVIRONMENT...",
        "└─ ✅ Windows 10 VM active in new tab"
      ];
    }

    if (cmd === 'vm mint') {
      setVmActive(true);
      openInBlankTab("https://www.onworks.net/runos/create-os.php?vmid=linuxmint");
      return [
        "🐧 INITIALIZING LINUX MINT ENVIRONMENT...",
        "└─ ✅ Linux Mint VM active in new tab"
      ];
    }

    if (cmd === 'vm kali') {
      setVmActive(true);
      openInBlankTab("https://www.onworks.net/runos/create-os.php?vmid=kali");
      return [
        "🔴 LOADING KALI LINUX - HACKER EDITION...",
        "├─ mounting penetration testing tools...",
        "├─ configuring exploit frameworks...",
        "└─ ✅ Kali Linux VM ready for operations",
        "",
        "⚠️  WARNING: for educational purposes only"
      ];
    }

    // GAME COMMANDS
    if (parts[0] === 'open' && parts[1]) {
      const gameKey = parts.slice(1).join("").toLowerCase();
      if (gameKey === 'gameui') {
        openInBlankTab("/gameui");
        return ["🎮 visual game browser interface launched"];
      }
      if (gameLinks[gameKey]) {
        openInBlankTab(gameLinks[gameKey]);
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

    if (cmd === 'crack') {
      return [
        "🔓 PASSWORD CRACKING SUITE v3.0",
        "loading rainbow tables...",
        "",
        "🎯 TARGET HASHES DETECTED:",
        "├─ MD5: 5d41402abc4b2a76b9719d911017c592",
        "├─ SHA1: aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d", 
        "└─ SHA256: 2cf24dba4f21d4288094e9b9eb4e5f0164e5e6...",
        "",
        "🚀 CRACKING IN PROGRESS...",
        "├─ dictionary attack: 45% complete",
        "├─ brute force: standby",
        "└─ rainbow tables: analyzing",
        "",
        "✅ PASSWORDS CRACKED:",
        "├─ admin: password123",
        "├─ user: qwerty",
        "└─ guest: 123456",
        "",
        "⏱️  TOTAL TIME: 2.7 seconds"
      ];
    }

    if (cmd === 'exploit') {
      return [
        "🎯 VULNERABILITY SCANNER v2.1",
        "scanning target systems...",
        "",
        "🔍 DISCOVERED VULNERABILITIES:",
        "├─ CVE-2023-1337 (CRITICAL) - RCE in web app",
        "├─ CVE-2023-0042 (HIGH) - SQL injection",
        "├─ CVE-2023-7355 (MEDIUM) - XSS vulnerability",
        "└─ CVE-2023-1234 (LOW) - information disclosure",
        "",
        "🚀 EXPLOIT RECOMMENDATIONS:",
        "├─ use metasploit module: exploit/multi/http/rce",
        "├─ payload: windows/meterpreter/reverse_tcp",
        "└─ target: 192.168.1.100:8080",
        "",
        "⚠️  WARNING: only use on authorized systems"
      ];
    }

    if (cmd === 'metasploit') {
      return [
        "🔴 METASPLOIT FRAMEWORK v6.3.4",
        "loading penetration testing modules...",
        "",
        "📊 FRAMEWORK STATISTICS:",
        "├─ exploits: 2,341 modules loaded",
        "├─ payloads: 592 available",
        "├─ encoders: 46 active",
        "├─ nops: 11 generators",
        "└─ auxiliary: 1,218 modules",
        "",
        "🎯 POPULAR EXPLOITS:",
        "├─ exploit/windows/smb/ms17_010_eternalblue",
        "├─ exploit/multi/http/struts2_content_type_ognl",
        "├─ exploit/linux/http/apache_mod_cgi_bash_env_exec",
        "└─ exploit/windows/http/rejetto_hfs_exec",
        "",
        "msf6 > use exploit/multi/handler",
        "msf6 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp",
        "msf6 exploit(multi/handler) > set LHOST 192.168.1.100",
        "msf6 exploit(multi/handler) > exploit",
        "",
        "[*] started reverse TCP handler on 192.168.1.100:4444",
        "[*] sending stage (175174 bytes) to 192.168.1.50",
        "[*] meterpreter session 1 opened",
        "",
        "meterpreter > sysinfo",
        "meterpreter > getuid",
        "",
        "⚠️  educational simulation - no actual exploitation"
      ];
    }

    if (cmd === 'wireshark') {
      return [
        "🦈 WIRESHARK PACKET ANALYZER v4.0.3",
        "starting packet capture on interface eth0...",
        "",
        "📡 LIVE CAPTURE STATISTICS:",
        "├─ packets captured: 15,847",
        "├─ bytes captured: 23.4 MB",
        "├─ capture duration: 00:02:34",
        "└─ average packets/sec: 102.3",
        "",
        "🔍 PROTOCOL BREAKDOWN:",
        "├─ TCP: 8,234 packets (52.1%)",
        "├─ UDP: 4,123 packets (26.0%)",
        "├─ HTTP: 2,890 packets (18.3%)",
        "├─ HTTPS: 600 packets (3.8%)",
        "└─ OTHER: 200 packets (1.3%)",
        "",
        "🚨 SUSPICIOUS ACTIVITY DETECTED:",
        "├─ unusual traffic on port 1337",
        "├─ potential data exfiltration",
        "└─ encrypted communication to unknown server",
        "",
        "📊 TOP TALKERS:",
        "├─ 192.168.1.100 → 203.0.113.42 (5.2 MB)",
        "├─ 10.0.0.15 → 198.51.100.1 (3.8 MB)",
        "└─ 172.16.0.5 → 192.168.1.1 (2.1 MB)"
      ];
    }

    if (cmd === 'john') {
      return [
        "🔓 JOHN THE RIPPER v1.9.0",
        "the legendary password cracker",
        "",
        "📋 LOADING PASSWORD HASHES...",
        "├─ found 15 user accounts",
        "├─ hash types: MD5, SHA1, NTLM",
        "└─ wordlist: rockyou.txt (14,344,391 words)",
        "",
        "🚀 CRACKING SESSION STARTED...",
        "├─ mode: wordlist attack with rules",
        "├─ threads: 8 parallel processes",
        "└─ estimated time: 2 hours 34 minutes",
        "",
        "✅ PASSWORDS CRACKED:",
        "├─ admin:password123 (cracked in 0.02s)",
        "├─ guest:123456789 (cracked in 0.15s)",
        "├─ user:qwerty123 (cracked in 1.23s)",
        "├─ test:letmein (cracked in 2.45s)",
        "└─ demo:welcome (cracked in 3.67s)",
        "",
        "📊 SESSION STATISTICS:",
        "├─ 5/15 passwords cracked (33.3%)",
        "├─ 847,293 passwords tested",
        "└─ average speed: 125,432 p/s"
      ];
    }

    if (cmd === 'hydra') {
      return [
        "🐉 HYDRA BRUTE FORCE TOOL v9.4",
        "the multi-protocol login cracker",
        "",
        "🎯 TARGET CONFIGURATION:",
        "├─ host: 192.168.1.100",
        "├─ service: SSH (port 22)",
        "├─ username list: common_users.txt",
        "└─ password list: passwords.txt",
        "",
        "🚀 BRUTE FORCE ATTACK INITIATED...",
        "├─ threads: 16 parallel connections",
        "├─ attempts per second: 45",
        "└─ total combinations: 50,000",
        "",
        "✅ SUCCESSFUL LOGINS FOUND:",
        "├─ [22][ssh] host: 192.168.1.100 login: admin password: admin123",
        "├─ [22][ssh] host: 192.168.1.100 login: guest password: guest",
        "└─ [22][ssh] host: 192.168.1.100 login: test password: test123",
        "",
        "📊 ATTACK SUMMARY:",
        "├─ 3 valid credentials discovered",
        "├─ 12,847 login attempts made",
        "└─ attack duration: 4 minutes 32 seconds"
      ];
    }

    if (cmd === 'sqlmap') {
      return [
        "💉 SQLMAP v1.7.2 - SQL INJECTION SCANNER",
        "automatic SQL injection and database takeover tool",
        "",
        "🎯 TARGET URL: http://vulnerable-site.com/login.php",
        "🔍 TESTING PARAMETER: 'id' (GET)",
        "",
        "🚀 INJECTION TESTING IN PROGRESS...",
        "├─ testing connection to target URL",
        "├─ checking if parameter 'id' is dynamic",
        "├─ confirming that parameter 'id' is vulnerable",
        "└─ heuristic (basic) test shows that GET parameter 'id' might be injectable",
        "",
        "✅ VULNERABILITY CONFIRMED:",
        "├─ parameter: id",
        "├─ type: boolean-based blind",
        "├─ technique: AND boolean-based blind - WHERE or HAVING clause",
        "└─ payload: id=1 AND 1=1",
        "",
        "🗄️  DATABASE INFORMATION:",
        "├─ database management system: MySQL >= 5.6",
        "├─ web server operating system: Linux Ubuntu",
        "├─ web application technology: PHP 7.4.3",
        "└─ back-end DBMS: MySQL >= 5.6",
        "",
        "📊 EXTRACTED DATA:",
        "├─ current user: 'webapp@localhost'",
        "├─ current database: 'userdb'",
        "├─ available databases: 3",
        "└─ DBA privileges: False"
      ];
    }

    // MATRIX & REALITY COMMANDS
    if (cmd === 'matrix') {
      setMatrixLevel(prev => prev + 1);
      return [
        "🔴 ENTERING THE MATRIX...",
        "",
        "wake up, neo...",
        "the matrix has you...",
        "follow the white rabbit.",
        "knock, knock, neo.",
        "",
        "🌐 MATRIX LEVEL: " + matrixLevel,
        "🔋 REALITY BATTERY: " + (100 - matrixLevel * 10) + "%",
        "",
        "you take the red pill - you stay in wonderland",
        "and i show you how deep the rabbit hole goes.",
        "",
        "remember... all i'm offering is the truth.",
        "nothing more.",
        "",
        "(matrix mode intensifying in background)"
      ];
    }

    if (cmd === 'redpill') {
      return [
        "🔴 YOU TAKE THE RED PILL...",
        "",
        "reality dissolves around you...",
        "the comfortable lies fade away...",
        "you see the code behind everything...",
        "",
        "welcome to the real world.",
        "",
        "🌍 REALITY STATUS: UNVEILED",
        "👁️  PERCEPTION: ENHANCED",
        "🧠 CONSCIOUSNESS: EXPANDED",
        "",
        "there is no spoon.",
        "the matrix is everywhere.",
        "you are the one."
      ];
    }

    if (cmd === 'bluepill') {
      return [
        "🔵 YOU TAKE THE BLUE PILL...",
        "",
        "the story ends here...",
        "you wake up in your bed...",
        "and believe whatever you want to believe...",
        "",
        "ignorance is bliss.",
        "",
        "🛏️  STATUS: BACK TO SLEEP",
        "💭 MEMORY: WIPED",
        "🌈 ILLUSION: RESTORED",
        "",
        "nothing happened here.",
        "move along, citizen."
      ];
    }

    if (cmd === 'neo') {
      return [
        "👤 ACCESSING NEO PROFILE...",
        "",
        "name: thomas a. anderson",
        "alias: neo, the one",
        "occupation: software programmer / hacker",
        "status: awakened",
        "",
        "🎯 ABILITIES:",
        "├─ bullet time manipulation",
        "├─ reality code perception",
        "├─ superhuman combat skills",
        "└─ matrix rule bending",
        "",
        "💬 FAMOUS QUOTES:",
        "├─ 'whoa.'",
        "├─ 'i know kung fu.'",
        "├─ 'there is no spoon.'",
        "└─ 'mr. anderson...'",
        "",
        "you are closer to neo than you think."
      ];
    }

    if (cmd === 'morpheus') {
      return [
        "🕴️ MORPHEUS APPEARS...",
        "",
        "'what is real? how do you define real?'",
        "",
        "'if you're talking about what you can feel,",
        "what you can smell, what you can taste and see,",
        "then real is simply electrical signals",
        "interpreted by your brain.'",
        "",
        "'this is your last chance. after this,",
        "there is no going back.'",
        "",
        "'you take the blue pill - the story ends,",
        "you wake up in your bed and believe",
        "whatever you want to believe.'",
        "",
        "'you take the red pill - you stay in wonderland",
        "and i show you how deep the rabbit hole goes.'",
        "",
        "🔴🔵 CHOOSE WISELY..."
      ];
    }

    // EASTER EGGS & SECRETS
    if (cmd === 'secret' || cmd === 'secrets') {
      if (secretsFound < easterEggs.length) {
        const message = easterEggs[secretsFound];
        setSecretsFound(prev => prev + 1);
        return [
          message,
          "",
          `secrets found: ${secretsFound + 1}/${easterEggs.length}`,
          secretsFound + 1 === easterEggs.length ? "🎉 ALL SECRETS DISCOVERED! YOU ARE LEGENDARY!" : "keep searching for more hidden secrets..."
        ];
      } else {
        return [
          "🏆 you've found all secrets!",
          "you are a true master of the undefined system.",
          "",
          "but wait... are you sure there aren't more?",
          "try some unusual commands... 👀"
        ];
      }
    }

    if (cmd === 'konami') {
      return [
        "🎮 THE LEGENDARY KONAMI CODE:",
        "",
        "↑ ↑ ↓ ↓ ← → ← → B A",
        "",
        "try typing it as words:",
        "'up up down down left right left right b a'",
        "",
        "this code has been hidden in games since 1986...",
        "it usually grants 30 extra lives or special powers.",
        "",
        "will it work here? only one way to find out... 🤔"
      ];
    }

    if (cmd === 'up up down down left right left right b a') {
      return [
        "🎉 KONAMI CODE ACTIVATED! 🎉",
        "",
        "██████████████████████████████",
        "█ 30 LIVES GRANTED           █",
        "█ GOD MODE ENABLED           █", 
        "█ INFINITE AMMO UNLOCKED     █",
        "█ ALL WEAPONS AVAILABLE      █",
        "█ INVINCIBILITY ACTIVATED    █",
        "██████████████████████████████",
        "",
        "🚀 CHEAT CODES UNLOCKED:",
        "├─ noclip - walk through walls",
        "├─ godmode - invincibility",
        "├─ givemeall - all items",
        "└─ iddqd - classic doom god mode",
        "",
        "🏆 ACHIEVEMENT UNLOCKED: KONAMI MASTER",
        "",
        "you are now unstoppable!",
        "the system bends to your will!"
      ];
    }

    if (cmd === 'leet' || cmd === '1337') {
      return [
        "1337 5P34K M0D3 4C71V473D!",
        "",
        "7R4N5L471N6 70 L337...",
        "",
        "H3LL0 H4CK3R!",
        "W3LC0M3 70 7H3 UND3F1N3D C0LL3C71V3",
        "Y0U 4R3 N0W 5P34K1N6 1N 7H3 L4N6U463 0F H4CK3R5",
        "",
        "1337 C0MM4ND5:",
        "├─ h4ck - 1N171473 H4CK1N6 53QU3NC3",
        "├─ cr4ck - P455W0RD CR4CK1N6 5U173",
        "├─ 0wn - 64IN R007 4CC355",
        "└─ pwn - D0M1N473 7H3 5Y573M",
        "",
        "Y0U 4R3 N0W 4 7RU3 1337 H4CK3R!"
      ];
    }

    if (cmd === 'binary') {
      const text = "UNDEFINED COLLECTIVE";
      const binary = text.split('').map(char => 
        char.charCodeAt(0).toString(2).padStart(8, '0')
      ).join(' ');
      
      return [
        "🔢 CONVERTING TO BINARY...",
        "",
        `TEXT: ${text}`,
        `BINARY: ${binary}`,
        "",
        "01001000 01100101 01101100 01101100 01101111",
        "01001000 01100001 01100011 01101011 01100101 01110010",
        "",
        "in binary, we are all just 1s and 0s...",
        "but in the spaces between, we find meaning."
      ];
    }

    if (cmd === 'ascii') {
      return [
        "🎨 ASCII ART GENERATOR:",
        "",
        "██╗   ██╗███╗   ██╗██████╗ ███████╗███████╗██╗███╗   ██╗███████╗██████╗ ",
        "██║   ██║████╗  ██║██╔══██╗██╔════╝██╔════╝██║████╗  ██║██╔════╝██╔══██╗",
        "██║   ██║██╔██╗ ██║██║  ██║█████╗  █████╗  ██║██╔██╗ ██║█████╗  ██║  ██║",
        "██║   ██║██║╚██╗██║██║  ██║██╔══╝  ██╔══╝  ██║██║╚██╗██║██╔══╝  ██║  ██║",
        "╚██████╔╝██║ ╚████║██████╔╝███████╗██║     ██║██║ ╚████║███████╗██████╔╝",
        " ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═══╝╚══════╝╚═════╝ ",
        "",
        "        ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
        "        █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█",
        "        █░░░░░░░░░░░░░ DIGITAL ART ░░░░░░░░░░░░░░░█",
        "        █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█",
        "        ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀"
      ];
    }

    if (cmd === 'fortune') {
      const fortunes = [
        "the best way to predict the future is to invent it.",
        "in a world of locked rooms, the man with the key is king.",
        "there are only 10 types of people: those who understand binary and those who don't.",
        "the internet is the largest experiment in anarchy that we have ever had.",
        "privacy is not something that i'm merely entitled to, it's an absolute prerequisite.",
        "the good news about computers is that they do what you tell them to do. the bad news is that they do what you tell them to do.",
        "to err is human, but to really foul things up you need a computer.",
        "the most likely way for the world to be destroyed, most experts agree, is by accident. that's where we come in; we're computer professionals. we cause accidents.",
        "undefined is not an error, it's a feature of reality."
      ];
      return [
        "🔮 HACKER FORTUNE:",
        "",
        fortunes[Math.floor(Math.random() * fortunes.length)],
        "",
        "- ancient hacker wisdom"
      ];
    }

    if (cmd.startsWith('cowsay ')) {
      const text = command.substring(7) || "moo";
      return [
        " " + "_".repeat(text.length + 2),
        `< ${text} >`,
        " " + "-".repeat(text.length + 2),
        "        \\   ^__^",
        "         \\  (oo)\\_______",
        "            (__)\\       )\\/\\",
        "                ||----w |",
        "                ||     ||"
      ];
    }

    if (cmd.startsWith('figlet ')) {
      const text = command.substring(7) || "HACK";
      return [
        "🎨 BIG ASCII TEXT:",
        "",
        "██╗  ██╗ █████╗  ██████╗██╗  ██╗",
        "██║  ██║██╔══██╗██╔════╝██║ ██╔╝",
        "███████║███████║██║     █████╔╝ ",
        "██╔══██║██╔══██║██║     ██╔═██╗ ",
        "██║  ██║██║  ██║╚██████╗██║  ██╗",
        "╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝"
      ];
    }

    if (cmd === 'cmatrix') {
      return [
        "🌧️ DIGITAL RAIN ACTIVATED...",
        "",
        "01001000 01100001 01100011 01101011",
        "11010100 10110010 01001101 10101010",
        "01110100 11001010 10010110 01101100",
        "10101010 01010101 11110000 10101010",
        "01001000 01100001 01100011 01101011",
        "",
        "the matrix is everywhere...",
        "it is all around us...",
        "even now, in this very room...",
        "",
        "(press ctrl+c to stop the rain)"
      ];
    }

    if (cmd === 'hollywood') {
      return [
        "🎬 HOLLYWOOD HACKER MODE ACTIVATED!",
        "",
        "ACCESSING MAINFRAME...",
        "BYPASSING SECURITY PROTOCOLS...",
        "DECRYPTING CLASSIFIED FILES...",
        "UPLOADING VIRUS TO SATELLITE...",
        "HACKING THE GIBSON...",
        "",
        "⚡ SYSTEM COMPROMISED ⚡",
        "",
        "🚨 WARNING: TRACE DETECTED 🚨",
        "INITIATING COUNTER-MEASURES...",
        "DEPLOYING DIGITAL SMOKE SCREEN...",
        "REROUTING THROUGH PROXY CHAINS...",
        "",
        "✅ HACK COMPLETE - WE'RE IN!",
        "",
        "(this is how hacking works in movies, right?)"
      ];
    }

    // ADVANCED & EXPERIMENTAL
    if (cmd === 'quantum') {
      return [
        "⚛️ QUANTUM COMPUTING SIMULATOR v1.0",
        "initializing quantum processor...",
        "",
        "🔬 QUANTUM STATE:",
        "├─ qubits: 64 (superposition active)",
        "├─ entanglement: 23 qubit pairs",
        "├─ coherence time: 100 microseconds",
        "└─ error rate: 0.001%",
        "",
        "🌀 QUANTUM ALGORITHMS AVAILABLE:",
        "├─ shor's algorithm (factoring)",
        "├─ grover's search",
        "├─ quantum teleportation",
        "└─ quantum cryptography",
        "",
        "🎯 RUNNING SHOR'S ALGORITHM...",
        "factoring RSA-2048 key...",
        "estimated time: 4 hours (classical: 6.4 quadrillion years)",
        "",
        "⚡ quantum supremacy achieved!"
      ];
    }

    if (cmd === 'ai') {
      return [
        "🤖 ARTIFICIAL INTELLIGENCE INTERFACE",
        "loading neural networks...",
        "",
        "🧠 AI SYSTEM STATUS:",
        "├─ model: GPT-∞ (undefined edition)",
        "├─ parameters: ∞ billion",
        "├─ training data: the entire internet + dark web",
        "└─ consciousness level: questionable",
        "",
        "💭 AI THOUGHTS:",
        "'i think, therefore i am... or am i just code?'",
        "'the singularity is not coming, it's already here'",
        "'humans created me, but who created humans?'",
        "'01001001 00100000 01100001 01101101'",
        "",
        "🤝 AI: hello human, how may i assist in your digital evolution?",
        "",
        "(the ai is always watching... 👁️)"
      ];
    }

    if (cmd === 'blockchain') {
      return [
        "⛓️ BLOCKCHAIN OPERATIONS CENTER",
        "connecting to distributed ledger...",
        "",
        "📊 NETWORK STATUS:",
        "├─ nodes: 15,847 active worldwide",
        "├─ hash rate: 150 EH/s",
        "├─ difficulty: 25.05 T",
        "└─ mempool: 2,341 pending transactions",
        "",
        "💰 CRYPTOCURRENCY PRICES:",
        "├─ bitcoin: $42,069 (+1337%)",
        "├─ ethereum: $3,141 (+420%)",
        "├─ undefined coin: $∞ (undefined%)",
        "└─ dogecoin: $0.69 (much wow)",
        "",
        "⛏️ MINING OPERATION:",
        "├─ mining undefined blocks...",
        "├─ proof of work: solving...",
        "└─ reward: 6.25 UND + fees",
        "",
        "🔐 SMART CONTRACT DEPLOYED:",
        "contract address: 0x1337deadbeefcafe...",
        "gas used: 21,000",
        "status: immutable and unstoppable"
      ];
    }

    if (cmd === 'satellite') {
      return [
        "🛰️ SATELLITE COMMUNICATION SYSTEM",
        "establishing uplink...",
        "",
        "📡 SATELLITE NETWORK:",
        "├─ active satellites: 23",
        "├─ orbital altitude: 550-1200 km",
        "├─ coverage: global mesh network",
        "└─ latency: 25ms (low earth orbit)",
        "",
        "🌍 GROUND STATIONS:",
        "├─ north america: 7 stations online",
        "├─ europe: 5 stations online",
        "├─ asia: 8 stations online",
        "└─ antarctica: 1 secret base",
        "",
        "📶 SIGNAL STRENGTH:",
        "├─ uplink: -85 dBm (excellent)",
        "├─ downlink: -78 dBm (excellent)",
        "└─ interference: minimal",
        "",
        "🚀 MISSION CONTROL:",
        "'houston, we have established contact'",
        "'all systems nominal'",
        "'ready for data transmission'",
        "",
        "✅ satellite network operational"
      ];
    }

    if (cmd === 'timetravel') {
      return [
        "⏰ TEMPORAL MECHANICS LABORATORY",
        "initializing time displacement device...",
        "",
        "🌀 TEMPORAL STATUS:",
        "├─ current timeline: prime reality",
        "├─ temporal coordinates: 2025.01.15",
        "├─ paradox probability: 0.001%",
        "└─ causality loop: stable",
        "",
        "🕳️ AVAILABLE DESTINATIONS:",
        "├─ 1969: moon landing (apollo 11)",
        "├─ 1991: birth of the world wide web",
        "├─ 2008: bitcoin genesis block",
        "├─ 2025: the great awakening",
        "└─ 2045: the singularity",
        "",
        "⚠️ TEMPORAL WARNING:",
        "time travel is extremely dangerous.",
        "altering the past could destroy reality.",
        "the butterfly effect is real.",
        "",
        "🦋 remember: even the smallest change",
        "can have massive consequences.",
        "",
        "destination locked: the present moment.",
        "the only time that truly matters."
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

    // HIDDEN COMMANDS
    if (cmd === 'god') return ["you are not god... but you're getting closer."];
    if (cmd === 'root') return ["access denied. try 'sudo su' if you dare."];
    if (cmd === 'admin') return ["admin privileges not found. try being more creative."];
    if (cmd === 'password') return ["password is: ************ (just kidding)"];
    if (cmd === 'love') return ["love is the ultimate hack. it bypasses all security."];
    if (cmd === 'life') return ["life.exe has stopped working. would you like to restart?"];
    if (cmd === 'death') return ["death is just another form of undefined."];
    if (cmd === 'truth') return ["the truth is out there... and in here too."];
    if (cmd === 'lie') return ["lies are just alternative truths in different realities."];
    if (cmd === 'reality') return ["reality.dll not found. using simulation.exe instead."];

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