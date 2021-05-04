import React, { useState, useEffect, useReducer } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (lastState, action) => {
  if (action.type === 'ON_CHANGE') {
    return { value: action.value, isValid: action.value.includes('@') };
  }
  if (action.type === 'ON_BLUR') {
    return { value: lastState.value, isValid: lastState.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (lastState, action) => {
  if (action.type === 'ON_CHANGE') {
    return { value: action.value.trim(), isValid: action.value.length > 5 };
  }
  if (action.type === 'ON_BLUR') {
    return {
      value: lastState.value,
      isValid: lastState.value.trim().length > 5,
    };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', // Този обект който се подава като 2ри аргумент е initial state value
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  /**
   * Object destructuring with alias assignment
   */
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'ON_CHANGE', value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'ON_CHANGE', value: event.target.value.trim() });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'ON_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'ON_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
