import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Retrieve user data from local storage
    const storedData = JSON.parse(localStorage.getItem('userRegistration'));
    
    if (storedData) {
      if (storedData.email === email && storedData.password === password) {
        alert('Login successful!');
        // Redirect to the home page
        navigate('/home');
      } else {
        alert('Invalid email or password!');
      }
    } else {
      alert('No registered user found!');
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
          <input 
            type='email' 
            placeholder='E-mail' 
            value={email}
            onChange={handleEmailChange}
          />
          <input 
            type='password' 
            placeholder='Password' 
            value={password}
            onChange={handlePasswordChange}
          />
          <button type='submit'>Sign in</button>
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
