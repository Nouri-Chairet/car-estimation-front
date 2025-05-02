import React from 'react';
import { Link } from 'react-router-dom';
import whiteCar from '../assets/1.jpg';
import threeCars from '../assets/2.png';
import redCar from '../assets/3.png';
import screenshot1 from '../assets/Screenshot 2025-04-30 152851 1.jpg';
import screenshot2 from '../assets/Screenshot 2025-04-30 152902 1.jpg';
import logo from '../assets/pricegenius.png';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <span className="logo-icon"><img src={logo} height={80}  alt="Logo" /></span>
          <span className="logo-text">PriceGenius</span>
        </div>
        <nav>
          <Link to="/about">about us</Link>
          <Link to="/login" className="login-btn">Login</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>PriceGenius !</span></h1>
          <div className="hero-buttons">
            <button className="btn btn-primary"><Link to="/home">Estimate Car Value</Link></button>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={whiteCar} alt="White Mercedes" className="hero-image" />
        </div>
      </section>

      <section className="car-details">
        <h2>Enter your Car Details</h2>
        <div className="details-grid">
          <div className="details-column">
            <h3>Performance & features</h3>
            <div className="form-group">
              <label>Motor Type :</label>
              <input type="text" placeholder="Type" />
            </div>
            <div className="form-group">
              <label>Cylinders :</label>
              <input type="number" placeholder="Number" />
            </div>
            <div className="form-group">
              <label>Transmission :</label>
              <select>
                <option value="">Select</option>
              </select>
            </div>
            <div className="form-group">
              <label>Fuel :</label>
              <select>
                <option value="">Select</option>
              </select>
            </div>
          </div>
          <div className="details-column">
            <h3>Condition and history</h3>
            <div className="form-group">
              <label>Kilometrage :</label>
              <input type="number" placeholder="Number" />
            </div>
            <div className="form-group">
              <label>Number Of Owners :</label>
              <input type="number" placeholder="Number" />
            </div>
            <div className="form-group">
              <label>Color :</label>
              <select>
                <option value="">Select</option>
              </select>
            </div>
            <div className="form-group">
              <label>External photos :</label>
              <input type="file" className="file-input" />
            </div>
            <div className="form-group">
              <label>Internal photos :</label>
              <input type="file" className="file-input" />
            </div>
          </div>
        </div>
        <img src={threeCars} alt="Three Hyundai Cars" className="three-cars" />
      </section>

      <section className="estimation">
        <h2>We will Give you an<br />Accurate Price Estimation</h2>
        <div className="estimation-content">
          <div className="price-display">1234567$</div>
          <img src={redCar} alt="Red Mercedes" className="red-car" />
        </div>
      </section>

      <footer>
        <p>@2025 all right reseved</p>
      </footer>
    </div>
  );
};

export default LandingPage; 