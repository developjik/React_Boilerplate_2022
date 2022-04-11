/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { userStore } from 'store/user';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { Form, Input } from 'common/style';

function LoginForm() {
  const setUser = useSetRecoilState(userStore);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await axios
      .post(`${process.env.REACT_APP_BACKEND}`, data)
      .then(res => {
        setUser({
          id: res.data.user.id,
          name: res.data.user.name,
          email: res.data.user.email,
          phone: res.data.user.phone,
          accessToken: res.data.accessToken,
        });
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
        {...register('id', { required: true })}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      <Input type="submit" value="Login" />
    </Form>
  );
}

export default LoginForm;
