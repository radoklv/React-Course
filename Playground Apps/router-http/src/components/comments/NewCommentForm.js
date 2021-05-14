import { useRef, useEffect } from 'react';
import classes from './NewCommentForm.module.css';
import useHttp from '../../hooks/useHttp';
import { addComment } from '../../api/api';

import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = ({ onAddedComment, quoteId }) => {
  const { sendRequest, data: id, status, error } = useHttp();
  const commentTextRef = useRef();

  useEffect(() => {
    if (status === 'completed') {
      onAddedComment();
    }
  }, [onAddedComment, status]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const comment = commentTextRef.current.value.trim();

    if (comment.length === 0) {
      return;
    }

    const newComment = {
      comment: { text: comment },
      id: quoteId,
    };

    sendRequest(newComment, addComment);
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
