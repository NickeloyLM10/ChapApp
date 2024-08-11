import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
  return (
    <div className='messages'>
      {messages.map((message, index) => (
        <Message
          key={index}
          text={message.text}
          file={message.file}
          fromServer={message.fromServer} // Pass the `fromServer` prop
        />
      ))}
    </div>
  );
};

export default Messages;
