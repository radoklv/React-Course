const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BYU_ICECREAM = 'BYU_ICECREAM';

//INITIAL STATE

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

//ACTION CREATORS
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function byuIceCream() {
  return {
    type: BYU_ICECREAM,
  };
}

//REDUCERS
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
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
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);

console.log('Inital state ', store.getState());

//SUBSCRIBE TO CHANGES
const unsub = store.subscribe(() =>
  // console.log('Updated Store ', store.getState().cake)
  // console.log('Updated Store ', store.getState().iceCream)
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
