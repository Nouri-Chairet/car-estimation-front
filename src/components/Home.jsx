import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pricegenius.png';
import whiteCar from '../assets/white_car.png';
import folder from '../assets/folder.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon"><img height={80} src={logo} alt="Logo" /></span>
          <span className="logo-text">PriceGenius</span>
        </div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main className="home-content">
        <h1 className="home-title">Know the value before you buy or sell!</h1>
        
        <div className="cards-container">
          <Link to="/estimate" className="card">
            <div className="card-content">
              <img src={whiteCar} height={250} alt="Car" className="card-image" />
              <h2>Car</h2>
            </div>
          </Link>

          <Link to="/records" className="card">
            <div className="card-content">
              <img src={folder} alt="Estimation Records" className="card-image" />
              <h2>Estimation Records</h2>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home; 