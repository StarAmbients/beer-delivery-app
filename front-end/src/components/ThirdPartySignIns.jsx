/* eslint-disable react/no-multi-comp */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';
// import makeRequest from '../helpers/axios.integration';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import sign from 'jwt-encode';
import { GoogleLogin } from '../styles/thirdPartySignIns.style';
import userStore from '../store/user.store';
import { setUserLocalStorage } from '../helpers/localStorage';
// import socialLoginStore from '../store/thirdparty.store';
import makeRequest from '../helpers/axios.integration';

function ThirdPartySingIns({ page }) {
  // const { socialLoginPayload, setSocialLoginPayload } = socialLoginStore();
  const {
    email,
    password,
    name,
    clearPassword,
    setTokenLogin,
    setTokenRegister,
  } = userStore((state) => state);
  const [setDataString] = useState(false);
  const [setDataCreateString] = useState(false);

  const navigate = useNavigate();

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

  const handleLogin = async (socialLoginPayload) => {
    try {
      const makeRequestRes = await makeRequest('login', 'post', {
        email: socialLoginPayload.email ? socialLoginPayload.email : email,
        password: socialLoginPayload.sub
          ? sign(socialLoginPayload.sub, process.env.REACT_APP_JWT_SECRET)
          : password,
      });
      const { role } = makeRequestRes;
      setTokenLogin(makeRequestRes);
      setUserLocalStorage(makeRequestRes);
      handleRoute(role);
      clearPassword();
    } catch (err) {
      console.log('DSR login: '.concat(err.message));
      setDataString(true);
    }
  };

  const handleRegister = async (socialLoginPayload) => {
    console.log('Estou na handle Register do 3rd party component');
    try {
      const makeRequestRes = await makeRequest('register', 'post', {
        name: socialLoginPayload.name ? socialLoginPayload.name : name,
        email: socialLoginPayload.email
          ? socialLoginPayload.email
          : email,
        password: socialLoginPayload.sub
          ? sign(socialLoginPayload.sub, process.env.REACT_APP_JWT_SECRET)
          : password,
      });
      const { id, role, token } = makeRequestRes;
      setTokenRegister(id, role, token);
      setDataCreateString(true);
      setUserLocalStorage(makeRequestRes);
      handleRoute(role);
      clearPassword();
      console.log(socialLoginPayload);
    } catch (err) {
      console.log('DSR register: '.concat(err.message));
      setDataString(true);
    }
  };

  let dbAccessExecuted = false;

  function handleCallBackResponse(response) {
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    if (!dbAccessExecuted) {
      if (page === 'login') {
        handleLogin(userObject);
      } else handleRegister(userObject);
      dbAccessExecuted = true;
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById('signInGoogleAccount'),
      { theme: 'outline', size: 'large' },
    );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <GoogleLogin
        id="signInGoogleAccount"
        type="submit"
      />
    </div>
  );
}

ThirdPartySingIns.propTypes = {
  page: PropType.string.isRequired,
};

export default ThirdPartySingIns;
