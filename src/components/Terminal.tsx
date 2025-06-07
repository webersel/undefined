import React, { useState, useEffect, useRef } from 'react';
import { useTerminalCommands } from '../hooks/useTerminalCommands';
import gameLinks from '../data/gameLinks';

interface TerminalProps {
  initialMessage?: string;
}

const ALL_COMMANDS = [
  "help", "clear", "about", "skills", "projects", "contact",
  "echo", "date", "matrix", "proxy", "vm", "secret", "hack",
  "sudo", "exit", "quit", "42", "meaning of life", "coffee", "open", "open gameui",
  ...Object.keys(gameLinks).map((key) => `open ${key}`)
];

const Terminal: React.FC<TerminalProps> = ({ initialMessage = "type 'help' for available commands" }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([initialMessage]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const { processCommand } = useTerminalCommands();

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
    document.addEventListener('click', focusInput);
    return () => {
      document.removeEventListener('click', focusInput);
    };
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [...history, `> ${input}`];
    const result = processCommand(input);
    setHistory([...newHistory, ...result]);
    setCommandHistory([input, ...commandHistory]);
    setInput('');
    setHistoryIndex(-1);
    setSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(newIndex);
      if (newIndex >= 0 && commandHistory[newIndex]) {
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      if (newIndex >= 0) {
        setInput(commandHistory[newIndex]);
      } else {
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[0]);
      }
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    const filtered = ALL_COMMANDS.filter((cmd) => cmd.startsWith(value.toLowerCase())).slice(0, 6);
    setSuggestions(filtered);
  };

  return (
    <div 
      className="relative bg-hacker-dark border border-hacker-gray-light rounded-md p-4 h-[60vh] md:h-[50vh] overflow-hidden"
      onClick={focusInput}
    >
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-10">
        <div className="absolute inset-x-0 h-[2px] bg-hacker-green animate-scanline"></div>
      </div>
      
      {/* Terminal output */}
      <div 
        ref={terminalRef}
        className="h-full overflow-y-auto pb-8 scrollbar-thin scrollbar-thumb-hacker-gray-light"
      >
        {history.map((line, i) => (
          <div key={i} className={`mb-1 ${line.startsWith('>') ? 'text-hacker-cyan' : ''}`}>
            {line}
          </div>
        ))}
        
        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2 relative">
          <span className="text-hacker-cyan-dark mr-2">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-hacker-green caret-hacker-green"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="w-2 h-4 bg-hacker-green animate-blink"></span>

          {/* Autocomplete suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-6 mt-1 bg-hacker-dark border border-hacker-gray-light rounded shadow z-20 max-h-32 overflow-y-auto text-sm">
              {suggestions.map((sug, idx) => (
                <li
                  key={idx}
                  className="px-2 py-1 hover:bg-hacker-gray-dark text-hacker-green cursor-pointer"
                  onClick={() => {
                    setInput(sug);
                    setSuggestions([]);
                    focusInput();
                  }}
                >
                  {sug}
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>
    </div>
  );
};

export default Terminal;
