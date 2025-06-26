import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import MatrixEffect from './components/MatrixEffect';

function App() {
  const [matrixActive, setMatrixActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we're already in an about:blank tab to prevent infinite loop
    const isInAboutBlank = window.location.href === 'about:blank' || 
                          window.opener !== null || 
                          document.referrer === '' ||
                          window.name === 'undefined-portal';

    // Simulate loading for a hacker-like experience
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Only open in about:blank if we're NOT already in one
      if (!isInAboutBlank && window.location.protocol !== 'file:') {
        setTimeout(() => {
          const win = window.open("", "_blank");
          if (win) {
            win.name = 'undefined-portal';
            win.document.open();
            win.document.write(`
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>undefined collective</title>
                <meta name="undefined-portal" content="true">
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&display=swap" rel="stylesheet">
                <style>
                  body { 
                    margin: 0; 
                    padding: 0; 
                    overflow: hidden; 
                    background: #0a0a0a;
                    font-family: 'JetBrains Mono', monospace;
                  }
                  iframe { 
                    width: 100vw; 
                    height: 100vh; 
                    border: none; 
                  }
                  .loading {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #00ff00;
                    font-family: 'JetBrains Mono', monospace;
                    text-align: center;
                    z-index: 1000;
                    background: rgba(0,0,0,0.9);
                    padding: 20px;
                    border: 1px solid #00ff00;
                    border-radius: 5px;
                    animation: blink 1s infinite;
                  }
                  @keyframes blink { 
                    0%, 50% { opacity: 1; } 
                    51%, 100% { opacity: 0; } 
                  }
                </style>
              </head>
              <body>
                <div class="loading" id="loading">INITIALIZING UNDEFINED PORTAL...</div>
                <iframe src="${window.location.href}" allow="fullscreen; microphone; camera; midi; encrypted-media; autoplay; clipboard-read; clipboard-write; web-share" onload="setTimeout(() => document.getElementById('loading').style.display='none', 1000)"></iframe>
              </body>
              </html>
            `);
            win.document.close();
            
            // Close the original tab after a delay
            setTimeout(() => {
              window.close();
            }, 2000);
          }
        }, 1000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle keypresses for Easter eggs
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Matrix mode toggle with 'm' key
      if (e.key === 'm' && e.ctrlKey) {
        setMatrixActive(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-hacker-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-hacker-green font-mono mb-4">
            <span className="inline-block animate-pulse">loading</span>
            <span className="inline-block animate-blink">_</span>
          </h1>
          <div className="w-64 h-1 bg-hacker-gray-light rounded-full overflow-hidden">
            <div className="h-full bg-hacker-green animate-pulse-slow w-full"></div>
          </div>
          <p className="mt-4 text-hacker-green-dark text-sm font-mono">
            initializing system...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hacker-black flex flex-col">
      {/* Matrix background effect */}
      <MatrixEffect active={matrixActive} opacity={0.05} />
      
      {/* Scanline effect overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.02)_50%)] bg-[length:100%_4px] opacity-30"></div>
      
      {/* CRT vignette effect */}
      <div className="fixed inset-0 pointer-events-none z-20 bg-radial-gradient bg-black opacity-20 mix-blend-multiply"></div>
      
      <Header />
      
      <div className="flex-grow">
        <Homepage />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;