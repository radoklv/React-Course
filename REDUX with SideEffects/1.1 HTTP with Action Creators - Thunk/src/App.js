import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData } from './store/cart-actions';
import { fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) { // За повече инфо лекция 260
      dispatch(sendCartData(cart)); // Това е къстъм Action
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && <Notification notification={notification} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
