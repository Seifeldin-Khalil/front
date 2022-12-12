import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';
//import AccountSummary from '.../components/products/AccountSummary';

const AccountPage = (props) => {
  const navigate = useNavigate();
    const { Submit,formState } = useForm();



  const OnClickHandlertwo = () => {
    navigate(/Deleted/); ///Database

   
  };
  
    return (
      <form

      >
        <TextInput
          label="Name"
          type="text"
          name="Name"
          Submit={Submit}
          validation={{ required: true }}
        />
        {formState.errors.name && (
          <FormInputError>Name must not be empty</FormInputError>
        )}

        <TextInput
          label="UserName"
          type="text"
          name="Username"
          Submit={Submit}
          validation={{ required: true }}
        />
        {formState.errors.username && (
          <FormInputError>Username must not be empty.</FormInputError>
        )}

        <TextInput
          label="Password"
          type="password"
          name="Password"
          Submit={Submit}
          validation={{ required: true }}
        />
        {formState.errors.password && (
          <FormInputError>Password must not be empty.</FormInputError>
        )}


    <div class="containersheroq">
      <div class="cardBody">
        <h1 className="font-bold">{props.account.UserName}</h1>
        <h2 className="font-bold">{props.account.Password}</h2>
        <h3 className="font-bold">{props.account.Name}</h3>
        <h4>{props.product.UserId}</h4>
        <button onClick={OnClickHandlertwo} className="DeleteButtonSheroq"><h2>DeleteAccount</h2></button>

      </div>
    </div>
    </form>
  );
};
export default AccountPage;