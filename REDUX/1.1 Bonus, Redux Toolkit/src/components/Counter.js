import classes from './Counter.module.css';
import { Component } from 'react'; //For Class Based Components
import { connect } from 'react-redux'; //For Class Based Components
import { useSelector, useDispatch } from 'react-redux'; //For Functional Components

import { counterActions } from '../store/counter';

/*---------------------FUNCTIONAL COMPONENT----------------------- */

const Counter = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);  
  // const showCounter = useSelector((state) => state.showCounter); // Така се достъпват ако configureStore не експортва обект от няколко Slices

  const counter = useSelector((state) => state.counter.counter);  
  const showCounter = useSelector((state) => state.counter.showCounter);
  

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    // dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: 'decrement' });
  };

  const increaseHandler = (value) => {
    dispatch(counterActions.increase(value)); // === { type: SOME_UNIQUE_IDENTIFIER, payload: value}
    // dispatch({type: 'increase', value: value})
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>Increase with 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
