import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type FormValues = {
  username: string;
  password: string;
};

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("Data:", data)
      const response = await axios.post('http://localhost:3000/auth/login', data);
      localStorage.setItem('token', response.data.token);
      navigate('/manage-contacts');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="main-container">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input type="text" {...register('username')} />
        {errors.username && <span className="error-message">{errors.username.message}</span>}

        <label>Password</label>
        <input type="password" {...register('password')} />
        {errors.password && <span className="error-message">{errors.password.message}</span>}

        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}
