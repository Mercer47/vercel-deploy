import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling
import { FaSignOutAlt } from 'react-icons/fa';

const Header = ({ schoolName }) => {
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
            {schoolName}
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;