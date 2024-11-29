import React, { useState } from 'react';
import './Login.css'; // Make sure to create and import a CSS file for styling
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== 'hdfcbank@gmail.com' && password !== 'Hdfc@123') {
      toast.error('Invalid Email Address or password');
    } else {
      sessionStorage.setItem('login', true);
      window.location.href = '/dashboard';
    }
  };

  return (
    <>
      <div className="main-login">
        <div className="login-container">
          <h2 className="login-title">Admin Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
              <div className="show-password">
                <input
                  type="checkbox"
                  id="show-password"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)} // Toggle showPassword state
                />
                <label htmlFor="show-password">Show Password</label>
              </div>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
