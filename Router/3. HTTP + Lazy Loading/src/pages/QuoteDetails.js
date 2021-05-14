import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuotesDetails = () => {
  const route = useRouteMatch();
  const params = useParams();
  const { sendRequest, data: quote, error, status } = useHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(params.id);
  }, [sendRequest, params.id]);

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

  if (!quote.text) {
    return <p>No Quote Found!</p>;
  }

  return (
    <Fragment>
      <h2>Quote Details</h2>

      <HighlightedQuote quote={quote} />

      <Route path={route.path} exact>
        <div className="centered">
          <Link to={`${route.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${route.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
