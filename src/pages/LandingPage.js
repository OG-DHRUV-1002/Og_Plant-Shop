import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Create this file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Planty</h1>
        <p>Your one-stop shop for beautiful houseplants that bring life to your home.</p>
        <Link to="/products" className="btn-get-started">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;