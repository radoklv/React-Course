import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.id}</p>
    </section>
  );
};

export default ProductDetails;
