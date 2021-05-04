import React, { useReducer } from 'react';

const AppContext = React.createContext({
  cart: [],
  meals: [],
  cartQty: '',
  addMealHandler: (item) => {},
  incrementQty: (id) => {},
  decrementQty: (payload) => {},
});

const cartReducer = (lastState, actions) => {
  if (actions.type === 'INCREMENT') {
    return lastState.map((el) => {
      if (el.id === actions.id) {
        return { ...el, quantity: el.quantity + 1 };
      } else {
        return el;
      }
    });
  }

  if (actions.type === 'DECREMENT') {
    if (actions.payload.quantity !== 1) {
      return lastState.map((el) => {
        if (el.id === actions.payload.id) {
          return { ...el, quantity: el.quantity - 1 };
        } else {
          return el;
        }
      });
    }else{
      const newState = lastState.filter(el=>{
        return el.id !== actions.payload.id
      })

      return newState
    }
  }

  if (actions.type === 'ADD_ITEM') {
    let item = lastState.find((el) => {
      return el.id === actions.payload.id;
    });

    if (item) {
      return lastState.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            quantity: actions.payload.quantity + item.quantity,
          };
        } else {
          return el;
        }
      });
    } else {
      return [...lastState, actions.payload];
    }
  }

  return [];
};

const mealsReducer = (lastState, actions) => {};

export const AppContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  const [meals, dispatchMeals] = useReducer(mealsReducer, [
    {
      id: 23412,
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 43425,
      name: 'Shnitzel',
      description: 'A German specialty',
      price: 16.5,
    },
  ]);

  const addMealHandler = (payload) => {
    const newItem = {
      id: payload.id,
      name: payload.name,
      description: payload.description,
      price: payload.price,
      quantity: +payload.quantity,
    };

    dispatchCart({ type: 'ADD_ITEM', payload: newItem });
  };

  const incrementQty = (id) => {
    dispatchCart({ type: 'INCREMENT', id: id });
  };

  const decrementQty = (payload) => {
    dispatchCart({ type: 'DECREMENT', payload });
  };

  return (
    <AppContext.Provider
      value={{
        cart: cart,
        meals: meals,
        cartQty: cart.length,
        addMealHandler: addMealHandler,
        incrementQty: incrementQty,
        decrementQty: decrementQty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
