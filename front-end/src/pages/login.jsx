/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import LoginSComponent from '../styles/login.style';
import { getUserLocalStorage } from '../helpers/localStorage';
import GoogleLogin from '../components/GoogleLogin';

function Login() {
  const navigate = useNavigate();
  const user = getUserLocalStorage();

  useEffect(() => {
    if (user) {
      navigate('/customer/products');
    }
  }, []);

  return (
    <LoginSComponent>
      <GoogleLogin />
      <UserForm page="login" />
    </LoginSComponent>
  );
}

export default Login;
