/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { Form, Input } from 'common/style';

function RegisterForm() {
  const navigate = useNavigate();
  const { register, watch, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = async (data: any) => {
    await axios
      .post(`${process.env.REACT_APP_BACKEND}`, data)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onError = (error: any) => {
    console.log(error);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input
        type="text"
        placeholder="ID"
        {...register('id', {
          required: true,
          minLength: {
            value: 4,
            message: 'ID must be longer than 4 characters',
          },
        })}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register('password', {
          required: true,
          minLength: {
            value: 6,
            message: 'password must be longer than 6 characters',
          },
        })}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        {...register('confirmPassword', {
          required: true,
          validate: value => value === watch('password'),
        })}
      />
      <Input
        type="email"
        placeholder="Email"
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
      />
      <Input
        type="text"
        placeholder="Phone"
        {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })}
      />
      <Input type="submit" value="Register" />
    </Form>
  );
}

export default RegisterForm;
