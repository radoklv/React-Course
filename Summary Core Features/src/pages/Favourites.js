import { useContext } from 'react';
import FavouritesContext from '../store/favourites-context';

import MeetupList from '../components/meetups/MeetupList';

const Favourites = () => {
  const context = useContext(FavouritesContext);

  if (context.favourites.length === 0) {
    return <h2>There is no Favourite places</h2>;
  }

  return (
    <div>
      <h1>Favourites Pages</h1>
      <MeetupList meetups={context.favourites} />
    </div>
  );
};

export default Favourites;
