import { useEffect } from 'react';
import useHttp from '../hooks/useHttp';
import { getAllQuotes } from '../api/api';

import Card from '../components/UI/Card';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = () => {
  const { sendRequest, data: quotes, status, error } = useHttp(true);
  useEffect(() => {
    sendRequest(null, getAllQuotes);
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />;
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === 'completed' && !error && (!quotes || quotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <Card>
      <QuoteList quotes={quotes}></QuoteList>
    </Card>
  );
};

export default AllQuotes;
