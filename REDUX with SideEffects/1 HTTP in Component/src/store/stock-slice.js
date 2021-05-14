import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  stocks: [
    {
      id: 's1',
      title: 'Product One',
      price: 11.99,
      description: 'This is a first product - amazing!',
    },
    {
      id: 's2',
      title: 'Product Two',
      price: 12.99,
      description: 'This is a second product - amazing!',
    },
    {
      id: 's3',
      title: 'Product Three',
      price: 13.99,
      description: 'This is a third product - amazing!',
    },
    {
      id: 's4',
      title: 'Product Four',
      price: 14.99,
      description: 'This is a fourth product - amazing!',
    },
  ],
};

const stockSlice = createSlice({
  name: 'stock',
  initialState: INITIAL_STATE,
});

export const stockActions = stockSlice.actions;
export default stockSlice.reducer;
