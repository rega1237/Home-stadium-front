import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getUser } from '../../redux/usersReducer/usersReducer';

import './signUpForm.css';

const FormHook = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser());
    if (user.token !== undefined) {
      window.location.href = '/';
    }
  }, [dispatch, user]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/users', { user: data });
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
    <div className="form-section">
      <h1>Sign up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        <input
          className="input"
          placeholder="Username"
          // eslint-disable-next-line react/jsx-props-no-spreading, react/jsx-props-no-multi-spaces
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters',
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input type="submit" value="Send" className="add-game" />
        <a href="/login">
          <p style={{ color: 'blue', padding: '1em' }}>Log in</p>
        </a>
      </form>
    </div>
  );
};

export default FormHook;
