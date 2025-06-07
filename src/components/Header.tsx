import React, { useState, useEffect } from 'react';
import { Terminal, Code, Shield, Server, MonitorUp } from 'lucide-react';
import { useTerminalCommands } from '../hooks/useTerminalCommands';

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { state: { proxyActive, vmActive } } = useTerminalCommands();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <header className="w-full bg-hacker-dark py-4 border-b border-hacker-gray-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal size={20} className="text-hacker-green" />
            <h1 className="text-xl font-mono text-hacker-green tracking-tight relative group">
              <span className="inline-block group-hover:animate-glitch">undefined</span>
              <span className="absolute top-0 left-0 w-full h-full bg-hacker-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </h1>
          </div>
          
          <div className="hidden sm:flex items-center space-x-6">
            <div 
              className={`group cursor-pointer flex items-center gap-2 ${proxyActive ? 'text-hacker-green' : 'text-hacker-green-dark'}`}
            >
              <MonitorUp size={18} className="group-hover:text-hacker-green transition-colors" />
              <span className="text-xs font-mono">proxy</span>
              <span className={`w-2 h-2 rounded-full ${proxyActive ? 'bg-hacker-green animate-pulse' : 'bg-hacker-gray-light'}`}></span>
            </div>
            
            <div 
              className={`group cursor-pointer flex items-center gap-2 ${vmActive ? 'text-hacker-green' : 'text-hacker-green-dark'}`}
            >
              <Server size={18} className="group-hover:text-hacker-green transition-colors" />
              <span className="text-xs font-mono">vm</span>
              <span className={`w-2 h-2 rounded-full ${vmActive ? 'bg-hacker-green animate-pulse' : 'bg-hacker-gray-light'}`}></span>
            </div>
            
            <div className="group cursor-pointer">
              <Shield size={18} className="text-hacker-green-dark group-hover:text-hacker-green transition-colors" />
            </div>
          </div>
          
          <div className="text-hacker-cyan-dark text-sm font-mono">
            <span className="animate-pulse-slow">[</span>
            {formatTime(currentTime)}
            <span className="animate-pulse-slow">]</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;