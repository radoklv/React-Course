import { Fragment } from 'react';
import { useParams, Route, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import DUMMY_DATA from '../DUMMY_DATA';

const QuotesDetails = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.id);

  if (!quote) {
    return <p>No Quote found!</p>;
  }
  return (
    <Fragment>
      <h2>Quote Details</h2>

      <HighlightedQuote quote={quote} />

      <Route path={`/quotes/${params.id}`} exact>
        <div className="centered">
          <Link to={`/quotes/${params.id}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.id}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
