import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

const ItemContainer = (props) => {
  return (
    <div>
      <h2>
        (ItemContainer{' '}
        {props.cake ? <span>with props</span> : <span>without props</span>})Item
        - {props.item}
      </h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFn = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
