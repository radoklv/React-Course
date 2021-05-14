import { useRef } from 'react';
import classes from './ProfileForm.module.css';

const ProfileForm = ({ onChange }) => {
  const newPassInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const password = newPassInputRef.current.value.trim();

    if (password.length < 6) {
      alert('Password have to be at least 6 characters long');
      return;
    }

    onChange(password);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPassInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
