import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions';

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  const dispatch = useDispatch();


  const byuCakeHandler = () =>{
    dispatch(buyCake())
  }
  return (
    <div>
      <h2>(HooksCakeContainer) Number of cakes - {numOfCakes}</h2>
      <button onClick={byuCakeHandler}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
