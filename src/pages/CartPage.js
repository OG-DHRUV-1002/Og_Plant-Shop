import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../features/cart/cartSlice';
import './CartPage.css'; // Create this file for styling

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty</h2>
        <Link to="/products" className="btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
            </div>
            <div className="item-quantity">
              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            </div>
            <div className="item-actions">
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Cost: ${totalCost}</h3>
        <button onClick={() => alert('Coming Soon!')} className="btn-checkout">Checkout</button>
        <Link to="/products" className="btn">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default CartPage;