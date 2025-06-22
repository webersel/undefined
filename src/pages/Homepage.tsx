import React from 'react';
import Terminal from '../components/Terminal';
import GlitchText from '../components/GlitchText';

const Homepage: React.FC = () => {
  const openIRC = () => {
    const win = window.open("about:blank", "_blank");
    if (win) {
      win.document.open();
      win.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>undefined IRC - Secure Communications</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              background: #0a0a0a;
              color: #00ff00;
              font-family: 'Courier New', monospace;
              height: 100vh;
              display: flex;
              flex-direction: column;
              overflow: hidden;
            }
            
            .header {
              background: #111111;
              border-bottom: 1px solid #2a2a2a;
              padding: 15px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .title {
              color: #00ffff;
              font-size: 18px;
              font-weight: bold;
            }
            
            .status {
              color: #00cc00;
              font-size: 12px;
            }
            
            .chat-container {
              flex: 1;
              display: flex;
              flex-direction: column;
              padding: 20px;
              overflow: hidden;
            }
            
            .messages {
              flex: 1;
              overflow-y: auto;
              border: 1px solid #2a2a2a;
              background: #111111;
              padding: 15px;
              margin-bottom: 15px;
              border-radius: 4px;
              scrollbar-width: thin;
              scrollbar-color: #2a2a2a #111111;
              min-height: 400px;
            }
            
            .messages::-webkit-scrollbar {
              width: 8px;
            }
            
            .messages::-webkit-scrollbar-track {
              background: #111111;
            }
            
            .messages::-webkit-scrollbar-thumb {
              background: #2a2a2a;
              border-radius: 4px;
            }
            
            .message {
              margin-bottom: 8px;
              word-wrap: break-word;
              line-height: 1.4;
            }
            
            .system-message {
              color: #00cccc;
              font-style: italic;
            }
            
            .user-message {
              color: #00ff00;
            }
            
            .timestamp {
              color: #666;
              font-size: 11px;
              margin-right: 8px;
            }
            
            .username {
              color: #00ffff;
              font-weight: bold;
              margin-right: 8px;
            }
            
            .input-container {
              display: flex;
              gap: 10px;
              align-items: center;
            }
            
            .message-input {
              flex: 1;
              background: #1a1a1a;
              border: 1px solid #2a2a2a;
              color: #00ff00;
              padding: 12px;
              border-radius: 4px;
              font-family: 'Courier New', monospace;
              font-size: 14px;
            }
            
            .message-input:focus {
              outline: none;
              border-color: #00ffff;
              box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
            }
            
            .send-button {
              background: #1a1a1a;
              border: 1px solid #2a2a2a;
              color: #00ffff;
              padding: 12px 20px;
              border-radius: 4px;
              cursor: pointer;
              font-family: 'Courier New', monospace;
              transition: all 0.3s;
              font-size: 14px;
            }
            
            .send-button:hover {
              background: #2a2a2a;
              border-color: #00ffff;
              box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
            }
            
            .users-count {
              color: #00cc00;
              font-size: 12px;
              margin-left: 20px;
            }
            
            .connection-status {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #00ff00;
              margin-right: 8px;
              animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
              0% { opacity: 1; }
              50% { opacity: 0.5; }
              100% { opacity: 1; }
            }
            
            .welcome-message {
              color: #00ffff;
              text-align: center;
              padding: 20px;
              border-bottom: 1px solid #2a2a2a;
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div style="display: flex; align-items: center;">
              <div class="connection-status"></div>
              <div class="title">undefined IRC</div>
            </div>
            <div style="display: flex; align-items: center;">
              <div class="status">SECURE CONNECTION</div>
              <div class="users-count" id="userCount">users online: 1</div>
            </div>
          </div>
          
          <div class="chat-container">
            <div class="messages" id="messages">
              <div class="welcome-message">
                ═══════════════════════════════════════<br>
                WELCOME TO UNDEFINED IRC NETWORK<br>
                ═══════════════════════════════════════<br><br>
                🔐 Secure anonymous communication channel<br>
                🌐 Global network of undefined collective<br>
                👥 Connect with fellow digital explorers<br><br>
                Type your message below to join the conversation...
              </div>
              <div class="message system-message">
                <span class="timestamp">${new Date().toLocaleTimeString()}</span>
                *** You have joined #undefined
              </div>
              <div class="message system-message">
                <span class="timestamp">${new Date().toLocaleTimeString()}</span>
                *** Welcome to the undefined collective IRC network
              </div>
            </div>
            
            <div class="input-container">
              <input 
                type="text" 
                class="message-input" 
                id="messageInput" 
                placeholder="Type your message here..."
                maxlength="500"
              >
              <button class="send-button" onclick="sendMessage()">SEND</button>
            </div>
          </div>
          
          <script>
            let messageCount = 0;
            let userCount = Math.floor(Math.random() * 50) + 1;
            
            // Update user count
            document.getElementById('userCount').textContent = 'users online: ' + userCount;
            
            // Generate random username
            const adjectives = ['Digital', 'Cyber', 'Quantum', 'Neural', 'Binary', 'Phantom', 'Ghost', 'Shadow', 'Neon', 'Matrix'];
            const nouns = ['Hacker', 'Coder', 'Runner', 'Walker', 'Rider', 'Seeker', 'Wanderer', 'Explorer', 'Architect', 'Guardian'];
            const username = adjectives[Math.floor(Math.random() * adjectives.length)] + 
                            nouns[Math.floor(Math.random() * nouns.length)] + 
                            Math.floor(Math.random() * 999);
            
            function addMessage(message, isSystem = false, user = username) {
              const messagesDiv = document.getElementById('messages');
              const messageDiv = document.createElement('div');
              messageDiv.className = 'message ' + (isSystem ? 'system-message' : 'user-message');
              
              const timestamp = new Date().toLocaleTimeString();
              
              if (isSystem) {
                messageDiv.innerHTML = '<span class="timestamp">' + timestamp + '</span>' + message;
              } else {
                messageDiv.innerHTML = '<span class="timestamp">' + timestamp + '</span><span class="username">&lt;' + user + '&gt;</span>' + message;
              }
              
              messagesDiv.appendChild(messageDiv);
              messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }
            
            function sendMessage() {
              const input = document.getElementById('messageInput');
              const message = input.value.trim();
              
              if (message) {
                addMessage(message, false, username);
                input.value = '';
                messageCount++;
                
                // Simulate other users occasionally
                if (Math.random() < 0.3) {
                  setTimeout(() => {
                    const responses = [
                      'interesting perspective...',
                      'agreed, the system is evolving',
                      'have you tried the quantum protocols?',
                      'the matrix runs deeper than most realize',
                      'undefined is the only constant',
                      'welcome to the collective',
                      'the digital realm awaits',
                      'reality.exe has stopped working',
                      'we are all connected in the network',
                      'the code speaks truth'
                    ];
                    const randomUser = adjectives[Math.floor(Math.random() * adjectives.length)] + 
                                     nouns[Math.floor(Math.random() * nouns.length)] + 
                                     Math.floor(Math.random() * 999);
                    addMessage(responses[Math.floor(Math.random() * responses.length)], false, randomUser);
                  }, Math.random() * 5000 + 1000);
                }
                
                // Occasionally update user count
                if (Math.random() < 0.1) {
                  userCount += Math.floor(Math.random() * 3) - 1;
                  if (userCount < 1) userCount = 1;
                  document.getElementById('userCount').textContent = 'users online: ' + userCount;
                }
              }
            }
            
            // Enter key to send message
            document.getElementById('messageInput').addEventListener('keypress', function(e) {
              if (e.key === 'Enter') {
                sendMessage();
              }
            });
            
            // Focus input on load
            document.getElementById('messageInput').focus();
            
            // Simulate some initial activity
            setTimeout(() => {
              addMessage('*** QuantumSeeker42 has joined #undefined', true);
            }, 2000);
            
            setTimeout(() => {
              addMessage('the network is alive tonight...', false, 'QuantumSeeker42');
            }, 4000);
            
            setTimeout(() => {
              addMessage('*** CyberGhost777 has joined #undefined', true);
            }, 6000);
          </script>
        </body>
        </html>
      `);
      win.document.close();
    }
  };

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
        
        <div className="text-center py-8">
          <p className="text-hacker-green-dark mb-2">
            ready to connect with the collective?
          </p>
          <p className="text-hacker-cyan-dark mb-6">
            enter the secure communication network
          </p>
          <button 
            className="px-8 py-3 bg-hacker-dark border border-hacker-gray-light text-hacker-green hover:bg-hacker-gray hover:border-hacker-green-dark transition-all duration-300 rounded-md hover:shadow-lg hover:shadow-hacker-green/20"
            onClick={openIRC}
          >
            <GlitchText 
              text="enter_matrix()" 
              glitchInterval={3000}
            />
          </button>
        </div>
      </section>
      
      <section>
        <div className="text-center py-8">
          <p className="text-hacker-green-dark mb-2">
            interested in collaboration? seeking consultation?
          </p>
          <p className="text-hacker-cyan-dark">
            initiate contact through secure channels
          </p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;