import React, { useState } from 'react';
import GlitchText from './GlitchText';

interface HackerCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const HackerCard: React.FC<HackerCardProps> = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative bg-hacker-gray border border-hacker-gray-light rounded-md p-4 overflow-hidden group transition-all duration-300 hover:bg-hacker-gray-light hover:border-hacker-green-dark cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,255,0,0.025)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
      
      {/* Top border glow on hover */}
      <div className={`absolute inset-x-0 top-0 h-[1px] bg-hacker-green ${isHovered ? 'opacity-50' : 'opacity-0'} transition-opacity duration-300`}></div>
      
      <div className="flex items-start">
        {icon && (
          <div className="mr-3 text-hacker-green-dark group-hover:text-hacker-green transition-colors">
            {icon}
          </div>
        )}
        
        <div>
          <h3 className="text-hacker-cyan-dark group-hover:text-hacker-cyan mb-2 transition-colors">
            <GlitchText text={title} glitchInterval={10000} />
          </h3>
          
          <p className="text-sm text-hacker-green-dark group-hover:text-hacker-green transition-colors">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackerCard;