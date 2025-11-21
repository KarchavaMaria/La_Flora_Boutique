import { createSlice } from '@reduxjs/toolkit';

const itemsFromLs = localStorage.getItem('cartItems');
const initialItems = itemsFromLs ? JSON.parse(itemsFromLs) : [];

const initialState = {
  items: initialItems,
  totalPrice: Number(localStorage.getItem('totalPrice')) || 0,
  totalCount: Number(localStorage.getItem('totalCount')) || 0,
};

const saveToLocalStorage = (state) => {
  localStorage.setItem('cartItems', JSON.stringify(state.items));
  localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
  localStorage.setItem('totalCount', JSON.stringify(state.totalCount));
};

const calculateTotalPrice = (state) => {
  state.totalCount = state.items.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
  state.totalPrice = state.items.reduce(
    (total, item) => total + (item.quantity || 0) * (item.finalPrice || 0),
    0
  );
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      calculateTotalPrice(state);
      saveToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);

      calculateTotalPrice(state);
      saveToLocalStorage(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }

      calculateTotalPrice(state);
      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      calculateTotalPrice(state);
      saveToLocalStorage(state);
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
