import React, { useEffect } from 'react';
// import makeRequest from '../helpers/axios.integration';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from '../styles/thirdPartySignIns.style';

function ThirdPartySingIns() {
  function handleCallBackResponse(response) {
    // console.log(`Encoded Token: ${response.credential}`);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
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
  }, []);

  return (
    <div>
      <GoogleLogin id="signInGoogleAccount" />
    </div>
  );
}

export default ThirdPartySingIns;
