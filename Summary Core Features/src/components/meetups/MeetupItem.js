import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';

import Card from '../../components/ui/Card';

const MeetupItem = ({ meetup }) => {
  const { id, image, title, address, description } = meetup;
  const context = useContext(FavouritesContext);

  const isFavourite = context.itemIsFavourite(id);

  const toggleFavouriteHandler = () => {
    if (isFavourite) {
      context.removeFavourite(id);
    } else {
      context.addFavourite({
        id,
        image,
        title,
        address,
        description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteHandler}>
            {isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
