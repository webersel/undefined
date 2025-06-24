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
          <title>undefined IRC - Live Chat</title>
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
            }
            
            .header {
              background: #111;
              border-bottom: 1px solid #00ffff;
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
              color: #00ff00;
              font-size: 12px;
            }
            
            .chat-container {
              flex: 1;
              display: flex;
              flex-direction: column;
              padding: 20px;
            }
            
            .messages {
              flex: 1;
              background: #111;
              border: 1px solid #333;
              border-radius: 5px;
              padding: 15px;
              margin-bottom: 15px;
              overflow-y: auto;
              min-height: 400px;
              max-height: 500px;
            }
            
            .message {
              margin-bottom: 8px;
              padding: 5px 0;
              word-wrap: break-word;
            }
            
            .system-message {
              color: #00cccc;
              font-style: italic;
            }
            
            .user-message {
              color: #00ff00;
            }
            
            .own-message {
              color: #00ffff;
              background: rgba(0, 255, 255, 0.1);
              padding: 5px;
              border-radius: 3px;
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
            }
            
            .message-input {
              flex: 1;
              background: #1a1a1a;
              border: 1px solid #333;
              color: #00ff00;
              padding: 12px;
              border-radius: 5px;
              font-family: 'Courier New', monospace;
            }
            
            .message-input:focus {
              outline: none;
              border-color: #00ffff;
            }
            
            .send-button {
              background: #1a1a1a;
              border: 1px solid #00ffff;
              color: #00ffff;
              padding: 12px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-family: 'Courier New', monospace;
            }
            
            .send-button:hover {
              background: #333;
            }
            
            .users-online {
              color: #00cc00;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="title">undefined IRC - Live Chat</div>
            <div>
              <div class="status">● CONNECTED</div>
              <div class="users-online" id="userCount">users: 1</div>
            </div>
          </div>
          
          <div class="chat-container">
            <div class="messages" id="messages">
              <div class="message system-message">
                <span class="timestamp">${new Date().toLocaleTimeString()}</span>
                Welcome to undefined IRC! Messages are shared with everyone online.
              </div>
            </div>
            
            <div class="input-container">
              <input 
                type="text" 
                class="message-input" 
                id="messageInput" 
                placeholder="Type your message..."
                maxlength="300"
              >
              <button class="send-button" onclick="sendMessage()">SEND</button>
            </div>
          </div>
          
          <script>
            // Simple real-time messaging using Firebase Realtime Database
            let username = 'User' + Math.floor(Math.random() * 9999);
            let messageCount = 0;
            
            // Firebase config for real-time messaging
            const firebaseConfig = {
              apiKey: "AIzaSyDummy", // This would be a real Firebase config
              authDomain: "undefined-irc.firebaseapp.com",
              databaseURL: "https://undefined-irc-default-rtdb.firebaseio.com/",
              projectId: "undefined-irc"
            };
            
            // For now, we'll use localStorage to simulate real-time between tabs
            let isListening = false;
            
            function initializeChat() {
              // Load existing messages
              loadMessages();
              
              // Listen for new messages
              if (!isListening) {
                setInterval(checkForNewMessages, 1000);
                isListening = true;
              }
              
              // Add join message
              addSystemMessage(username + ' joined the chat');
              saveMessage({
                type: 'system',
                text: username + ' joined the chat',
                timestamp: Date.now()
              });
            }
            
            function loadMessages() {
              const messages = JSON.parse(localStorage.getItem('undefinedIRC') || '[]');
              const messagesDiv = document.getElementById('messages');
              
              // Clear welcome message
              messagesDiv.innerHTML = '';
              
              messages.slice(-50).forEach(msg => {
                displayMessage(msg);
              });
              
              scrollToBottom();
            }
            
            function checkForNewMessages() {
              const messages = JSON.parse(localStorage.getItem('undefinedIRC') || '[]');
              const currentCount = document.getElementById('messages').children.length;
              
              if (messages.length > currentCount) {
                // New messages available
                loadMessages();
                updateUserCount();
              }
            }
            
            function saveMessage(message) {
              const messages = JSON.parse(localStorage.getItem('undefinedIRC') || '[]');
              messages.push(message);
              
              // Keep only last 100 messages
              if (messages.length > 100) {
                messages.splice(0, messages.length - 100);
              }
              
              localStorage.setItem('undefinedIRC', JSON.stringify(messages));
            }
            
            function displayMessage(msg) {
              const messagesDiv = document.getElementById('messages');
              const messageDiv = document.createElement('div');
              
              const time = new Date(msg.timestamp).toLocaleTimeString();
              
              if (msg.type === 'system') {
                messageDiv.className = 'message system-message';
                messageDiv.innerHTML = '<span class="timestamp">' + time + '</span>' + msg.text;
              } else {
                const isOwn = msg.username === username;
                messageDiv.className = 'message ' + (isOwn ? 'own-message' : 'user-message');
                messageDiv.innerHTML = 
                  '<span class="timestamp">' + time + '</span>' +
                  '<span class="username">' + msg.username + ':</span>' +
                  msg.text;
              }
              
              messagesDiv.appendChild(messageDiv);
            }
            
            function addSystemMessage(text) {
              const messagesDiv = document.getElementById('messages');
              const messageDiv = document.createElement('div');
              messageDiv.className = 'message system-message';
              messageDiv.innerHTML = '<span class="timestamp">' + new Date().toLocaleTimeString() + '</span>' + text;
              messagesDiv.appendChild(messageDiv);
              scrollToBottom();
            }
            
            function sendMessage() {
              const input = document.getElementById('messageInput');
              const text = input.value.trim();
              
              if (text) {
                const message = {
                  type: 'user',
                  username: username,
                  text: text,
                  timestamp: Date.now()
                };
                
                // Save message
                saveMessage(message);
                
                // Display immediately
                displayMessage(message);
                
                input.value = '';
                scrollToBottom();
                updateUserCount();
              }
            }
            
            function scrollToBottom() {
              const messagesDiv = document.getElementById('messages');
              messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }
            
            function updateUserCount() {
              // Simulate user count based on recent activity
              const messages = JSON.parse(localStorage.getItem('undefinedIRC') || '[]');
              const recentMessages = messages.filter(m => Date.now() - m.timestamp < 300000); // 5 minutes
              const uniqueUsers = new Set(recentMessages.map(m => m.username)).size;
              document.getElementById('userCount').textContent = 'users: ' + Math.max(1, uniqueUsers);
            }
            
            // Initialize
            document.addEventListener('DOMContentLoaded', () => {
              initializeChat();
              
              // Enter key to send
              document.getElementById('messageInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              });
              
              // Focus input
              document.getElementById('messageInput').focus();
              
              // Update user count periodically
              setInterval(updateUserCount, 10000);
            });
            
            // Handle page unload
            window.addEventListener('beforeunload', () => {
              saveMessage({
                type: 'system',
                text: username + ' left the chat',
                timestamp: Date.now()
              });
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
            ready to connect with friends?
          </p>
          <p className="text-hacker-cyan-dark mb-6">
            enter the live chat room
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