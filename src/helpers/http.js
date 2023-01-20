import axios from 'axios';
import {BASE_URL_BACKEND} from '@env'


const http = token => {
  const headers = {};
  if (token) {
    // console.log(token)
    // console.log('masuk pak')
    headers.authorization = 'Bearer ' + token;
  }
  const instance = axios.create({
    // baseURL: 'http://localhost:8888',
    // baseURL: 'http://192.168.1.37:8888',
    baseURL: BASE_URL_BACKEND,
    headers,
  });
  return instance;
};

export default http;
