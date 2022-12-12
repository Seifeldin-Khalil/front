// import { useEffect, useState } from 'react';
// import ProductsList from '../components/users/UserList';
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const ViewPendingPurchases = () => {
//     const [MakePayment, setPayment] = useState([]);
//     const navigate = useNavigate();
//     const params = useParams();
//     const UserID = params.UserID;
//     const [isLoading, setIsLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchAbortController = new AbortController();
//       const fetchSignal = fetchAbortController.signal;
  
//       const fetchPayment= async () => {
//         try {
//           const response = await fetch(`http://localhost:3000/Purchase/MyP/` + UserID,{
//               method: 'GET',
//               signal: fetchSignal
//           });
//           const data = await response.json();
  
//           if (!response.ok) {
//             throw Error(data.error);
//           }
  
//           setPayment(data.mine);
//           setIsLoading(false);
//         } catch (err) {
//           console.log(err.message);
//         }
//       };
  
//       fetchPayment();
  
//       return () => {
//         fetchAbortController.abort();
//       };
//     }, []);
  
//     if (isLoading) {
//       return <p>Please wait while we are loading data...</p>;
//     }
  
//     return (
//       <div className="flex flex-col items-center justify-center">
//        { <ProductsList products={products} />}
//       </div>
//     );
//   };
//   export default ViewPendingPurchases;