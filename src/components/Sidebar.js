import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUserGraduate, FaEye, FaListOl, FaArrowCircleRight, FaBasketballBall, FaChalkboardTeacher, FaGraduationCap, FaChalkboard } from 'react-icons/fa';
import './Sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = ({ userType }) => {
  const navigate = useNavigate();

  return (
    <div className="col-lg-3 sidebar-container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <FaHome className="menu-icon" /> Dashboard
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <button className="sidebar-btn" onClick={() => navigate('/dashboard')}>
                <FaHome className="sidebar-icon" /> Dashboard
              </button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <FaGraduationCap className="menu-icon" /> Students
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/create')}>
                <FaUserGraduate className="sidebar-icon" /> New Admission
              </button>
              <br />
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/student/viewmany')}>
                <FaEye className="sidebar-icon" /> View Students
              </button>
              <br />
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/student/listSelect')}>
                <FaListOl className="sidebar-icon" /> List of Students
              </button>
              <br />
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/movement/select')}>
                <FaArrowCircleRight className="sidebar-icon" /> Check In/Out
              </button>
              <br />
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/sport')}>
                <FaBasketballBall className="sidebar-icon" /> Sports
              </button>
              <br />
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/student/viewTransferredStudents')}>
                <FaBasketballBall className="sidebar-icon" /> SLCs
              </button>
              <br />
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/student/viewLeaveRequests')}>
                <FaBasketballBall className="sidebar-icon" /> Leave Requests
              </button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <FaChalkboardTeacher className="menu-icon" /> Teachers
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/teacher/create')}>
                <FaChalkboardTeacher className="sidebar-icon" /> New Teacher
              </button>
              <br />
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/teacher/viewmany')}>
                <FaEye className="sidebar-icon" /> View Teachers
              </button>
              <br />
              <button className="sidebar-btn" onClick={() => navigate('/dashboard/teacher/listSelect')}>
                <FaListOl className="sidebar-icon" /> List of Teachers
              </button>
            </div>
          </div>
        </div>
        {/* Add more accordion items as needed */}
      </div>
    </div>
  );
};

export default Sidebar;