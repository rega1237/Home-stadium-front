import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import "./signUpForm.css";

const FormHook = () => {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
        <p>{errors?.username?.message }</p>
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default FormHook;