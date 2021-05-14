const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BYU_ICECREAM = 'BYU_ICECREAM';

//INITIAL STATE
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

//ACTION CREATORS
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

function byuIceCream() {
  return {
    type: BYU_ICECREAM,
  };
}

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BYU_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

//CREATING STORE
const store = createStore(reducer);
console.log('Inital state ', store.getState());

//SUBSCRIBE TO CHANGES
const unsub = store.subscribe(() =>
  console.log('Updated Store ', store.getState())
);

//DISPATCH AN ACTION
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(byuIceCream());
store.dispatch(byuIceCream());
//UNSUBSCRIBE
unsub();
