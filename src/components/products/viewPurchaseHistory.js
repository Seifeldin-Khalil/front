import { useNavigate } from 'react-router-dom';
import History from '../components/pages/ViewPurchase';

const viewPurchaseHistory = (props) => {
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/History/${props.product.userId}`);
  };

  return (
    <div class="containersheroq">
      <div class="cardBody">
        <h1 className="font-bold">{props.product.userId}</h1>
        <h2>{props.product.pHistory}</h2>
        <button button onClick={OnClickHandler} class="HistoryButton"><h2>History</h2></button>
      </div>
    </div>
  );
};

export default viewPurchaseHistory;

