import { useNavigate } from 'react-router-dom';
import Card from '../../UI/card/Card';
import CardActions from '../../UI/card/CardActions';
import CardBody from '../../UI/card/CardBody';
  

const MyPropSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/Deleted/${props.product._id}`);
  };

  const OnClickHandler1 = () => {
    navigate(`/EditProperty/${props.product._id}`);
  };

  return (
        <div class="cardsama">
        <h3 class = "Center">{props.product.Name}</h3>
        <h3>{props.product.Description}</h3>
        <h5>{props.product.Price} EGP</h5>
        <img
        className="object-scale-down h-[200px]"
        src = {props.product.ImgURL}
        alt = {props.product.Name}/>
            <button button onClick={OnClickHandler1} class="buttonsama">Edit</button>
            <button button onClick={OnClickHandler} class="buttonsama2">Delete</button>
      </div>
  );
};

export default MyPropSummary;
