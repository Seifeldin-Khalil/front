import { useEffect, useState } from 'react';
import ViewPurchaseHistory from '../components/products/viewPurchaseHistory';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ViewHistory = () => {
  const [account, setaccount] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchHistory= async () => {
      try {
        const response = await fetch(`http://localhost:3000/account/all/` + userId,{
            method: 'GET',
            signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setaccount(data.History);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchHistory();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Please wait while we are loading data...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <ViewPurchaseHistory account={account} />
    </div>
  );
};
export default ViewHistory;