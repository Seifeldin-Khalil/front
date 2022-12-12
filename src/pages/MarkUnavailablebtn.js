import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsList from '../components/users/UserList';
import { useParams } from 'react-router-dom';

const MarkUnavailablebtn = (props) => {


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
        
        const response = await fetch (`https://agar-ly.azurewebsites.net/Purchase/edit/n${requestId}` + requestId,{
        method: 'PUT',
        signal: fetchSignal
        });
       
        const data = await response.json();

         
        if (!response.ok) {
          throw Error(data.error);
        }else{
          navigate(`/ViewPendingPurchases`);
        }
        

        
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
     { <ProductsList products={products} />}
    </div>
  );
};

export default MarkUnavailablebtn;
