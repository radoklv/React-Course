import { useRef, Fragment, useState } from 'react';
import { Prompt } from 'react-router-dom';
import classes from './QuoteForm.module.css';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

const QuoteForm = ({ onAdd, isLoading }) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    if (enteredAuthor === '' && enteredText === '') {
      alert('There are empty fields!');
      return;
    }

    const newQuote = {
      author: enteredAuthor,
      text: enteredText,
    };

    onAdd(newQuote);
  }

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          `Are you really wonna to go in '${location.pathname}' page? Your data will be lost!`
        }
      />
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={formFocusedHandler}
        >
          {isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishEnteringHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
