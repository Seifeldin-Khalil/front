import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';
import RoleSelectInput from '../../UI/form/RoleSelectInput';
import { useParams } from 'react-router-dom';

const SigninForm = () => {
  const params = useParams();
  const { register, handleSubmit, formState } = useForm();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();


  const roleOptions=[
    {name:"Admin",value:"Admin"},
    {name:"Customer",value:"Customer"}
  ]
  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
      });
      console.log(params.Username,params.Password);

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }else{
        navigate('/');
      }

      // invoke the login function in our auth context
      authContext.login(data.userId, data.Username, data.Role);

      // navigate to the home page
      
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      <label className="text-white font-bold">Role</label>
      <RoleSelectInput
      className='rounded-lg min-w-[250px] p-2'
      name="Role"
      label="Role"
      type="text"
      register={register}
      validation={{required:true}}
      options={roleOptions}/>
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
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
