import { useEffect, useState } from 'react';
import ViewPurchaseHistory from '../components/products/ViewPurchaseHistory';

const History = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://agar-ly.azurewebsites.net/account/63955272d36b1fe03d95fb76/', {
          signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setProducts(data.pHistory);
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
    <div className="flex flex-col items-center justify-center">
      <ViewPurchaseHistory products ={products}></ViewPurchaseHistory>
    </div>
  );
};

export default History;
