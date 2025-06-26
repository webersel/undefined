import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import MatrixEffect from './components/MatrixEffect';

function App() {
  const [matrixActive, setMatrixActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a hacker-like experience
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Immediately open the site in about:blank after loading
      setTimeout(() => {
        const win = window.open("", "_blank");
        if (win) {
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
                ${document.querySelector('style')?.innerHTML || ''}
                body { margin: 0; padding: 0; overflow-x: hidden; }
                iframe { width: 100vw; height: 100vh; border: none; }
              </style>
            </head>
            <body>
              <iframe src="${window.location.href}" allow="fullscreen; microphone; camera; midi; encrypted-media; autoplay; clipboard-read; clipboard-write; web-share"></iframe>
            </body>
            </html>
          `);
          win.document.close();
          
          // Close the original tab after opening in about:blank
          setTimeout(() => {
            window.close();
          }, 1000);
        }
      }, 500);
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