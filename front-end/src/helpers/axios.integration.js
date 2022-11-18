import axios from 'axios';

const makeRequest = async (url, method, data = null, token = null) => {
  const config = {
    url: `/${url}`,
    method,
    data,
    headers: { Authorization: token },
    baseURL: 'http://localhost:3001/',
    // baseURL: 'http://beer-delivery-app-backend-production.up.railway.app',
  };
  const resultAxios = await axios(config);
  if (!resultAxios) return false;
  return resultAxios.data;
};

export default makeRequest;
