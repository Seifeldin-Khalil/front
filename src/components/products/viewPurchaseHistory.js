import { useNavigate } from 'react-router-dom';
import Purchase from '..products/Purchase';


const ViewPurchaseHistory = (props) => {
  const navigate = useNavigate();
  const Purchase = (props) => {
    return (
      <div>
        {props.products.map((p) => (
          <Purchase product={p} key={p._id} />
        ))}
      </div>
    );
  };
  
};

export default ViewPurchaseHistory;

