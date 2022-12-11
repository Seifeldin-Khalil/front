import { useNavigate } from 'react-router-dom';

const Refund = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/RefundBtn/${props.product._id}`);
  };

  return (
    <div class="containerseif">
      <div class="cardBody">
        <h1 className="font-bold">{props.product.Username}</h1>
        <h2>{props.product.Name}</h2>
        <button button onClick={OnClickHandler} class="banbuttonseif"><h2>Decline</h2></button>
      </div>
    </div>
  );
};

export default Refund;
