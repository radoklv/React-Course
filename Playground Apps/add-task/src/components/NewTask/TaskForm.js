import {useRef} from 'react';
import classes from './TaskForm.module.css';

const TaskForm = ({onSubmitForm, isLoading}) => {
  const text = useRef();

  const formSubmitHandler = (e) =>{
    e.preventDefault();
    onSubmitForm(text.current.value.trim())
  }

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <input type='text' ref={text} />
      <button>{isLoading ? 'Loading...' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
