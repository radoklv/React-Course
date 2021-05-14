import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const UsersContainer = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  let content;

  if (!store.loading && !store.error) {
    content = (
      <Fragment>
        <h2>Users List</h2>
        <ul style={{ listStyle: 'none' }}>
          {store.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Fragment>
    );
  }

  if (store.loading) {
    content = <p>Loading...</p>;
  }

  if (!store.loading && store.error) {
    content = <p>{store.error}</p>;
  }

  return <div>{content}</div>;
};

export default UsersContainer;
