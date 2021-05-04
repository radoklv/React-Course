import React from 'react';
import ReactDOM from 'react-dom';
import { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import AppContext from '../../store/app-context';
import CartItem from './CartItem.js';

const Cart = ({ onClose }) => {
  const context = useContext(AppContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let localTotal = 0;
    context.cart.forEach((el) => {
        localTotal += el.price * el.quantity;
    });

    setTotal(localTotal.toFixed(2));
  }, [context.cart]);

  const Backdrop = ({ onClose }) => {
    return <div className={styles.backdrop} onClick={onClose}></div>;
  };

  const CartBody = ({ cart, onConfirm, onClose }) => {
    return (
      <div className={styles.cart}>
        <div className={styles['cart-body']}>
          {context.cart.length !== 0 ? (
            <ul>
              {cart.map((el) => {
                return <CartItem key={el.id} item={el}></CartItem>;
              })}
            </ul>
          ) : (
            <h4>No items in cart</h4>
          )}
        </div>
        <div className={styles['cart-actions']}>
          <div>Total: {total} $</div>
          <div>
            <button onClick={onClose}>Close</button>
            <button>Send</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose}></Backdrop>,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CartBody onClose={onClose} cart={context.cart}></CartBody>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Cart;
