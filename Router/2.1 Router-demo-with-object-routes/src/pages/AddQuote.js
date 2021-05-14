import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';

const AddQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.table(quoteData);

    history.replace('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
