import React, { useEffect, useState } from 'react';
import Message from './Message';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    // Retrieve messages from local storage
    const storedMessages = localStorage.getItem('messageData');
    if (storedMessages) {
      try {
        const parsedMessages = JSON.parse(storedMessages);
        // Ensure parsedMessages is an array
        if (Array.isArray(parsedMessages)) {
          setMessages(parsedMessages);
        } else {
          console.error('Stored messages data is not an array');
        }
      } catch (error) {
        console.error('Failed to parse stored messages', error);
      }
    }
  }
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className='messages'>
      {messages.map((message, index) => (
        <Message key={index} text={message.text} file={message.file} 
        />
      ))}
    </div>
  );
}


export default Messages;
