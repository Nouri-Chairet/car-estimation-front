import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pricegenius.png';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="auth-container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon"><img src={logo} height={80}alt="Logo" /></span>
          <span className="logo-text">PriceGenius</span>
        </div>
        <nav>
          <Link to="/about">about us</Link>
        </nav>
      </header>

      <div className="auth-form-container">
        <div className="auth-form-box">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
            <button type="submit" className="auth-button">
              Login
            </button>
          </form>
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 