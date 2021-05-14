import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

const Quotes = () => {
  const { sendRequest, status, data: quotes, error } = useHttp(
    getAllQuotes,
    true
  );

  console.log(quotes);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status === 'completed' && (!quotes || quotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <div>
      <h1>All Quotes</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
};

export default Quotes;
