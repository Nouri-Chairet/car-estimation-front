import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pricegenius.png';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register attempt:', formData);
  };

  return (
    <div className="auth-container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon"><img src={logo} height={80} alt="Logo" /></span>
          <span className="logo-text">PriceGenius</span>
        </div>
        <nav>
          <Link to="/about">about us</Link>
        </nav>
      </header>

      <div className="auth-form-container">
        <div className="auth-form-box">
          <h1>Register</h1>
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
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="auth-button">
              Register
            </button>
          </form>
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 