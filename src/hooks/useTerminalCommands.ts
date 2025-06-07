import { useState } from 'react';
import gameLinks from '../data/gameLinks';

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

    // BASIC
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
        "  proxy - toggle proxy server",
        "  vm - toggle virtual machine",
        "  open [game] - launch a supported game",
        "  open gameui - visual game browser",
        "  secret - ???"
      ];
    }

    if (cmd === 'clear') return ["type 'help' for available commands"];

    if (cmd === 'about') {
      return [
        "undefined is a collective of hackers, artists, and digital explorers.",
        "we operate in the margins of cyberspace, between the binary.",
        "we create, we break, we rebuild.",
        "",
        "established: 2025",
        "status: active"
      ];
    }

    if (cmd === 'skills') {
      return [
        "technical skills:",
        "  - system infiltration",
        "  - data extraction",
        "  - digital forensics",
        "  - cryptography",
        "  - network analysis",
        "  - vulnerability research",
        "  - signal processing"
      ];
    }

    if (cmd === 'projects') {
      return [
        "active projects:",
        "  - ghost protocol: stealth networking",
        "  - zero-day initiative: vulnerability research",
        "  - byte_alchemy: data transformation",
        "  - shadow_net: secure communications",
        "",
        "all projects are strictly for educational purposes."
      ];
    }

    if (cmd === 'contact') {
      return [
        "contact channels:",
        "  - encrypted email: contact@undefined.io",
        "  - secure drop: [access restricted]",
        "  - onion site: und3f1n3d.onion",
        "",
        "communication is encrypted by default."
      ];
    }

    if (cmd.startsWith('echo ')) {
      const text = command.substring(5);
      return [text];
    }

    if (cmd === 'date') {
      return [new Date().toString()];
    }

    if (cmd === 'matrix') {
      return [
        "entering the matrix...",
        "",
        "wake up, neo...",
        "the matrix has you...",
        "follow the white rabbit.",
        "",
        "(matrix mode activated in background)"
      ];
    }

    // PROXY & VM
    if (cmd === 'proxy') {
      setProxyActive(!proxyActive);
      openInBlankTab("https://holyubofficial.net");
      return proxyActive
        ? ["proxy server deactivated. current status: INACTIVE"]
        : [
            "initializing proxy server...",
            "routing traffic through distributed nodes...",
            "encrypting connection...",
            "proxy server active. your traffic is now masked.",
            "",
            "current status: ACTIVE",
            "latency: 42ms",
            "encryption: AES-256",
            "exit nodes: 3"
          ];
    }

    if (cmd === 'vm') {
      setVmActive(!vmActive);
      openInBlankTab("https://copy.sh/v86/?profile=windows");
      return vmActive
        ? [
            "shutting down virtual machine...",
            "saving state...",
            "unmounting volumes...",
            "clearing memory...",
            "",
            "vm status: STOPPED"
          ]
        : [
            "initializing virtual machine...",
            "allocating resources...",
            "mounting encrypted volume...",
            "starting secure environment...",
            "",
            "vm status: RUNNING",
            "memory: 4096MB",
            "cpu cores: 2",
            "os: kali_linux_2025.1",
            "",
            "vm ready for operations."
          ];
    }

    // OPEN GAME
    if (parts[0] === 'open' && parts[1]) {
      const gameKey = parts.slice(1).join("").toLowerCase();
      if (gameKey === "gameui") {
        openInBlankTab("/gameui"); // assumes hosted route
        return ["[gameui] visual game browser opened"];
      }

      if (gameLinks[gameKey]) {
        openInBlankTab(gameLinks[gameKey]);
        return [`[game] ${gameKey} launched in new tab`];
      } else {
        return ["[error] game not found"];
      }
    }

    // EASTER EGGS
    if (cmd === 'secret' || cmd === 'secrets') {
      if (secretsFound < easterEggs.length) {
        const message = easterEggs[secretsFound];
        setSecretsFound(prev => prev + 1);
        return [message];
      } else {
        return ["all secrets have been found. impressive."];
      }
    }

    if (cmd === 'hack') {
      return [
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
    }

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
