/* eslint-disable react/no-multi-comp */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
// import makeRequest from '../helpers/axios.integration';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from '../styles/thirdPartySignIns.style';
import userStore from '../store/user.store';
// import socialLoginStore from '../store/thirdparty.store';
import makeRequest from '../helpers/axios.integration';

function ThirdPartySingIns() {
  // const { socialLoginPayload, setSocialLoginPayload } = socialLoginStore();
  const {
    // handleChange,
    email,
    password,
    name,
    clearPassword,
    // setTokenLogin,
    setTokenRegister,
  } = userStore((state) => state);

  // const handleLogin = async (socialLoginPayload) => {
  //   try {
  //     const makeRequestRes = await makeRequest('login', 'post', {
  //       email: socialLoginPayload.email ? socialLoginPayload.email : email,
  //       password: socialLoginPayload.sub ? socialLoginPayload.sub : password,
  //     });
  //     const { role } = makeRequestRes;
  //     setTokenLogin(makeRequestRes);
  //     setUserLocalStorage(makeRequestRes);
  //     handleRoute(role);
  //     clearPassword();
  //   } catch (err) {
  //     setDataString(true);
  //   }
  // };

  const handleRegister = async (socialLoginPayload) => {
    console.log('esto na handle Register do 3rd party component');
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
      console.log(socialLoginPayload);
    } catch (err) {
      console.log(socialLoginPayload);
      // setDataString(true);
    }
  };

  let registerExecuted = false;

  function handleCallBackResponse(response) {
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    if (!registerExecuted) {
      handleRegister(userObject);
      registerExecuted = true;
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

export default ThirdPartySingIns;
