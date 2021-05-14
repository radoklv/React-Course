import QuoteList from '../components/quotes/QuoteList';

import DUMMY_DATA from '../DUMMY_DATA';

const Quotes = () => {
  return (
    <div>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_DATA} />
    </div>
  );
};

export default Quotes;
