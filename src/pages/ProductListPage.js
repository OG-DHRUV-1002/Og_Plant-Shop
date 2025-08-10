import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PLANTS } from '../products'; // Make sure the path to products.js is correct
import { addToCart } from '../features/cart/cartSlice';
import './ProductListPage.css';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  // This helper function checks if an item is already in the cart
  const isItemInCart = (itemId) => cartItems.some(item => item.id === itemId);

  // Group plants by category for easier rendering
  const categories = [...new Set(PLANTS.map(p => p.category))];

  return (
    <div className="product-list-page">
      <h2>Our Plants</h2>

      {/* Loop through each category and display its plants */}
      {categories.map(category => (
        <section key={category}>
          <h3>{category}</h3>
          <div className="product-grid">
            {PLANTS.filter(p => p.category === category).map(plant => (
              // This is the "card" that groups all info for one plant
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => dispatch(addToCart(plant))}
                  disabled={isItemInCart(plant.id)}
                >
                  {isItemInCart(plant.id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductListPage;