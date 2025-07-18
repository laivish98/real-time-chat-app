import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

// ⬇️ Replace with your laptop's local IP address
const socket = io('http://192.168.1.7:3001'); // 👈 IMPORTANT!

function Chat() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [username, setUsername] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const messagesEndRef = useRef(null);

  // Ask username on load
  useEffect(() => {
    const name = prompt('Enter your name:');
    setUsername(name || 'Anonymous');
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  // Send message to server
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('send_message', {
        sender: username,
        message: message,
      });
      setMessage('');
    }
  };

  // Add emoji to message
  const addEmoji = (emoji) => {
    setMessage((prev) => prev + emoji.native);
  };

  // Receive messages from server
  useEffect(() => {
    const handleReceive = (data) => {
      setChatLog((prev) => [...prev, data]);
    };

    socket.on('receive_message', handleReceive);

    return () => {
      socket.off('receive_message', handleReceive);
    };
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">💬 Welcome {username}</div>

      <div className="chat-box">
        {chatLog.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.sender === username ? 'self' : 'other'}`}
          >
            <div className="avatar">{msg.sender.charAt(0).toUpperCase()}</div>
            <div className="message-content">
              <div className="sender-name">{msg.sender}</div>
              <div className="bubble">{msg.message}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Emoji Picker */}
      {showPicker && (
        <div
          style={{
            position: 'absolute',
            bottom: '85px',
            left: '15px',
            zIndex: 999,
          }}
        >
          <Picker onSelect={addEmoji} theme="dark" />
        </div>
      )}

      <div className="chat-input">
        <button
          className="emoji-button"
          onClick={() => setShowPicker((prev) => !prev)}
        >
          😊
        </button>
        <input
          type="text"
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
