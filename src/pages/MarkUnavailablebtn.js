import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MarkUnavailablebtn = (props) => {
  // let's define a state for products

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
        
        const response = await fetch (`http://localhost:3000/Purchase/edit/n${requestId}` + requestId,{
        method: 'PUT',
        signal: fetchSignal
        });
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          throw Error(data.error);
        }else{
          navigate(`/MarkUnavailable`);
        }
        

        // we now need to set our component state to the products we fetched
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
  }, [requestId, navigate]);

  if (isLoading) {
    return <p>Please wait while we are loading data...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <PendingList products={products}/> */}
    </div>
  );
};

export default MarkUnavailablebtn;
