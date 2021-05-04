import React, { useState, useEffect, useReducer, useRef } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

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

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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

    if (formIsValid) {
      props.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
      emailInputRef.current.focus(); // For more info lection 128
    }else{
      passwordInputRef.current.focus(); // For more info lection 128
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef} // For more info lection 128
          label={'Email'}
          type={'email'}
          id={'email'}
          value={emailState.value}
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          ref={passwordInputRef} // For more info lection 128
          label={'Password'}
          type={'password'}
          id={'password'}
          value={passwordState.value}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
