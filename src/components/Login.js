import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';

const Login = () => {
  // State to store user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/skoolizer/api.php/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'csSbZj1jTKOUJ3SjcngDGb:APA91bF2aTNbNamx6cHu0SRFyagbLaGk86BtmcyxHe8b3B4Bi8hw_bb82XGsLp5LeE7LbbAlW6vdYhkUCG6rwTMqCVLArmcpBM5CAIA-GMfavgXC-i1vBoAK0v_QZdH2DMtFYk0XFt05' // Replace with your actual API key
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Logged in successfully:', data);

      // Store the token or user data in local storage
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;