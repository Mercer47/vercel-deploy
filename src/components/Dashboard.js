import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Create from './student/create';
import './Sidebar.css';

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
      <Header schoolName="Saraswati Paradise International Public School" userType={user.usertype} />
      <div className="dashboard-content">
        <Sidebar userType={user.usertype} />
        <div className="main-content">
          <Routes>
            <Route path="create" element={<Create />} />
            {/* Add more nested routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;