import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPasswordToggleIcon from 'react-password-toggle-icon';
import PropType from 'prop-types';
import EmailValidator from 'email-validator';
import userStore from '../store/user.store';
import makeRequest from '../helpers/axios.integration';
import { setUserLocalStorage } from '../helpers/localStorage';
// import veryD from '../img/veryDeliciuosLogo.png';
import { Main, Form } from '../styles/userForm.style';

function UserForm({ page }) {
  const {
    handleChange,
    email,
    password,
    name,
    clearPassword,
    setTokenLogin,
    setTokenRegister } = userStore((state) => state);
  const seis = 6;
  const doze = 12;
  const [dataString, setDataString] = useState(false);
  const [dataCreateString, setDataCreateString] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();
  const showIcon = () => (<i
    className="fa fa-eye"
    style={ { fontSize: '48px', color: 'red' } }
    aria-hidden="true"
  />);
  const hideIcon = () => (<i
    className="fa fa-eye-slash"
    style={ { fontSize: '48px', color: 'red' } }
    aria-hidden="true"
  />);

  const handleRoute = (role) => {
    switch (role) {
    case 'administrator':
      navigate('/admin/manage');
      break;
    case 'seller':
      navigate('/seller/orders');
      break;
    default:
      navigate('/customer/products');
      break;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const makeRequestRes = await makeRequest('login', 'post', {
        email,
        password,
      });
      const { role } = makeRequestRes;
      setTokenLogin(makeRequestRes);
      setUserLocalStorage(makeRequestRes);
      handleRoute(role);
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
      const { id, role, token } = makeRequestRes;
      setTokenRegister(id, role, token);
      setDataCreateString(true);
      setUserLocalStorage(makeRequestRes);
      handleRoute(role);
      clearPassword();
    } catch (err) {
      setDataString(true);
    }
  };

  return (
    <Main>
      {/* <Image src={ veryD } alt="very-deliciuos-logo" /> */}
      <Form>
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
            placeholder="Senha"
            autoComplete={ page === 'login' ? 'current-password' : 'new-password' }
          />
        </label>
        <label htmlFor="password">
          <div className="col fa" style={ { osition: 'relative', display: 'block' } }>
            <input
              ref={ inputRef }
              data-testid={ `common_${page}__input-password` }
              type="password"
              style={
                {
                  display: 'block',
                  width: '100%',
                  border: '0px',
                  borderBottom: '1px solid orange',
                  padding: '5px',
                  fontSize: '20px',
                  outline: 'none' }
              }
            />
            <ReactPasswordToggleIcon
              inputRef={ inputRef }
              showIcon={ showIcon }
              hideIcon={ hideIcon }
            />
          </div>
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

        <div>
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
        </div>
      </Form>
    </Main>
  );
}

UserForm.propTypes = {
  page: PropType.string.isRequired,
};

export default UserForm;
