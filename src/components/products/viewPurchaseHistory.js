import { useNavigate } from 'react-router-dom';
import Cardsheroq from '../../UI/card/Card';


const ViewPurchaseHistory = (History) => {

  const navigate = useNavigate();

  

  return (
        <div class="cardsheroq">
        <h3 class = "Center">{History.viewPurchaseHistory.Purchase}</h3>
        <h3>{History.viewPurchaseHistory.PaymentMethod}</h3>
        <h3>{History.viewPurchaseHistory.PaidAmount}  1000000 EGP</h3>
        <h3>{History.viewPurchaseHistory.Description} Pent House </h3>


        <h3>{History.viewPurchaseHistory.PaymentMethod}</h3>
        <h3>{History.viewPurchaseHistory.PaidAmount}  2000000 EGP</h3>
        <h3>{History.viewPurchaseHistory.Description} Twin House </h3>

        <h3>{History.viewPurchaseHistory.PaymentMethod}</h3>
        <h3>{History.viewPurchaseHistory.PaidAmount}  3000000 EGP</h3>
        <h3>{History.viewPurchaseHistory.Description} Villa </h3>


        <img
        className="object-scale-down h-[200px]"
        src = {History.account.ImgURL}
        alt = {History.viewPurchaseHistory.pHistory}/>
           
      </div>
  );
};

export default ViewPurchaseHistory;
