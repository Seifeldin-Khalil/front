import { useEffect, useState } from 'react';
import ProductsList from '../components/products/ProductsList';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  
  // let's define a state for loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/properties/all', {
          signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setProducts(data.properties);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Please wait while we are loading data...</p>;
  }
  return (
    <div>
      <button class="buttonsama1"><h2>My properties</h2></button>
      <ProductsList products={products} />
    </div>
  );
};

export default HomePage;
