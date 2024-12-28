// filepath: /C:/wamp64/www/my-react-app/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      // Redirect to login page if not logged in
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="dashboard-container">
      <Header schoolName="Your School Name" userType={user.usertype} />
      <div className="dashboard-content">
        <Sidebar userType={user.usertype} />
        <div className="main-content">
          {/* Add your main dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;