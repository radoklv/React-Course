import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return (
    <section className="page">
      <h1>Product {id}</h1>
    </section>
  );
};

export default Product;
