import { data } from 'autoprefixer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
//import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../UI/form/TextInput';
import { useParams } from 'react-router-dom';

const EditPropertyForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const propId = params.userId;
  const { register, handleSubmit, formState } = useForm();
  
  const viewBtnHandler = () => {
    navigate(`/`);

};
  const submitHandler = async (formData) => {
  
    try {
      const response = await fetch(`https://agar-ly.azurewebsites.net/properties/` + propId, {
        method: 'PUT',
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
      <button type="submit" onClick = {viewBtnHandler} className="bg-white rounded-xl my-4 py-2 px-8 self-center">
        Edit Property
      </button>
    </form>
  );
};

export default EditPropertyForm;
