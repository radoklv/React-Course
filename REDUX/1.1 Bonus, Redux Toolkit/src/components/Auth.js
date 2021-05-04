import classes from './Auth.module.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux'; //For Functional Components
import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();

  const emailValue = useRef();
  const passwordValue = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailValue.current.value.trim();
    const password = passwordValue.current.value.trim();

    if (email.includes('@') && password.length >= 5) {
      dispatch(authActions.login());
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailValue} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordValue} />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
