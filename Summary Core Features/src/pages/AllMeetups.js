import MeetupList from '../components/meetups/MeetupList';
import { useEffect } from 'react';
import useHttp from '../hooks/use-http';

import LoadingSpinner from '../components/ui/LoadingSpinner';

const AllMeetups = () => {
  const { data: meetups, isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest('https://angular-b8cd9.firebaseio.com/meetups.json');
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>AllMeetups Pages</h1>
      {isLoading && <LoadingSpinner />}
      <MeetupList meetups={meetups} />
    </div>
  );
};

export default AllMeetups;
