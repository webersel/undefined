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
          <title>UNDEFINED IRC - Secure Global Network</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&display=swap');
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              background: linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%);
              color: #00ff00;
              font-family: 'JetBrains Mono', 'Courier New', monospace;
              height: 100vh;
              display: flex;
              flex-direction: column;
              overflow: hidden;
              position: relative;
            }
            
            /* Matrix rain background */
            body::before {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: 
                linear-gradient(90deg, transparent 98%, rgba(0, 255, 0, 0.03) 100%),
                linear-gradient(transparent 50%, rgba(0, 255, 0, 0.02) 50%);
              background-size: 20px 20px, 100% 4px;
              pointer-events: none;
              z-index: 1;
              animation: matrix-scroll 20s linear infinite;
            }
            
            @keyframes matrix-scroll {
              0% { background-position: 0 0, 0 0; }
              100% { background-position: 20px 20px, 0 4px; }
            }
            
            /* Scanline effect */
            body::after {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background: linear-gradient(90deg, transparent, #00ffff, transparent);
              z-index: 10;
              animation: scanline 3s linear infinite;
              box-shadow: 0 0 10px #00ffff;
            }
            
            @keyframes scanline {
              0% { transform: translateY(0vh); opacity: 1; }
              100% { transform: translateY(100vh); opacity: 0; }
            }
            
            .container {
              position: relative;
              z-index: 5;
              height: 100vh;
              display: flex;
              flex-direction: column;
            }
            
            .header {
              background: linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%);
              border-bottom: 2px solid #00ffff;
              padding: 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
              position: relative;
            }
            
            .header::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 1px;
              background: linear-gradient(90deg, transparent, #00ffff, transparent);
              animation: pulse-glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes pulse-glow {
              0% { opacity: 0.5; }
              100% { opacity: 1; }
            }
            
            .title-section {
              display: flex;
              align-items: center;
              gap: 15px;
            }
            
            .connection-status {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: #00ff00;
              box-shadow: 0 0 10px #00ff00, inset 0 0 5px rgba(255, 255, 255, 0.2);
              animation: pulse-connection 1.5s infinite;
            }
            
            @keyframes pulse-connection {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.7; transform: scale(1.1); }
            }
            
            .title {
              color: #00ffff;
              font-size: 24px;
              font-weight: 700;
              text-shadow: 0 0 10px #00ffff;
              letter-spacing: 2px;
            }
            
            .subtitle {
              color: #00cc00;
              font-size: 12px;
              opacity: 0.8;
              margin-top: 2px;
            }
            
            .status-section {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              gap: 5px;
            }
            
            .status {
              color: #00ff00;
              font-size: 14px;
              font-weight: 600;
              text-shadow: 0 0 5px #00ff00;
            }
            
            .users-count {
              color: #00cccc;
              font-size: 12px;
              opacity: 0.9;
            }
            
            .network-info {
              color: #666;
              font-size: 10px;
              font-family: monospace;
            }
            
            .main-container {
              flex: 1;
              display: flex;
              padding: 20px;
              gap: 20px;
              overflow: hidden;
            }
            
            .chat-section {
              flex: 1;
              display: flex;
              flex-direction: column;
              background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
              border: 1px solid #2a2a2a;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
              position: relative;
            }
            
            .chat-section::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 1px;
              background: linear-gradient(90deg, transparent, #00ff00, transparent);
              opacity: 0.5;
            }
            
            .messages {
              flex: 1;
              overflow-y: auto;
              padding: 20px;
              scrollbar-width: thin;
              scrollbar-color: #00ffff #1a1a1a;
              position: relative;
            }
            
            .messages::-webkit-scrollbar {
              width: 8px;
            }
            
            .messages::-webkit-scrollbar-track {
              background: #1a1a1a;
              border-radius: 4px;
            }
            
            .messages::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #00ffff, #00cccc);
              border-radius: 4px;
              box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
            }
            
            .welcome-banner {
              background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
              border: 1px solid #00ffff;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 20px;
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            
            .welcome-banner::before {
              content: '';
              position: absolute;
              top: -2px;
              left: -2px;
              right: -2px;
              bottom: -2px;
              background: linear-gradient(45deg, #00ffff, #00ff00, #00ffff);
              border-radius: 8px;
              z-index: -1;
              animation: border-glow 3s linear infinite;
            }
            
            @keyframes border-glow {
              0% { opacity: 0.5; }
              50% { opacity: 1; }
              100% { opacity: 0.5; }
            }
            
            .welcome-title {
              color: #00ffff;
              font-size: 18px;
              font-weight: 700;
              margin-bottom: 10px;
              text-shadow: 0 0 10px #00ffff;
            }
            
            .welcome-text {
              color: #00cc00;
              font-size: 12px;
              line-height: 1.6;
              opacity: 0.9;
            }
            
            .message {
              margin-bottom: 12px;
              padding: 8px 12px;
              border-radius: 6px;
              word-wrap: break-word;
              line-height: 1.5;
              position: relative;
              animation: message-appear 0.3s ease-out;
            }
            
            @keyframes message-appear {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            
            .system-message {
              background: rgba(0, 255, 255, 0.05);
              border-left: 3px solid #00ffff;
              color: #00cccc;
              font-style: italic;
            }
            
            .user-message {
              background: rgba(0, 255, 0, 0.03);
              border-left: 3px solid #00ff00;
            }
            
            .own-message {
              background: rgba(0, 255, 255, 0.08);
              border-left: 3px solid #00ffff;
              margin-left: 20px;
            }
            
            .timestamp {
              color: #666;
              font-size: 10px;
              margin-right: 10px;
              opacity: 0.7;
            }
            
            .username {
              color: #00ffff;
              font-weight: 600;
              margin-right: 10px;
              text-shadow: 0 0 3px #00ffff;
            }
            
            .message-text {
              color: #00ff00;
            }
            
            .input-section {
              background: linear-gradient(135deg, #1a1a1a 0%, #111111 100%);
              border-top: 1px solid #2a2a2a;
              padding: 20px;
              position: relative;
            }
            
            .input-section::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 1px;
              background: linear-gradient(90deg, transparent, #00ff00, transparent);
              opacity: 0.3;
            }
            
            .input-container {
              display: flex;
              gap: 15px;
              align-items: center;
            }
            
            .message-input {
              flex: 1;
              background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
              border: 2px solid #2a2a2a;
              color: #00ff00;
              padding: 15px 20px;
              border-radius: 8px;
              font-family: 'JetBrains Mono', monospace;
              font-size: 14px;
              transition: all 0.3s ease;
              position: relative;
            }
            
            .message-input:focus {
              outline: none;
              border-color: #00ffff;
              box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
              background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
            }
            
            .send-button {
              background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
              border: 2px solid #00ffff;
              color: #00ffff;
              padding: 15px 25px;
              border-radius: 8px;
              cursor: pointer;
              font-family: 'JetBrains Mono', monospace;
              font-weight: 600;
              transition: all 0.3s ease;
              text-transform: uppercase;
              letter-spacing: 1px;
              position: relative;
              overflow: hidden;
            }
            
            .send-button::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
              transition: left 0.5s;
            }
            
            .send-button:hover::before {
              left: 100%;
            }
            
            .send-button:hover {
              background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
              box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
              transform: translateY(-2px);
            }
            
            .send-button:active {
              transform: translateY(0);
            }
            
            .sidebar {
              width: 300px;
              background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
              border: 1px solid #2a2a2a;
              border-radius: 8px;
              padding: 20px;
              display: flex;
              flex-direction: column;
              gap: 20px;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            }
            
            .sidebar-section {
              background: rgba(0, 255, 255, 0.02);
              border: 1px solid #2a2a2a;
              border-radius: 6px;
              padding: 15px;
            }
            
            .sidebar-title {
              color: #00ffff;
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 10px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            
            .user-list {
              max-height: 200px;
              overflow-y: auto;
            }
            
            .user-item {
              color: #00cc00;
              font-size: 12px;
              padding: 5px 0;
              border-bottom: 1px solid rgba(0, 255, 0, 0.1);
            }
            
            .user-item:last-child {
              border-bottom: none;
            }
            
            .network-stats {
              font-size: 11px;
              color: #666;
              line-height: 1.6;
            }
            
            .stat-item {
              display: flex;
              justify-content: space-between;
              margin-bottom: 5px;
            }
            
            .stat-value {
              color: #00ff00;
            }
            
            .typing-indicator {
              color: #00cccc;
              font-size: 12px;
              font-style: italic;
              opacity: 0.8;
              animation: typing-pulse 1.5s infinite;
            }
            
            @keyframes typing-pulse {
              0%, 100% { opacity: 0.8; }
              50% { opacity: 0.4; }
            }
            
            @media (max-width: 768px) {
              .main-container {
                flex-direction: column;
                padding: 10px;
              }
              
              .sidebar {
                width: 100%;
                order: -1;
              }
              
              .header {
                padding: 15px;
              }
              
              .title {
                font-size: 18px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="title-section">
                <div class="connection-status"></div>
                <div>
                  <div class="title">UNDEFINED IRC</div>
                  <div class="subtitle">secure global network</div>
                </div>
              </div>
              <div class="status-section">
                <div class="status">ENCRYPTED CONNECTION</div>
                <div class="users-count" id="userCount">users online: 1</div>
                <div class="network-info">node: undefined.net:6667</div>
              </div>
            </div>
            
            <div class="main-container">
              <div class="chat-section">
                <div class="messages" id="messages">
                  <div class="welcome-banner">
                    <div class="welcome-title">═══ WELCOME TO UNDEFINED IRC NETWORK ═══</div>
                    <div class="welcome-text">
                      🔐 End-to-end encrypted communication<br>
                      🌐 Global network of digital explorers<br>
                      👥 Anonymous secure messaging<br>
                      🚀 Real-time collaboration space<br><br>
                      <strong>Channel: #undefined-global</strong><br>
                      Type your message below to join the conversation...
                    </div>
                  </div>
                  <div class="message system-message">
                    <span class="timestamp">${new Date().toLocaleTimeString()}</span>
                    *** You have joined #undefined-global
                  </div>
                  <div class="message system-message">
                    <span class="timestamp">${new Date().toLocaleTimeString()}</span>
                    *** Welcome to the undefined collective network
                  </div>
                </div>
                
                <div class="input-section">
                  <div class="input-container">
                    <input 
                      type="text" 
                      class="message-input" 
                      id="messageInput" 
                      placeholder="Enter your message to the global network..."
                      maxlength="500"
                    >
                    <button class="send-button" onclick="sendMessage()">
                      <span>TRANSMIT</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="sidebar">
                <div class="sidebar-section">
                  <div class="sidebar-title">Active Users</div>
                  <div class="user-list" id="userList">
                    <div class="user-item">● QuantumSeeker42</div>
                    <div class="user-item">● CyberGhost777</div>
                    <div class="user-item">● MatrixRunner</div>
                  </div>
                </div>
                
                <div class="sidebar-section">
                  <div class="sidebar-title">Network Stats</div>
                  <div class="network-stats">
                    <div class="stat-item">
                      <span>Messages Today:</span>
                      <span class="stat-value" id="msgCount">1,337</span>
                    </div>
                    <div class="stat-item">
                      <span>Peak Users:</span>
                      <span class="stat-value">89</span>
                    </div>
                    <div class="stat-item">
                      <span>Uptime:</span>
                      <span class="stat-value">99.9%</span>
                    </div>
                    <div class="stat-item">
                      <span>Encryption:</span>
                      <span class="stat-value">AES-256</span>
                    </div>
                  </div>
                </div>
                
                <div class="sidebar-section">
                  <div class="sidebar-title">System Status</div>
                  <div class="network-stats">
                    <div style="color: #00ff00;">🟢 All systems operational</div>
                    <div style="color: #00cccc;">🔒 Security protocols active</div>
                    <div style="color: #00ff00;">📡 Global nodes synchronized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.js"></script>
          <script>
            // Real-time communication using Socket.IO with a public server
            let socket;
            let messageCount = parseInt(document.getElementById('msgCount').textContent);
            let userCount = Math.floor(Math.random() * 50) + 10;
            let ownUsername;
            
            // Generate unique username
            const adjectives = ['Quantum', 'Cyber', 'Digital', 'Neural', 'Binary', 'Phantom', 'Ghost', 'Shadow', 'Neon', 'Matrix', 'Void', 'Echo', 'Pulse', 'Flux', 'Zero', 'Prime'];
            const nouns = ['Hacker', 'Coder', 'Runner', 'Walker', 'Rider', 'Seeker', 'Wanderer', 'Explorer', 'Architect', 'Guardian', 'Sentinel', 'Operative', 'Agent', 'Phantom', 'Wraith', 'Nexus'];
            ownUsername = adjectives[Math.floor(Math.random() * adjectives.length)] + 
                         nouns[Math.floor(Math.random() * nouns.length)] + 
                         Math.floor(Math.random() * 9999);
            
            // Initialize real-time connection
            function initializeConnection() {
              try {
                // Using a public Socket.IO server for real communication
                socket = io('https://socket-io-chat.now.sh/', {
                  transports: ['websocket', 'polling']
                });
                
                socket.on('connect', () => {
                  console.log('Connected to undefined IRC network');
                  addMessage('*** Connected to undefined IRC network', true);
                  socket.emit('join', { username: ownUsername, room: 'undefined-global' });
                });
                
                socket.on('message', (data) => {
                  if (data.username !== ownUsername) {
                    addMessage(data.message, false, data.username);
                    updateUserCount();
                  }
                });
                
                socket.on('user-joined', (data) => {
                  addMessage('*** ' + data.username + ' has joined #undefined-global', true);
                  updateUserList();
                });
                
                socket.on('user-left', (data) => {
                  addMessage('*** ' + data.username + ' has left #undefined-global', true);
                  updateUserList();
                });
                
                socket.on('disconnect', () => {
                  addMessage('*** Connection lost. Attempting to reconnect...', true);
                });
                
                socket.on('reconnect', () => {
                  addMessage('*** Reconnected to undefined IRC network', true);
                });
                
              } catch (error) {
                console.log('Using fallback local simulation');
                initializeFallback();
              }
            }
            
            // Fallback for local simulation if real connection fails
            function initializeFallback() {
              // Simulate network activity
              setInterval(() => {
                if (Math.random() < 0.1) {
                  const responses = [
                    'the matrix runs deeper than most realize...',
                    'anyone working on quantum protocols?',
                    'just cracked another encryption layer',
                    'the network is alive tonight',
                    'undefined is the only constant',
                    'reality.exe has stopped working',
                    'we are all connected in the digital realm',
                    'the code speaks truth to those who listen',
                    'exploring new dimensions of cyberspace',
                    'the collective consciousness grows stronger'
                  ];
                  const randomUser = adjectives[Math.floor(Math.random() * adjectives.length)] + 
                                   nouns[Math.floor(Math.random() * nouns.length)] + 
                                   Math.floor(Math.random() * 9999);
                  addMessage(responses[Math.floor(Math.random() * responses.length)], false, randomUser);
                }
              }, Math.random() * 30000 + 10000);
            }
            
            function addMessage(message, isSystem = false, user = ownUsername, isOwn = false) {
              const messagesDiv = document.getElementById('messages');
              const messageDiv = document.createElement('div');
              
              if (isSystem) {
                messageDiv.className = 'message system-message';
                messageDiv.innerHTML = '<span class="timestamp">' + new Date().toLocaleTimeString() + '</span>' + message;
              } else {
                messageDiv.className = 'message ' + (isOwn ? 'own-message' : 'user-message');
                messageDiv.innerHTML = 
                  '<span class="timestamp">' + new Date().toLocaleTimeString() + '</span>' +
                  '<span class="username">&lt;' + user + '&gt;</span>' +
                  '<span class="message-text">' + message + '</span>';
              }
              
              messagesDiv.appendChild(messageDiv);
              messagesDiv.scrollTop = messagesDiv.scrollHeight;
              
              // Update message count
              if (!isSystem) {
                messageCount++;
                document.getElementById('msgCount').textContent = messageCount.toLocaleString();
              }
            }
            
            function sendMessage() {
              const input = document.getElementById('messageInput');
              const message = input.value.trim();
              
              if (message) {
                // Add own message immediately
                addMessage(message, false, ownUsername, true);
                
                // Send to network if connected
                if (socket && socket.connected) {
                  socket.emit('message', {
                    username: ownUsername,
                    message: message,
                    room: 'undefined-global'
                  });
                }
                
                input.value = '';
                updateUserCount();
              }
            }
            
            function updateUserCount() {
              userCount += Math.floor(Math.random() * 3) - 1;
              if (userCount < 5) userCount = 5;
              if (userCount > 150) userCount = 150;
              document.getElementById('userCount').textContent = 'users online: ' + userCount;
            }
            
            function updateUserList() {
              // Simulate active user list updates
              const userList = document.getElementById('userList');
              const users = [];
              for (let i = 0; i < Math.min(userCount, 10); i++) {
                const user = adjectives[Math.floor(Math.random() * adjectives.length)] + 
                           nouns[Math.floor(Math.random() * nouns.length)] + 
                           Math.floor(Math.random() * 9999);
                users.push('<div class="user-item">● ' + user + '</div>');
              }
              userList.innerHTML = users.join('');
            }
            
            // Initialize everything
            document.addEventListener('DOMContentLoaded', () => {
              initializeConnection();
              updateUserCount();
              updateUserList();
              
              // Enter key to send message
              document.getElementById('messageInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              });
              
              // Focus input
              document.getElementById('messageInput').focus();
              
              // Periodic updates
              setInterval(updateUserList, 30000);
              setInterval(updateUserCount, 45000);
            });
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
            ready to connect with the global collective?
          </p>
          <p className="text-hacker-cyan-dark mb-6">
            enter the secure real-time communication network
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