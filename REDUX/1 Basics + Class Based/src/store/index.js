import { createStore } from 'redux';

const INITIAL_STATE = {
  counter: 0,
  showCounter: true
};

const counterReducer = (state = INITIAL_STATE, actions) => {
  if (actions.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    //ОR
      // ...state,  counter: state.counter + 1,
    };
  }

  if (actions.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if(actions.type === 'increase'){
    return{
      counter: state.counter + actions.value,
      showCounter: state.showCounter
    }
  }

  if(actions.type === 'toggle'){
    return{
      ...state, showCounter: !state.showCounter
    }
  }
  return state;
};

const store = createStore(counterReducer);


export default store;