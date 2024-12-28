// filepath: /C:/wamp64/www/my-react-app/src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ schoolName, userType }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="header-container">
      <div className="row">
        <div className="col-lg-3 brand-logo-container">
          <img 
            src="/logo/skoolizer.png" // Replace with the actual path to your logo
            className="brand-logo"
            alt="Skoolizer"
          />
        </div>
        <div className="col-lg-9 school-name-container">
          <p>
            <img 
              src='/logo/logo.png' // Replace with the actual path to your logo
              className='school-logo'
              alt='School Logo'
            />
            Saraswati Paradise International Public School
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;