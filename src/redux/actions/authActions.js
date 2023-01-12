import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const loginAction = createAsyncThunk(
  'auth/loginAction',
  async ({email, password}) => {
    try {
      const {data} = await http().post('/auth/login', {email, password});
      return data.result;
    } catch (error) {
      return error.response.data.message;
    }
  },
);

export const registerAction = createAsyncThunk(
  'auth/registerAction',
  async ({firstName, lastName, email, password, phoneNumber}) => {
    try {
      // console.log("lapor pak")
      const {data} = await http().post('/auth/register', {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      });
      // console.log("masuk boss")
      return data.results;
    } catch (error) {
      return error.response.data.message;
    }
  },
);
