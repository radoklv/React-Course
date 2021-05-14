import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://angular-b8cd9.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data');
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Fetching cart data failed',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://angular-b8cd9.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed!');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Send cart data successfully',
        })
      );
    } catch (error) {
      sendCartData().catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: error.message,
          })
        );
      });
    }
  };
};
