import { useNavigate } from 'react-router-dom';
import Card from '../../UI/card/Card';
import CardActions from '../../UI/card/CardActions';
import CardBody from '../../UI/card/CardBody';
  

const Purchase = (props) => {
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/ViewPurchaseHistory/${props.product._id}`);
  };
  return (
        <div class="cardsheroq">
        <h3 class = "Center">{props.product.Name}</h3>
        <h3>{props.product._id}</h3>
        <h3>{props.product.paymentMethod}</h3>
        <h3>{props.product.Price}</h3>
        <h5>{props.product.PropertyID} </h5>
        <img
        className="object-scale-down h-[200px]"
        src = {props.product.ImgURL}
        alt = {props.product._id}/>
            <button button onClick={OnClickHandler} class="ButtonSheroq">AccountPage</button>
      </div>
  );
};

export default Purchase;
