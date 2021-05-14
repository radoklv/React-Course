import { Fragment, useEffect } from 'react';
import { useRouteMatch, Route, Link } from 'react-router-dom';
import useHttp from '../hooks/useHttp';
import { getSingleQuote } from '../api/api';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDeatils = () => {
  const { sendRequest, data: quote, status, error } = useHttp(true);
  const route = useRouteMatch();
  const id = route.params.id;

  useEffect(() => {
    sendRequest(id, getSingleQuote);
  }, [sendRequest, id]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote quote={quote} />
      <Route path={route.path} exact>
        <div className="centered">
          <Link className="btn" to={`${route.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`${route.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDeatils;
