import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>(IceCreamContainer ) Number of Ice Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
