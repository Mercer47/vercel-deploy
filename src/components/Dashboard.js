// filepath: /C:/wamp64/www/my-react-app/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

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
    <div>
      <Header schoolName="Your School Name" userType={user.usertype} />
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

export default Dashboard;