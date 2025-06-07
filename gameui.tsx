import React from 'react';
import gameLinks from '../data/gameLinks';

const categories: Record<string, string[]> = {
  Action: ['basketbros', '1v1lol', 'retrobowl', 'amongus', 'zombsroyale'],
  Puzzle: ['play2048', 'thereisnogame', 'cookieclicker'],
  Arcade: ['slope', 'run3', 'motoX3M', 'happywheels', 'jetpackjoyride'],
  Retro: ['sm64', 'sonic', 'tetris', 'supermario', 'kirby', 'doom'],
  Shooters: ['krunker', 'shellshockers', 'subwayclash3d'],
  Hacking: ['matrix', 'hack', 'sudo', 'coffee']
};

const GameUI: React.FC = () => {
  const openGame = (key: string) => {
    const url = gameLinks[key];
    if (!url) return;
    const win = window.open("about:blank", "_blank");
    win?.document.write(\`<iframe src="\${url}" style="position:absolute;width:100%;height:100%;border:none;"></iframe>\`);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center text-hacker-green">🎮 Game Launcher UI</h1>
      {Object.entries(categories).map(([category, keys]) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold mb-4 text-hacker-cyan">{category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {keys.map((key) => (
              <button
                key={key}
                onClick={() => openGame(key)}
                className="bg-hacker-gray-dark hover:bg-hacker-cyan text-white py-2 px-3 rounded transition text-sm"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameUI;
