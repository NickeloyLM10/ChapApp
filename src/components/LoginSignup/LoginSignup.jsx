import React from 'react'
import './LoginSignup.css'

import user_icon from '../assets/user.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

export const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign up</div>
          <div className='underline'></div>
          <div className='inputs'>
          <div className='input'>
            <img src = {user_icon} alt = "" />
            <input type='text' />
          </div>
          <div className='input'>
            <img src = {email_icon} alt = "" />
            <input type='email' />
          </div>
          <div className='input'>
            <img src = {password_icon} alt = "" />
            <input type='password' />
          </div>
          </div>
          <div className='submit-container'>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            <div className='submit'>Sign Up</div>
            <div className='submit'>Login</div>
          </div>
        </div>
    </div>
  );
};

export default LoginSignup
