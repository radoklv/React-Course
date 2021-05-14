import { createContext, useState } from 'react';

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (object) => {},
  removeFavourite: (id) => {},
  itemIsFavourite: (id) => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    setUserFavourites((oldState) => {
      return oldState.concat(favouriteMeetup);
    });
  };

  const removeFavouriteHandler = (id) => {
    setUserFavourites((oldState) => {
      return oldState.filter((meetup) => meetup.id !== id);
    });
  };

  const itemIsFavouriteHandler = (id) => {
    return userFavourites.some((meetup) => meetup.id === id);
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
