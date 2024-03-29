/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';
import EmailValidator from 'email-validator';
import { Eye, EyeSlash } from 'phosphor-react';
import userStore from '../store/user.store';
import socialLoginStore from '../store/thirdparty.store';
import makeRequest from '../helpers/axios.integration';
import { setUserLocalStorage } from '../helpers/localStorage';
import veryD from '../img/veryDeliciuosLogo.png';
import { Main, Image, Form } from '../styles/userForm.style';
import ThirdPartySingIns from './ThirdPartySignIns';

// eslint-disable-next-line react/prop-types
function UserForm({ page }) {
  const {
    handleChange,
    email,
    password,
    name,
    clearPassword,
    setTokenLogin,
    setTokenRegister,
  } = userStore((state) => state);

  const {
    socialLoginPayload,
  } = socialLoginStore((state) => state);

  const seis = 6;
  const doze = 12;
  const [dataString, setDataString] = useState(false);
  const [cadastrado, setCadastrado] = useState('Dados inválidos');
  const [dataCreateString, setDataCreateString] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        email: socialLoginPayload.email ? socialLoginPayload.email : email,
        password: socialLoginPayload.sub ? socialLoginPayload.sub : password,
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
        name: socialLoginPayload.name ? socialLoginPayload.name : name,
        email: socialLoginPayload.email ? socialLoginPayload.email : email,
        password: socialLoginPayload.sub ? socialLoginPayload.sub : password,
      });
      const { id, role, token } = makeRequestRes;
      setTokenRegister(id, role, token);
      setDataCreateString(true);
      setUserLocalStorage(makeRequestRes);
      handleRoute(role);
      clearPassword();
    } catch (err) {
      setDataString(true);
      setCadastrado('Usuário já cadastrado');
    }
  };

  useEffect(() => {
  }, [socialLoginPayload]);

  return (
    <Main>
      <Image src={ veryD } alt="very-deliciuos-logo" />
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
            placeholder="Email"
            autoComplete="email"
          />
        </label>
        <label
          htmlFor="password"
          style={ { position: 'relative' } }
        >
          <input
            className="segundoInput"
            data-testid={ `common_${page}__input-password` }
            type={ showPassword ? 'text' : 'password' }
            name="password"
            onChange={ handleChange }
            placeholder="Senha"
            autoComplete={ page === 'login' ? 'current-password' : 'new-password' }
            style={ { paddingRight: '2.5rem' } }
          />
          <button
            type="button"
            className="btn-visibility"
            onClick={ togglePasswordVisibility }
          >
            {showPassword ? (
              <h1>
                <EyeSlash />
              </h1>
            ) : (
              <h1>
                <Eye />
              </h1>
            )}
          </button>
        </label>

        {dataString ? (
          <div
            data-testid={
              page === 'login'
                ? 'common_login__element-invalid-email'
                : 'common_register__element-invalid_register'
            }
          >
            <p>{page === 'login' ? 'Usuário não encontrado' : cadastrado}</p>
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
            <div
              className="container-register"
            >
              <p> Não tem uma conta? </p>
              <button
                data-testid="common_login__button-register"
                type="button"
                className="btn-register"
                onClick={ () => navigate('/register') }
              >
                Registre-se
                {' '}
              </button>
            </div>
          ) : null}
          <div
            className="container-social"
          >
            {page === 'login' ? <div>Ou entre com:</div> : null}
            {page === 'login' ? <ThirdPartySingIns /> : null}
          </div>
        </div>
      </Form>
    </Main>
  );
}

UserForm.propTypes = {
  page: PropType.string.isRequired,
};

export default UserForm;
