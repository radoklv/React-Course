// import { createStore, dispatch } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth'


const store = configureStore({
  // reducer: counterSlice.reducer, // Ако са повече от един Slice, Value-то става обект, като долния пример
  reducer: { counter: counterSlice, auth: authSlice },
});

export default store;

// const counterReducer = (state = INITIAL_STATE, actions) => {
//   if (actions.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     //ОR
//       // ...state,  counter: state.counter + 1,
//     };
//   }

//   if (actions.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if(actions.type === 'increase'){
//     return{
//       counter: state.counter + actions.value,
//       showCounter: state.showCounter
//     }
//   }

//   if(actions.type === 'toggle'){
//     return{
//       ...state, showCounter: !state.showCounter
//     }
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
