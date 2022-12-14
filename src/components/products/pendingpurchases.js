import { useNavigate } from 'react-router-dom';

  
// VIEW PENDING PURCHASES
const ViewPendingPurchases = (props) => {
  const navigate = useNavigate();

  const OnClickHandler = async() => {
    try {
        
      const response = await fetch (`https://agar-ly.azurewebsites.net/Purchase/edit/${props.product._id}`, {
      method: 'PUT',
      signal: fetchSignal
      });
      // parse the response content to JSON and store it into data variable
      const data = await response.json();

      // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
      if (!response.ok) {
            ///error 
        throw Error(data.error);
      }else{
//navigate or message

      }
      

      // we now need to set our component state to the products we fetched
      // after we set the products' state, let's set the loading state to false
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };


  
  const OnClickHandler2 = async() => {
    try {
        
      const response = await fetch (`https://agar-ly.azurewebsites.net/MyP/:userId${props.product._id}`, {
      method: 'PUT',
      signal: fetchSignal
      });
      // parse the response content to JSON and store it into data variable
      const data = await response.json();

      // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
      if (!response.ok) {
        throw Error(data.error);
        console.log(data);
      }else{

        console.log(err.message);

      }
      

      
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
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
