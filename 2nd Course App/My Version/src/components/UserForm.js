import { useState } from 'react';
import Modal from './Modal';

const UserForm = ({ onAdd }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const resetErrorHandler = () => {
    setError('');
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (age < 0) {
      setError('Age must be positive number!');
      return;
    } else if (username == '' && age !== 0) {
      setError('There are emtpy fields');
      return;
    }

    const newUser = {
      id: new Date().toISOString,
      username,
      age: +age
    };

    onAdd(newUser);
    setUsername('');
    setAge('');
  };

  return (
    <div className="app_form my-5">
      {error && <Modal onClear={resetErrorHandler}>{error}</Modal>}

      <form className="wrapper" onSubmit={submitFormHandler}>
        <div className="form_control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />
        </div>

        <div className="form_control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" className="form_btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default UserForm;
