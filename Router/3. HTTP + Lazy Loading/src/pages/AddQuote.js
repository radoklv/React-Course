import { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const AddQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === 'completed') {
      console.log(status);
      history.replace('/quotes');
    }
  }, [status, history]);
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
};

export default AddQuote;
