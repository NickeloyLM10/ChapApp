import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatar: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          avatar: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save user data to local storage
    localStorage.setItem('userRegistration', JSON.stringify(formData));
    
    alert('Registration successful!');
    navigate('/login'); // Redirect to login page after registration
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            placeholder='Username' 
            name='username' 
            value={formData.username} 
            onChange={handleChange}
          />
          <input 
            type='email' 
            placeholder='E-mail' 
            name='email' 
            value={formData.email} 
            onChange={handleChange}
          />
          <input 
            type='password' 
            placeholder='Password' 
            name='password' 
            value={formData.password} 
            onChange={handleChange}
          />
          <input 
            style={{display: "none"}} 
            type='file' 
            id='file' 
            onChange={handleFileChange} 
          />
          <button type='submit'>Sign up</button>
        </form>
        <p>You do have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
