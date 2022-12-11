import { data } from 'autoprefixer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
//import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../UI/form/TextInput';


const AddPropertyForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/properties/post', {
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

      console.log(formData);
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
        label="Name"
        type="text"
        name="Name"
        register={register}
        validation={{ required: true }}
      />
      {/* {formState.errors.Name && (
        <FormInputError>Name must not be empty</FormInputError>
      )} */}

      <TextInput
        label="Description"
        type="text"
        name="Description"
        register={register}
        validation={{ required: true }}
      />
      {/* {formState.errors.Description && (
        //<FormInputError>Description must not be empty.</FormInputError>
      )} */}

    <TextInput
        label="Price"
        type="number"
        name="Price"
        register={register}
        validation={{ required: true }}
      />
      {/* {formState.errors.Price && (
        //<FormInputError>Price must not be empty.</FormInputError>
      )} */}

      <TextInput
        label="ImgURL"
        type="text"
        name="ImgURL"
        register={register}
        validation={{ required: true }}
      />
      {/* {formState.errors.ImgURL && (
       // <FormInputError>ImgURL must not be empty.</FormInputError>
      )} */}
      <a href="/">
      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add Property
      </button>
      </a>
    </form>
  );
};

export default AddPropertyForm;
