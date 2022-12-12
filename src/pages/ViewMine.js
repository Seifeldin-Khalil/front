import { useEffect, useState } from 'react';
import MyPropSummary from '../components/products/ProductsListcopy';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ViewMine = () => {
  // let's define a state for products
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;
  // let's define a state for loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        // send an HTTP GET request to the get products route we defined in our Express REST API
        const response = await fetch(`https://agar-ly.azurewebsites.net/properties/all/` + userId,{
            method: 'GET',
            signal: fetchSignal
        });
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          // remember, in our REST API we return an error message in our response that has the key 'error'.
          throw Error(data.error);
        }

        // we now need to set our component state to the products we fetched
        setProducts(data.mine);
        // after we set the products' state, let's set the loading state to false
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
      <a href="/AddProperty">
            <button class="buttonsama1"><h2>Add a Property</h2></button>
      </a>
      <MyPropSummary products={products} />
    </div>
  );
};
export default ViewMine;