import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], // This will be an array of plant objects
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action: Add an item to the cart
    addToCart: (state, action) => {
      // action.payload will be the plant object we want to add
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    
    // Action: Remove an item from the cart
    removeFromCart: (state, action) => {
      // action.payload will be the itemId
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    // Action: Increase item quantity
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    // Action: Decrease item quantity
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      // If item exists and quantity is more than 1, decrement
      if (item && item.quantity > 1) {
        item.quantity--;
      } 
      // If quantity is 1, we remove it completely
      else if (item) {
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;