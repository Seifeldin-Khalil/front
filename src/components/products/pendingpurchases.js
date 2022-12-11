import { useNavigate } from 'react-router-dom';
import Card from '../../UI/card/Card';
import CardActions from '../../UI/card/CardActions';
import CardBody from '../../UI/card/CardBody';
  
// VIEW PENDING PURCHASES
const ViewPendingPurchases = (props) => {
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/Deleted/639551a4d36b1fe03d94fb73`);
  };

  const OnClickHandler2 = () => {
    navigate(`/Deleted/639551a4d36b1fe03d94fb73`);
  };

  return (
        <div class="cardsana">
        <h3 class = "CenterBsana">{props.product.Name}</h3>

        <h3>{props.product.Description}</h3>
        <h5>{props.product.Price} EGP</h5>
        <img
        className="object-scale-down h-[200px]"
        src = {props.product.ImgURL}
        alt = {props.product.Name}/>
            <button button onClick={OnClickHandler} class="buttonsana"><h2>Approve</h2></button>
            <button button onClick={OnClickHandler2} class="buttonsana2">Decline</button>
      </div>
  );
};

export default  ViewPendingPurchases;
