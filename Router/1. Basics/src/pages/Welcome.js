import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <h3>Welcome New User</h3>
      </Route>
    </section>
  );
};
export default Welcome;
