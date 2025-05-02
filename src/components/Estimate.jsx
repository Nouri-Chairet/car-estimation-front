import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/pricegenius.png';
import background from '../assets/background.png';
import back2 from '../assets/back2.png';
import carModelsByMake from '../data/car_models_by_make2.json';
import Loader from './Loader';
import './Estimate.css';

const years = Array.from({ length: 30 }, (_, i) => 2024 - i);
const transmissions = ['Manuelle', 'Automatique', 'Semi-automatique'];
const fuels = ['Essence', 'Diesel', 'Hybride', 'Electrique', 'GPL'];
const motorTypes = ['V', 'Inline', 'Boxer', 'Rotary', 'Electric'];

const Estimate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
    kilometrage: '',
    owners: '',
    color: '',
    motorType: '',
    cylinders: '',
    transmission: '',
    fuel: '',
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMakeChange = e => {
    setForm({ ...form, make: e.target.value, model: '' });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      model: form.make + ' ' + form.model,
      version: '',
      year: parseInt(form.year),
      km: parseInt(form.kilometrage),
      boite: form.transmission,
      transmission: form.transmission,
      puissance: parseInt(form.cylinders) || 3,
      energie: form.fuel,
      location: 'Tunis',
    };
    try {
      const res = await fetch('http://127.0.0.1:8000/api/car/estimation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setEstimatedPrice(data.estimated_price);
      setStep(4);
    } catch (err) {
      alert('Error estimating price');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="estimate-container">
      <header className="header">
        <div className="logo" onClick={() => navigate('/home')}>
          <span className="logo-icon"><img src={logo} alt="Logo" /></span>
          <span className="logo-text">PriceGenius</span>
        </div>
        <button className="back-button" onClick={() => navigate('/home')}>
          ← Back
        </button>
      </header>

      <main className="estimate-content">
        <h1>Your Car is {form.make} {form.model}</h1>
        
        {loading ? (
          <Loader />
        ) : (
          <div className="form-container">
            {step === 1 && (
              <div className="form-section">
                <h2>Section One: Car Details</h2>
                <form onSubmit={e => { e.preventDefault(); handleNext(); }}>
                  <div className="form-group">
                    <label>Make</label>
                    <select name="make" value={form.make} onChange={handleMakeChange} required>
                      <option value="">Select Make</option>
                      {Object.keys(carModelsByMake).map(make => (
                        <option key={make} value={make}>{make}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Model</label>
                    <select name="model" value={form.model} onChange={handleChange} required disabled={!form.make}>
                      <option value="">Select Model</option>
                      {form.make && carModelsByMake[form.make].map(model => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Year</label>
                    <select name="year" value={form.year} onChange={handleChange} required>
                      <option value="">Select Year</option>
                      {years.map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="next-button">Next</button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="form-section">
                <h2>Section Two: Car History</h2>
                <form onSubmit={e => { e.preventDefault(); handleNext(); }}>
                  <div className="form-group">
                    <label>Kilometrage</label>
                    <input
                      type="number"
                      name="kilometrage"
                      value={form.kilometrage}
                      onChange={handleChange}
                      required
                      min={0}
                      max={1000000}
                    />
                  </div>
                  <div className="form-group">
                    <label>Number of Owners</label>
                    <input
                      type="number"
                      name="owners"
                      value={form.owners}
                      onChange={handleChange}
                      required
                      min={1}
                      max={10}
                    />
                  </div>
                  <div className="form-group">
                    <label>Color</label>
                    <input
                      type="text"
                      name="color"
                      value={form.color}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="button-group">
                    <button type="button" onClick={handleBack} className="back-button">Back</button>
                    <button type="submit" className="next-button">Next</button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="form-section">
                <h2>Section Three: Performance & Features</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Motor Type</label>
                    <select name="motorType" value={form.motorType} onChange={handleChange} required>
                      <option value="">Select Motor Type</option>
                      {motorTypes.map(mt => (
                        <option key={mt} value={mt}>{mt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Cylinders</label>
                    <input
                      type="number"
                      name="cylinders"
                      value={form.cylinders}
                      onChange={handleChange}
                      required
                      min={2}
                      max={16}
                    />
                  </div>
                  <div className="form-group">
                    <label>Transmission</label>
                    <select name="transmission" value={form.transmission} onChange={handleChange} required>
                      <option value="">Select Transmission</option>
                      {transmissions.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Fuel</label>
                    <select name="fuel" value={form.fuel} onChange={handleChange} required>
                      <option value="">Select Fuel</option>
                      {fuels.map(f => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                  <div className="button-group">
                    <button type="button" onClick={handleBack} className="back-button">Back</button>
                    <button type="submit" className="estimate-button">
                      Get Estimation
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 4 && (
              <div className="result-section">
                <h2>Estimated Price</h2>
                <div className="price-display">
                  {estimatedPrice ? `${(estimatedPrice * 1000).toLocaleString()} DT` : 'N/A'}
                </div>
                <button
                  onClick={() => {
                    setStep(1);
                    setEstimatedPrice(null);
                    setForm({
                      make: '', model: '', year: '', kilometrage: '',
                      owners: '', color: '', motorType: '', cylinders: '',
                      transmission: '', fuel: ''
                    });
                  }}
                  className="restart-button"
                >
                  Estimate Another
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Estimate; 