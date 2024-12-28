// filepath: /C:/wamp64/www/my-react-app/src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = ({ userType }) => {
    const navigate = useNavigate();
    return (
        <div className="col-lg-3 sidebar-container">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Dashboard
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <button className="sidebar-btn" onClick={() => navigate('/dashboard')}>
                                <i className="las la-home"></i> Dashboard
                            </button>
                        </div>
                    </div>
                </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Exams
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <button className="sidebar-btn" onClick={() => navigate('/exam/newexam')}>
                                    <i className="las la-plus-square"></i> New Exam
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