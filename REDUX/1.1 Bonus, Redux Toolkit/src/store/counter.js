import { createSlice } from '@reduxjs/toolkit';

const INITIAL_COUNTER_STATE = {
  counter: 0,
  showCounter: true,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_COUNTER_STATE,
  reducers: {
    increment(state) {
      state.counter++; //Тук може 'директно' да променяме стейта. За повече инфо 240 лекция
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; //payload is default name for data
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
