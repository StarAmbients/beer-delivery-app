import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';
import EmailValidator from 'email-validator';
import userStore from '../store/user.store';
import makeRequest from '../helpers/axios.integration';
import { setUserLocalStorage } from '../helpers/localStorage';

function UserForm({ page }) {
  const {
    handleChange,
    email,
    password,
    name,
    clearPassword,
    setTokenLogin,
    setTokenRegister } = userStore(
    (state) => state,
  );
  const seis = 6;
  const doze = 12;
  const [dataString, setDataString] = useState(false);
  const [dataCreateString, setDataCreateString] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const makeRequestRes = await makeRequest('login', 'post', {
        email,
        password,
      });
      setTokenLogin(makeRequestRes.name, makeRequestRes.role, makeRequestRes.token);
      setUserLocalStorage(
        makeRequestRes.name,
        makeRequestRes.email,
        makeRequestRes.role,
        makeRequestRes.token,
      );
      navigate('/customer/products');
      clearPassword();
    } catch (err) {
      setDataString(true);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const makeRequestRes = await makeRequest('register', 'post', {
        name,
        email,
        password,
      });
      setTokenRegister(makeRequestRes.role, makeRequestRes.token);
      setDataCreateString(true);
      setUserLocalStorage(
        makeRequestRes.name,
        makeRequestRes.email,
        makeRequestRes.role,
        makeRequestRes.token,
      );
      navigate('/customer/products');
      clearPassword();
    } catch (err) {
      setDataString(true);
    }
  };

  return (
    <section className="userLoginArea">
      <form>
        <h1>{ page === 'login' ? 'Área do usuário' : 'Cadastre-se' }</h1>
        {page === 'register' && (
          <label htmlFor="name">
            <input
              data-testid="common_register__input-name"
              type="text"
              name="name"
              onChange={ handleChange }
              placeholder="Nome Completo"
            />
          </label>
        )}
        <label htmlFor="email">
          <input
            data-testid={ `common_${page}__input-email` }
            type="text"
            name="email"
            onChange={ handleChange }
            placeholder="Email"
            autoComplete="email"
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid={ `common_${page}__input-password` }
            type="password"
            name="password"
            onChange={ handleChange }
            placeholder="Senha"
            autoComplete={ page === 'login' ? 'current-password' : 'new-password' }
          />
        </label>
        {dataString ? (
          <div
            data-testid={
              page === 'login'
                ? 'common_login__element-invalid-email'
                : 'common_register__element-invalid_register'
            }
          >
            <p>{page === 'login' ? 'Usuário não encontrado' : 'Dados inválidos'}</p>
          </div>
        ) : null}

        {
          dataCreateString ? (
            'Cadastrado com sucesso'
          ) : null
        }
        <button
          data-testid={ `common_${page}__button-${page}` }
          type="submit"
          onClick={ page === 'login' ? handleLogin : handleRegister }
          disabled={
            page === 'login'
              ? !(EmailValidator.validate(email) && password.length >= seis)
              : !(EmailValidator.validate(email)
                && password.length >= seis
                && name.length >= doze)
          }
        >
          { page === 'login' ? 'Login' : 'Cadastrar' }
        </button>
        { page === 'login' ? (
          <button
            data-testid="common_login__button-register"
            type="button"
            onClick={ () => navigate('/register') }
          >
            Ainda não tenho conta
          </button>
        ) : null}
      </form>
    </section>
  );
}

UserForm.propTypes = {
  page: PropType.string.isRequired,
};

export default UserForm;