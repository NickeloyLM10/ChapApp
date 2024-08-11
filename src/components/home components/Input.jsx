import React, { useState } from 'react';

const Input = ({fetchMessages}) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = async() => {
    // Create a new message object
    const newMessage = {
      text
    };

    // Retrieve existing messages from local storage or initialize with an empty array
    const existingMessages = JSON.parse(localStorage.getItem('messageData')) || [];

    // Add the new message to the list
    existingMessages.push(newMessage);

    // Save the updated messages array back to local storage
    localStorage.setItem('messageData', JSON.stringify(existingMessages));

    // Clear input fields
    setText('');

    // refetch messages
    fetchMessages();

  };

  return (
    <div className='input'>
      <input 
        type='text' 
        placeholder='Type something...' 
        value={text} 
        onChange={handleTextChange} 
      />
      <div className='send'>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
