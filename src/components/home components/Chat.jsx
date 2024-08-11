import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ws = new WebSocket('https://chatapp-backend-jwry.onrender.com');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      console.log('Received from server:', event.data); // Log received data
      const newMessage = { text: event.data, fromServer: true };
      setMessages(prevMessages => [...prevMessages, newMessage]);

      // Also save the new message to local storage
      const existingMessages = JSON.parse(localStorage.getItem('messageData')) || [];
      existingMessages.push(newMessage);
      localStorage.setItem('messageData', JSON.stringify(existingMessages));
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const fetchMessages = () => {
    const storedMessages = localStorage.getItem('messageData');
    if (storedMessages) {
      try {
        const parsedMessages = JSON.parse(storedMessages);
        if (Array.isArray(parsedMessages)) {
          setMessages(parsedMessages);
        } else {
          console.error('Stored messages data is not an array');
        }
      } catch (error) {
        console.error('Failed to parse stored messages', error);
      }
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRegistration');
    localStorage.removeItem('messageData');
    navigate('/');
  };

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <button className='logoutButton' onClick={handleLogout}>Logout</button>
        <span className='chatTitle'>Chat App</span>

        <div className='chatIcons'>
          <img src={Cam} alt=''/>
          <img src={Add} alt=''/>
          <img src={More} alt=''/>
        </div>
      </div>
      <Messages messages={messages}/>
      <Input socket={socket} fetchMessages={fetchMessages}/>
    </div>
  );
}

export default Chat;
