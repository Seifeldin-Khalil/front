import { useNavigate } from 'react-router-dom';

const viewPurchaseHistory = (props) => {
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/viewHistory/${props.product._id}`);
  };

  return (
    <div class="containersheroq">
      <div class="cardBody">
        <h1 className="font-bold">{props.product.userId}</h1>
        <h2>{props.product.Name}</h2>
        <button button onClick={OnClickHandler} class="HistoryButton"><h2>viewHistory</h2></button>
      </div>
    </div>
  );
};

export default viewPurchaseHistory;
