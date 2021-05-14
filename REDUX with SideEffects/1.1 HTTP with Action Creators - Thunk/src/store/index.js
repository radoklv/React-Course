import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import stockSlice from './stock-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice, stock: stockSlice, cart: cartSlice },
});

export default store;
