import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { Fragment } from 'react';
import { uiActions } from './store/ui-slice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data',
        })
      );
      const response = await fetch(
        'https://angular-b8cd9.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed!');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Send cart data successfully',
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    });
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
