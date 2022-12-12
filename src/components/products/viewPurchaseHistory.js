import { useNavigate } from 'react-router-dom';

const ViewPurchaseHistory = (props) => {
  const navigate = useNavigate();

  ///map // compo>> purchase

  return (
    <div class="containersheroq">
      <div class="cardBody">
        <h1 className="font-bold">{props.product.userId}</h1>
        <h2>{props.product.pHistory}</h2>
      </div>
    </div>
  );
};

export default ViewPurchaseHistory;

