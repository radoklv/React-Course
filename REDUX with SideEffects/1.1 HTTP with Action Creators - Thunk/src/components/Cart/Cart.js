import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  let cartList = <h2>No Items in the cart!</h2>;

  if (items) {
    cartList = (
      <Fragment>
        <h2>Your Shopping Cart</h2>
        <ul>
          {items.map((item) => {
            return <CartItem item={item} key={item.id}/>;
          })}
        </ul>
      </Fragment>
    );
  }

  return (
    <Card className={classes.cart}>
      {cartList}
    </Card>
  );
};

export default Cart;
