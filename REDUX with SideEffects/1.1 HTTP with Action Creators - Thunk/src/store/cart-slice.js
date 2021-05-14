import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
  totalQuantity: 0,
  changed: false, // За повече инфо лекция 260
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    replaceCart(state, actions) {
      state.items = actions.payload.items;
      state.totalQuantity = actions.payload.totalQuantity;
    },
    addItemToCart(state, actions) {
      const newItem = actions.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + newItem.price;
      }
    },
    removeItemFromCart(state, actions) {
      const id = actions.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
