import React from 'react';
import './Message.css'; // Make sure to include your CSS file

const Message = ({ text, file, fromServer }) => {
  return (
    <div className={`message ${fromServer ? 'server' : 'owner'}`}>
      <div className="messageContent">
      {typeof text === 'object' ? JSON.stringify(text) : <p>{text}</p>}
        {file && <img src={file} alt='' />}
      </div>
    </div>
  );
};

export default Message;

// import React from 'react';

// const Message = ({ text }) => {
//   return (
//     <div className='message owner'>
//       <div className="messageContent">
//         {typeof text === 'object' ? JSON.stringify(text) : <p>{text}</p>}
//       </div>
//     </div>
//   )
// }

// export default Message;
