import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./signUpForm.css";


const FormHook = () => {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3000/users', {user: data});
      if (response.status === 201) {
        alert('User created successfully');
      }
    } catch (error) {
      if (error.response.status === 422) {
        alert('User already exists');
      } else if (error.response.status === 500) {
        alert('Server error');
      }
    }
  };
  return (
    <Fragment>
      <h1>Sign up</h1>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        <input 
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input type="submit" value="Send" />
      </form>
    </Fragment>
  );
};

export default FormHook;