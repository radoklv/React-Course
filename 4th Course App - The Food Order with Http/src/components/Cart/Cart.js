import { useContext, useState, Fragment } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import useHttp from '../../hooks/use-http';

const Cart = ({ onHideCart }) => {
  const context = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { sendRequest, isLoading, error } = useHttp();

  const tatalAmunt = `$${context.totalAmount.toFixed(2)}`;
  const hasItems = context.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    context.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    context.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const onConfirm = (userData) => {
    sendRequest({
      url: 'https://angular-b8cd9.firebaseio.com/orders.json',
      method: 'POST',
      body: { orderedItems: context.items, userData },
    }, () =>{setIsConfirmed(true); context.resetCart()});
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={onHideCart}>
        Cancel
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  let content = (
    <Fragment>
      {' '}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{tatalAmunt}</span>
      </div>
      {isCheckout && <Checkout onCancel={onHideCart} onConfirm={onConfirm} />}
      {!isCheckout && modalActions}
    </Fragment>
  );

  if (isLoading) {
    content = <h2>Loading...</h2>;
  }

  if (error) {
    content = <h2>{error}</h2>;
  }

  if(isConfirmed){
    content = <h2>Order is completed successfully :)</h2>
  }

  return <Modal onHideCart={onHideCart}>{content}</Modal>;
};

export default Cart;
