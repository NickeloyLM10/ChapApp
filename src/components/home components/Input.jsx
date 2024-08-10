import React, { useState } from 'react';
import Img from '../img/Img.png';
import Attach from '../img/attach.png';

const Input = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSend = async() => {
    // Create a new message object
    const newMessage = {
      text
    };

    // Retrieve existing messages from local storage or initialize with an empty array
    const messages = await localStorage.getItem('messageData')
    console.log(messages);
    const existingMessages = JSON.parse(messages) || [];
    console.log(existingMessages);

    // Add the new message to the list
    existingMessages.push(newMessage);

    // Save the updated messages array back to local storage
    localStorage.setItem('messageData', JSON.stringify(existingMessages));

    // Clear input fields
    setText('');
    setFile(null);

    // Notify user
    // alert('Message stored successfully!');
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
        <img src={Attach} alt='Attach' />
        <input 
          type='file' 
          style={{ display: 'none' }} 
          id='file' 
          onChange={handleFileChange} 
        />
        <label htmlFor='file'>
          <img src={Img} alt='Upload' />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
