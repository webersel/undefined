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

  const easterEggs = [
    "you found a secret! there are more to discover...",
    "another secret found! keep exploring...",
    "you're good at this! secret #3 discovered.",
    "impressive hacking skills! secret #4 unlocked.",
    "final secret discovered! you've found them all!"
  ];

  const openInBlankTab = (url: string) => {
    const win = window.open("about:blank", "_blank");
    win?.document.write(`<iframe src="${url}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"></iframe>`);
  };

  const processCommand = (command: string): string[] => {
    const cmd = command.toLowerCase().trim();
    const parts = cmd.split(" ");

    if (cmd === 'help') {
      return [
        "available commands:",
        "  help - display this help message",
        "  clear - clear the terminal",
        "  about - about undefined",
        "  skills - list skills",
        "  projects - list projects",
        "  contact - show contact info",
        "  echo [text] - display text",
        "  date - show current date",
        "  matrix - enter the matrix",
        "  proxy - open proxy tab (use 'proxy nowgg' for now.gg)",
        "  vm - open Windows 11 VM",
        "  vm win10 - open Windows 10 VM",
        "  vm mint - open Linux Mint VM",
        "  open [game] - launch supported game",
        "  open gameui - visual game browser",
        "  secret - ???"
      ];
    }

    if (cmd === 'clear') return ["type 'help' for available commands"];

    if (cmd === 'about') return [
      "undefined is a collective of hackers, artists, and digital explorers.",
      "we operate in the margins of cyberspace, between the binary.",
      "we create, we break, we rebuild.",
      "",
      "established: 2025",
      "status: active"
    ];

    if (cmd === 'skills') return [
      "technical skills:",
      "  - system infiltration",
      "  - data extraction",
      "  - digital forensics",
      "  - cryptography",
      "  - network analysis",
      "  - vulnerability research",
      "  - signal processing"
    ];

    if (cmd === 'projects') return [
      "active projects:",
      "  - ghost protocol: stealth networking",
      "  - zero-day initiative: vulnerability research",
      "  - byte_alchemy: data transformation",
      "  - shadow_net: secure communications",
      "",
      "all projects are strictly for educational purposes."
    ];

    if (cmd === 'contact') return [
      "contact channels:",
      "  - encrypted email: contact@undefined.io",
      "  - secure drop: [access restricted]",
      "  - onion site: und3f1n3d.onion",
      "",
      "communication is encrypted by default."
    ];

    if (cmd.startsWith('echo ')) return [command.substring(5)];
    if (cmd === 'date') return [new Date().toString()];

    if (cmd === 'matrix') return [
      "entering the matrix...",
      "",
      "wake up, neo...",
      "the matrix has you...",
      "follow the white rabbit.",
      "",
      "(matrix mode activated in background)"
    ];

    if (cmd === 'proxy' || cmd === 'proxy normal') {
      setProxyActive(true);
      openInBlankTab("https://holyubofficial.net");
      return ["[proxy] opened proxy site in new tab"];
    }

    if (cmd === 'proxy nowgg') {
      setProxyActive(true);
      openInBlankTab("https://interstellar.cx");
      return ["[proxy] opened now.gg-compatible proxy in new tab"];
    }

    if (cmd === 'vm') {
      setVmActive(true);
      openInBlankTab("https://copy.sh/v86/?profile=windows");
      return ["[vm] windows 11 launched in new tab"];
    }

    if (cmd === 'vm win10') {
      setVmActive(true);
      openInBlankTab("https://www.onworks.net/runos/create-os.php?vmid=win10");
      return ["[vm] windows 10 launched in new tab"];
    }

    if (cmd === 'vm mint') {
      setVmActive(true);
      openInBlankTab("https://www.onworks.net/runos/create-os.php?vmid=linuxmint");
      return ["[vm] linux mint launched in new tab"];
    }

    if (parts[0] === 'open' && parts[1]) {
      const gameKey = parts.slice(1).join("").toLowerCase();
      if (gameKey === 'gameui') {
        openInBlankTab("/gameui");
        return ["[gameui] visual game browser opened"];
      }
      if (gameLinks[gameKey]) {
        openInBlankTab(gameLinks[gameKey]);
        return [`[game] ${gameKey} launched in new tab`];
      } else {
        return ["[error] game not found"];
      }
    }

    if (cmd === 'secret' || cmd === 'secrets') {
      if (secretsFound < easterEggs.length) {
        const message = easterEggs[secretsFound];
        setSecretsFound(prev => prev + 1);
        return [message];
      } else {
        return ["all secrets have been found. impressive."];
      }
    }

    if (cmd === 'hack') return [
      "initiating hack sequence...",
      "target acquired...",
      "bypassing firewall...",
      "accessing mainframe...",
      "downloading data...",
      "covering tracks...",
      "hack complete.",
      "",
      "(note: this is just a simulation, no actual hacking occurred)"
    ];

    if (cmd === 'sudo') return ["nice try, but you don't have root privileges here."];
    if (cmd === 'exit' || cmd === 'quit') return ["there is no exit from this reality."];
    if (cmd === '42' || cmd === 'meaning of life') return ["so you're a hitchhiker's guide fan? respect."];
    if (cmd === 'coffee') return ["brewing virtual coffee... ☕ enjoy!"];

    return [`command not found: ${command}. type 'help' for available commands.`];
  };

  return {
    processCommand,
    state: { proxyActive, vmActive }
  };
};