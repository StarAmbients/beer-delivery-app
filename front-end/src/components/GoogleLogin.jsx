import React, { useEffect } from 'react';
// import makeRequest from '../helpers/axios.integration';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

function GoogleLogin() {
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
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' },
    );
  }, []);

  return (
    <div>
      <div id="signInDiv" />
    </div>
  );
}

export default GoogleLogin;
