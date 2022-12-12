import { data } from 'autoprefixer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextInput from '../UI/form/TextInput';
import { useParams } from 'react-router-dom';

const EditAccount = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;
  const { register, handleSubmit, formState } = useForm();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch(`http://localhost:3000/account/` + userId, {
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
       {formState.errors.Name && (
          <FormInputError>Name must not be empty.</FormInputError>
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

     
      <a href="/">
      <button type="submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
         EditAccount
      </button></a>
    </form>
  );
};

export default EditAccount;
