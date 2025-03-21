import React, { useState } from 'react';
import './chat-bot.css'; // Ensure your CSS file is set up
import { RiMessage2Fill } from "react-icons/ri";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);  // To toggle chat visibility
  const [message, setMessage] = useState('');   // To store user's input message
  const [messages, setMessages] = useState([    // Initial welcome message in chatbox
    { sender: 'Bot', text: 'Hi there, how can I help you today?' }
  ]);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = async () => {
    if (!message.trim()) return;  // Prevent empty messages

    try {
      // Display the user's message in the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'You', text: message }
      ]);

      const requestUrl = 'http://localhost:5000/chat';  // Backend URL
      const requestBody = { message };

      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        mode: 'cors',
      });

      const responseData = await response.json();

      // Display the bot's response in the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'Bot', text: responseData.response }
      ]);

      setMessage('');  // Clear the input field
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <button className="chatbot-toggler" onClick={toggleChatBot}>
        <RiMessage2Fill />
      </button>
      {isOpen && (
        <div className="chatbot">
          <header>
            <h2>Welcome, how may I assist you today?</h2>
          </header>
          <ul className="chatbox">
            {/* Display the chat history (user and bot messages) */}
            {messages.map((msg, index) => (
              <li
                key={index}
                className={`chat ${msg.sender === 'You' ? 'outgoing' : 'incoming'}`}
                style={{
                  alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                  marginLeft: msg.sender === 'You' ? 'auto' : '0',
                  marginRight: msg.sender === 'You' ? '0' : 'auto'
                }}
              >
                <p>{msg.text}</p>
              </li>
            ))}
          </ul>
          <div className="chat-input">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter a message..."
              spellCheck="false"
              required
            ></textarea>
            <span
              id="send-btn"
              className="material-symbols-rounded"
              onClick={handleClick}
              style={{
                border: "1px solid green",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              SEND
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;