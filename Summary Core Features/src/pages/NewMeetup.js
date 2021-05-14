import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';

import LoadingSpinner from '../components/ui/LoadingSpinner';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const history = useHistory();
  const { isLoading, error, sendRequest } = useHttp();

  const onFormSubmitHandler = (meetups) => {
    sendRequest(
      'https://angular-b8cd9.firebaseio.com/meetups.json',
      'POST',
      meetups
    ).then(() => {
      history.replace('/');
    });
  };

  if (error) {
    alert(error);
  }

  return (
    <div>
      <h1>Add NewMeetup</h1>
      {isLoading && <LoadingSpinner />}
      <NewMeetupForm submitForm={onFormSubmitHandler} />
    </div>
  );
};

export default NewMeetup;
