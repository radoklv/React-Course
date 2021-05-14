import { useRef, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = ({onAddedComment, quoteId}) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef();

  useEffect(() => {
    if(status === 'completed' && !error){
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const comment = commentTextRef.current.value.trim();

    if (comment.length === 0) {
      return;
    }

    sendRequest({ commentData: { text: comment }, quoteId: quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
