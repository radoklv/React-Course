import { FETCH_USERS_REQUEST } from './userTypes';
import { FETCH_USERS_SUCCESS } from './userTypes';
import { FETCH_USERS_FAILURE } from './userTypes';

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    const sendRequest = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      const data = await response.json();
      dispatch(fetchUserSuccess(data));
    };

    sendRequest().catch((err) => {
      dispatch(fetchUserFailure(err.message));
    });
  };
};
