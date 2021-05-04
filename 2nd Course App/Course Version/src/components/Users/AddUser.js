import { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  const enteredUsername = useRef();
  const enteredAge = useRef();
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value.trim());
  // };

  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value.trim());
  // };

  const errorHandler = () =>{
    setError(null);
  }

  const addUserHandler = (e) => {
    e.preventDefault();

    const username = enteredUsername.current.value.trim();
    const age = enteredAge.current.value.trim();

    if (username.length === 0 && age.length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non empty values)'
      })
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)'
      })
      return;
    }

    const newUser = {
      id: new Date().toISOString(),
      username: username,
      age: +age,
    };

    onAddUser(newUser);
    // setEnteredUsername('');
    // setEnteredAge('');
    enteredUsername.current.value = '';
    enteredAge.current.value = '';
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={enteredUsername}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
