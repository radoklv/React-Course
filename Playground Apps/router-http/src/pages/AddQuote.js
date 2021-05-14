import { useEffect } from 'react';
import useHttp from '../hooks/useHttp';
import { addQuote } from '../api/api';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp();

  useEffect(() => {
    if (status === 'completed') {
      history.replace('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote, addQuote);
  };

  return <QuoteForm onAdd={addQuoteHandler} isLoading={status === 'pending'} />;
};

export default AddQuote;
