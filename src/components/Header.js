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
      <div className="school-logo-container">
        <img
          src="/path/to/school-logo.png" // Replace with the actual path to your logo
          className="school-logo"
          alt="School Logo"
        />
      </div>
      <p className="school-name">
        {schoolName}
        <button
          className="icon-btn"
          onClick={handleLogout}
          title="Log Out"
        >
          <i className="las la-door-open"></i>
        </button>
      </p>
    </div>
  );
};

export default Header;