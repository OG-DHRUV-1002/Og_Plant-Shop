import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header /> {/* Header is outside Routes, so it shows on every page */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;