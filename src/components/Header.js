import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Hook to read from the store
import './Header.css'; // Create this file for styling

const Header = () => {
  // Select the cartItems from the Redux state
  const cartItems = useSelector(state => state.cart.cartItems);
  
  // Calculate total quantity
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">Planty</Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart ({totalItemsInCart})
        </Link>
      </nav>
    </header>
  );
};

export default Header;