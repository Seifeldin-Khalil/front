import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import FormInputError from '../UI/form/FormInputError';
import TextInput from '../UI/form/TextInput';
import { useParams } from 'react-router-dom';

const MakeNewPayment = () => {
  const { register, handleSubmit, formState } = useForm();
  const params = useParams();

  const propId = params.propId;

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('https://agar-ly.azurewebsites.net/Purchase' + propId, {
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
        name="PaymentMethod"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.PaymentMethod && (
        <FormInputError>Payment Method is required</FormInputError>
      )}

      <TextInput
        label="price"
        type="text "
        name="Price"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.price && (
        <FormInputError>price must not be empty.</FormInputError>
      )}

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