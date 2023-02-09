import React, { useEffect } from 'react';
// import makeRequest from '../helpers/axios.integration';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from '../styles/thirdPartySignIns.style';
import useStore from '../store/thirdparty.store';

function ThirdPartySingIns() {
  const { socialLoginPayload, setSocialLoginPayload } = useStore();

  function handleCallBackResponse(response) {
    const userObject = jwt_decode(response.credential);
    setSocialLoginPayload(userObject);
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
    console.log('DENTRO DO GOOGLE...: ', socialLoginPayload);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socialLoginPayload]);

  return (
    <div>
      <GoogleLogin id="signInGoogleAccount" />
    </div>
  );
}

export default ThirdPartySingIns;
