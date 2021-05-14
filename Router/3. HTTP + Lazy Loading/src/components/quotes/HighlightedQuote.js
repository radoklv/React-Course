import classes from './HighlightedQuote.module.css';
import { useParams, useHistory } from 'react-router-dom';
import useHttps from '../../hooks/use-http';
import { removeQuoteWithConnectedComments } from '../../lib/api';
import { useEffect } from 'react';

const HighlightedQuote = ({quote}) => {
  const params = useParams();
  const history = useHistory();
  const { sendRequest, data, status, error } = useHttps(removeQuoteWithConnectedComments);

  useEffect(() => {
    if(status === 'completed' && !error){
      history.replace('/quotes')
    }
  }, [status, error, history])

  const deleteQuoteHandler = () => {
    if (!window.confirm('Are you really want to delete this Quote?')) {
      return;
    }

    sendRequest(params.id);
  };
  return (
    <figure className={classes.quote}>
      <p>{quote.text}</p>
      <figcaption>{quote.author}</figcaption>
      <button className={classes.delete} onClick={deleteQuoteHandler}>
        X
      </button>
    </figure>
  );
};

export default HighlightedQuote;
