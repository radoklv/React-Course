import { useState, useEffect, useCallback } from 'react';
import classes from './Comments.module.css';
import { useParams } from 'react-router-dom';
import { getAllComments } from '../../api/api';
import useHttp from '../../hooks/useHttp';

import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const { sendRequest, data: comments, status, error } = useHttp();
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  let commentsContent;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendRequest(params.id, getAllComments);
  }, [sendRequest, params.id]);

  const addedCommentHandler = useCallback(() => {
    sendRequest(params.id, getAllComments);
  },[sendRequest, params.id]);

  if (status === 'pending') {
    commentsContent = <LoadingSpinner />;
  }
  if (error) {
    commentsContent = <p className="centered focused">{error}</p>;
  }

  if (status === 'completed' && (!comments || comments.length === 0)) {
    commentsContent = (
      <h3 className="centered focused">There is no comments.</h3>
    );
  }

  if (status === 'completed' && !error && (comments || comments.length > 0)) {
    commentsContent = <CommentsList comments={comments} />;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          onAddedComment={addedCommentHandler}
          quoteId={params.id}
        />
      )}
      {commentsContent}
    </section>
  );
};

export default Comments;
