import { useForm } from 'react-hook-form';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();
  navigate(`/signin`);
  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signup/', {
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

      console.log(data);
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
        label="Email"
        type="text"
        name="Email"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Name must not be empty</FormInputError>
      )}

      
      <TextInput
        label="Username"
        type="text"
        name="Username"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>Username must not be empty.</FormInputError>
      )}

      <TextInput
        label="Name"
        type="text"
        name="Name"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Name must not be empty</FormInputError>
      )}

      <TextInput
        label="Password"
        type="password"
        name="Password"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.password && (
        <FormInputError>Password must not be empty.</FormInputError>
      )}

      

      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
        onClick={navigate}
      >
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
