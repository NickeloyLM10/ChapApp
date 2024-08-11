import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to Strapi
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password
      });

      const { jwt, user } = response.data;

      // Store token and user data in local storage
      localStorage.setItem('jwt', jwt);
      localStorage.setItem('currentUser', JSON.stringify(user));

      alert('Login successful!');
      // Redirect to the home page
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid email or password!');
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
};

export default Login;
