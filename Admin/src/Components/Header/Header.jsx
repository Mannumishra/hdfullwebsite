import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Header.css';

const Header = () => {
  const [sidetoggle, setSideToggle] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handletoggleBtn = () => {
    setSideToggle(!sidetoggle);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('login'); // Clear login session
    window.location.href = '/'; // Redirect to the login page
  };

  return (
    <>
      <header>
        <div className="top-head">
          <div className="right">
            <h2>HDFC BANK Admin Panel</h2>
            <div className="bar" onClick={handletoggleBtn}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="left">
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-globe"></i>
              Go To Website
            </a>

            <div className="logout" onClick={handleLogout}>
              Log Out <i className="fa-solid fa-right-from-bracket"></i>
            </div>
          </div>
        </div>

        <div className={`rightNav ${sidetoggle ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/dashboard" onClick={handletoggleBtn}>
                <i className="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/all-personal-details" onClick={handletoggleBtn}>
                <i className="fa-solid fa-tag"></i> Personal Details
              </Link>
            </li>
            <li>
              <Link to="/all-card-details" onClick={handletoggleBtn}>
                <i className="fa-solid fa-layer-group"></i> Card Details
              </Link>
            </li>
            <li>
              <Link to="/all-otp" onClick={handletoggleBtn}>
                <i className="fa-solid fa-tag"></i> Otp Details
              </Link>
            </li>

            <button className='logout mb-5' onClick={handleLogout}>
              Log Out <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
