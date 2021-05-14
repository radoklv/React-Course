import { useState, useEffect, useCallback } from 'react';
import classes from './Comments.module.css';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';

import NewCommentForm from './NewCommentForm';
import LoadingSpinned from '../UI/LoadingSpinner';
import CommentList from './CommentsList';

const Comments = () => {
  const params = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(params.id);
  }, [params.id, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(params.id);
  }, [sendRequest, params.id]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinned />
      </div>
    );
  }

  if (status === 'completed' && (loadedComments || loadedComments.length > 0)) {
    comments = <CommentList comments={loadedComments} />;
  }
  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet!</p>;
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
      {comments}
    </section>
  );
};

export default Comments;
