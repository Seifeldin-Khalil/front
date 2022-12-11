import { useNavigate } from 'react-router-dom';
  

const AccountSummary = (props) => {
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/user/${props.product._id}`);
  };
  

  return (
    <div class="containersheroq">
      <div class="cardBody">
        <h1 className="font-bold">{props.product.Name}</h1>
        <h2 className="font-bold">{props.product.username}</h2>
        <h2 className="font-bold">{props.product.Password}</h2>

        <h4>{props.product.Description}</h4>
        <button onClick={OnClickHandler} className="DeleteButtonSheroq"><h2>DeleteAccount</h2></button>
      </div>
    </div>
  );
};

export default AccountSummary;