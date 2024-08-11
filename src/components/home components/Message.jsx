import React from 'react';


const Message = ({ text, file }) => {
  return (
    <div className='message owner'>
      <div className="messageContent">
        {text && <p>{text}</p>}
        {file && <img src={file} alt='' />}
      </div>
    </div>
  )
}

export default Message;
