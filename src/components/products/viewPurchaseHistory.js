import { useNavigate } from 'react-router-dom';
import Cardsheroq from '../../UI/card/Card';


const ViewPurchaseHistory = (History) => {


  

  return (
        <div class="cardsheroq">
        <h3 class = "Center">{History.viewPurchaseHistory.Purchase}</h3>
        <h3>{History.viewPurchaseHistory.PaymentMethod}</h3>
        <h3>{History.viewPurchaseHistory.Price} </h3>
        <h3>{History.viewPurchaseHistory.Description} </h3>
      </div>
  );
};

export default ViewPurchaseHistory;