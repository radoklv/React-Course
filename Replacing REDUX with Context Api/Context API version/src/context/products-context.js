import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ]);

  const toggleFavourite = (id) => {
    const productIndex = productsList.findIndex((product) => {
      return product.id === id;
    });

    const newFavStatus = !productsList[productIndex].isFavorite;
    const updatedProductsList = [...productsList];
    updatedProductsList[productIndex]= {
        ...productsList[productIndex],
        isFavorite: newFavStatus
    }
    
    setProductsList(updatedProductsList)
    
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavourite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
