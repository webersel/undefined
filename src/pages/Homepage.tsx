import React, { useState } from 'react';
import Terminal from '../components/Terminal';
import GlitchText from '../components/GlitchText';
import { Server, Shield, Code, Database } from 'lucide-react';

const Homepage: React.FC = () => {
  const [showMatrix, setShowMatrix] = useState(false);

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl mb-4 text-hacker-cyan relative inline-block">
              <GlitchText text="sys.init()" />
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-hacker-cyan-dark"></span>
            </h2>
            
            <p className="mb-4 text-hacker-green-dark">
              welcome to <span className="text-hacker-green">undefined</span>, 
              a collective operating in the margins of cyberspace. 
              we explore digital frontiers and push the boundaries of what's possible.
            </p>
            
            <p className="mb-6 text-hacker-green-dark">
              this terminal gives you access to our public interface.
              enter <span className="text-hacker-cyan-dark">'help'</span> to see available commands.
            </p>
            
            <Terminal initialMessage="undefined system v2.0.3 [type 'help' for commands]" />
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl mb-6 text-hacker-cyan relative inline-block">
          <GlitchText text="access.level()" />
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-hacker-cyan-dark"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-hacker-gray border border-hacker-gray-light rounded-md p-5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,255,0,0.025)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
            
            <Server size={24} className="text-hacker-green-dark mb-4" />
            <h3 className="text-lg text-hacker-cyan-dark mb-2">infrastructure</h3>
            <p className="text-sm text-hacker-green-dark">
              distributed systems. secure servers. custom network architecture. 
              operating beyond conventional boundaries.
            </p>
          </div>
          
          <div className="bg-hacker-gray border border-hacker-gray-light rounded-md p-5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,255,0,0.025)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
            
            <Database size={24} className="text-hacker-green-dark mb-4" />
            <h3 className="text-lg text-hacker-cyan-dark mb-2">data systems</h3>
            <p className="text-sm text-hacker-green-dark">
              custom data structures. encrypted storage. distributed ledgers.
              maintaining integrity in hostile environments.
            </p>
          </div>
          
          <div className="bg-hacker-gray border border-hacker-gray-light rounded-md p-5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,255,0,0.025)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
            
            <Code size={24} className="text-hacker-green-dark mb-4" />
            <h3 className="text-lg text-hacker-cyan-dark mb-2">code artistry</h3>
            <p className="text-sm text-hacker-green-dark">
              elegant solutions. efficiency optimization. security by design.
              the art of creating digital beauty through code.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <div className="text-center py-8">
          <p className="text-hacker-green-dark mb-2">
            interested in collaboration? seeking consultation?
          </p>
          <p className="text-hacker-cyan-dark mb-4">
            initiate contact through secure channels
          </p>
          <button 
            className="px-6 py-2 bg-hacker-dark border border-hacker-gray-light text-hacker-green hover:bg-hacker-gray hover:border-hacker-green-dark transition-all duration-300 rounded"
            onClick={() => setShowMatrix(!showMatrix)}
          >
            <GlitchText 
              text={showMatrix ? "exit_matrix()" : "enter_matrix()"} 
              glitchInterval={2000}
            />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Homepage;