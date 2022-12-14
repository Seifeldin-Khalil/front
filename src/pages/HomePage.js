import { useEffect, useState } from 'react';
import ProductsList from '../components/products/ProductsList';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/authContext';
import React, { useContext } from 'react';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  // let's define a state for loading
  const [isLoading, setIsLoading] = useState(true);
  const authContext = useContext(AuthContext);

  //const ID = authContext.id;

  const ID =  '63969db4feed3771d7a5ee0b';
  const navigate = useNavigate();

  const viewBtnHandler = () => {
    navigate(`/viewmine/${ID}`);

};
  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://agar-ly.azurewebsites.net/properties/all', {
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
    <button class="buttonsama1" onClick = {viewBtnHandler}>My properties</button>
      <ProductsList products={products} />
      
    </div>
  );
};

export default HomePage;
