import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import DUMMY_DATA from '../DUMMY_DATA';

const QuotesDetails = () => {
  const route = useRouteMatch();
  const params = useParams();

  console.log(route)

  const quote = DUMMY_DATA.find((quote) => quote.id === params.id);

  if (!quote) {
    return <p>No Quote found!</p>;
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
