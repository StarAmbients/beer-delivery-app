import axios from 'axios';

require('dotenv').config();

const makeRequest = async (url, method, data = null, token = null) => {
  const config = {
    url: `/${url}`,
    method,
    data,
    headers: { Authorization: token },
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    // base URL: previous line and || 'http://localhost:3001/',
  };
  const resultAxios = await axios(config);
  if (!resultAxios) return false;
  return resultAxios.data;
};

export default makeRequest;
