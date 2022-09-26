import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogIn, getUser } from '../../redux/usersReducer/usersReducer';
import './login.css';

const LoginForm = () => {
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
      window.location.href = '/home';
    }
  }, [dispatch, user]);

  const onSubmit = (data) => {
    dispatch(fetchLogIn(data.username));
  };

  return (
    <div className="form-section">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          className="input"
          placeholder="Username"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters',
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <a rel="stylesheet" href="/signup">
          <p style={{ color: 'blue', padding: '1em' }}>Sign up</p>
        </a>
        <input type="submit" value="Send" className="add-game" />
      </form>
    </div>
  );
};

export default LoginForm;
