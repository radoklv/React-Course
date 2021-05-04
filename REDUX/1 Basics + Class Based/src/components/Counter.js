import classes from './Counter.module.css';
import { Component } from 'react'; //For Class Based Components
import { connect } from 'react-redux'; //For Class Based Components
import { useSelector, useDispatch } from 'react-redux'; //For Functional Components

/*---------------------FUNCTIONAL COMPONENT----------------------- */

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter)

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const increaseHandler = (value) =>{
    dispatch({type: 'increase', value: value})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
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

/*---------------------CLASS BASE COMPONENT----------------------- */

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   increaseHandler(value){
//     this.props.increase(value)
//   }

//   toggleCounterHandler() {
//     this.props.toggleCounter();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {this.props.showCounter && <div className={classes.value}>{this.props.counter}</div>}
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.increaseHandler.bind(this, 5)}>Increase with 5</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   //Това е еквивалента на useSelector()
//   return {
//     counter: state.counter,
//     showCounter: state.showCounter
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   //Еквивалент на useDispatch(). Идеята е да съхранява dispatch ф-ии в props. Така че в класа да имаме props, които може да изпълним като ф-ии, които след като се изпълнят dispatch-ват action to the redux store
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//     increase: (value) => dispatch({type: 'increase', value: value}),
//     toggleCounter: () => dispatch({type: 'toggle'}) 
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
