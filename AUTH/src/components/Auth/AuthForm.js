import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email.includes('@') || password.length === '') {
      return;
    }

    setIsLoading(true);
    let url;

    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-orlybTIjU-wvOB2VsWLqUu07W0DGCAg';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-orlybTIjU-wvOB2VsWLqUu07W0DGCAg';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date( // Сетванме Date оbject който е равен на текущото време + 1час
          new Date().getTime() + +data.expiresIn * 1000
        );

        authCtx.login(data.idToken, expirationTime);
        history.replace('/');
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={sumbitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
