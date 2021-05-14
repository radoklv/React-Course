import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart(state, actions) {
      const newItem = actions.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

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
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
