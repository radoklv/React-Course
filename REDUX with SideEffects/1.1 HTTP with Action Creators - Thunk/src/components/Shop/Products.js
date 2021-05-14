import ProductItem from './ProductItem';
import classes from './Products.module.css';

import { useSelector } from 'react-redux';

const Products = () => {
  const stocks = useSelector((state) => state.stock.stocks);

  let stockList = <h2>There is no stocks</h2>;

  if (stocks) {
    stockList = (
      <ul>
        {stocks.map((stock) => {
          return <ProductItem stock={stock} key={stock.id} />;
        })}
      </ul>
    );
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      {stockList}
    </section>
  );
};

export default Products;
