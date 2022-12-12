import { useEffect, useState } from 'react';
import PendingList from '../components/products/PendingList';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ViewUsersUpdatedDeleted = (props) => {
  // let's define a state for products
  const [products, setProducts] = useState([]);

  // let's define a state for loading
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();
  const requestId = params.id;

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      console.log(requestId);
      try {
        // send an HTTP GET request to the get products route we defined in our Express REST API
        const response = await fetch (`https://agar-ly.azurewebsites.net/administration/userDelete/` + requestId,{
        method: 'DELETE',
        signal: fetchSignal
        });
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          throw Error(data.error);
        }else{
          navigate(`/viewusers`);
        }
        

        // we now need to set our component state to the products we fetched
        setProducts(data.users);
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
      {/* <PendingList products={products}/> */}
    </div>
  );
};

export default ViewUsersUpdatedDeleted;
