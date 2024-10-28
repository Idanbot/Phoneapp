import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type FormValues = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
};

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', data);
      console.log('Registration successful:', response.data);
      navigate('/manage-contacts');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="main-container">
      <h1>Registration Form</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input {...register('username')} />
        {errors.username && <span className="error-message">{errors.username.message}</span>}

        <label>First Name</label>
        <input {...register('firstName')} />
        {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}

        <label>Last Name</label>
        <input {...register('lastName')} />
        {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}

        <label>Phone Number</label>
        <input type="tel" {...register('phoneNumber')} />
        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber.message}</span>}

        <label>Password</label>
        <input type="password" {...register('password')} />
        {errors.password && <span className="error-message">{errors.password.message}</span>}

        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  );
}
