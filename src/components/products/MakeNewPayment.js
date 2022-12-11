import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const MakeNewPayment = () => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/auth/signin', {//////
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      // invoke the login function in our auth context
      authContext.login(data.userId, data.username, data.jwt);///////

      // navigate to the home page
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextInput
        label="PaymentMethod"
        type="text"
        name="Paymentmethod"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.PaymentMethod && (
        <FormInputError>Payment Method is required</FormInputError>
      )}

      <TextInput
        label="price"
        type="text "
        name="price"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.price && (
        <FormInputError>price must not be empty.</FormInputError>
      )}

    <TextInput
        label="Description"
        type="text "
        name="Description"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.Description && (
        <FormInputError>Description must not be empty.</FormInputError>
      )}
    
    <TextInput
        label="Description"
        type="text "
        name="Description"
        register={register}
        validation={{ required: true }}
      />
      






      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Pay 
      </button>
    </form>
  );
};

export default MakeNewPayment;
