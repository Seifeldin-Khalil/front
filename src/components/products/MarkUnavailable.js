import { useNavigate } from 'react-router-dom';

const MarkUnavailable = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/MarkUnavailablebtn/${property._id, avail}`);
  };

  return (
    <div class="containersana">
      <div class="cardBody">
        <h1 className="font-bold">{props.product.Username}</h1>
        <h2>{props.product.Name}</h2>
        <button button onClick={OnClickHandler} class="Rbuttonsana"><h2>Approve</h2></button>
      </div>
    </div>
  );
};

export default MarkUnavailable;
