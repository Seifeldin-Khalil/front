import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountSummary from '.../components/products/AccountSummary';
import { useParams } from 'react-router-dom';



const DeleteAccount = (props) => {
  const [products, setProducts] = useState([]);
  const [account, setaccount] = useState([]);
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
        const response = await fetch (`http://localhost:3000/account/user/` + requestId,{
        method: 'DELETE',
        signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }else{
          navigate(`/User`);
        }
     
        setProducts(data.users);
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

export default DeleteAccount;
