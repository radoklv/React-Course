import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';

const MainNavigation = () => {
  const context = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites Meetups</Link>
            <span className={classes.badge}>{context.totalFavourites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
