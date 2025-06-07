import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = "", 
  glitchInterval = 5000,
  glitchDuration = 200
}) => {
  const [glitching, setGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  
  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
  
  const getRandomChar = () => {
    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
  };
  
  const applyGlitch = () => {
    setGlitching(true);
    
    let iterations = 0;
    const maxIterations = 3;
    const interval = setInterval(() => {
      const newText = text.split('')
        .map((char, idx) => {
          if (Math.random() < 0.2) {
            return getRandomChar();
          }
          return char;
        })
        .join('');
      
      setDisplayText(newText);
      
      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        
        setTimeout(() => {
          setGlitching(false);
        }, 50);
      }
    }, glitchDuration / maxIterations);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      applyGlitch();
    }, glitchInterval);
    
    return () => clearInterval(timer);
  }, [text, glitchInterval]);
  
  return (
    <span 
      className={`${className} ${glitching ? 'text-hacker-cyan' : ''} transition-colors`}
      onMouseEnter={applyGlitch}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;