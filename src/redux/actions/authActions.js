import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const loginAction = createAsyncThunk(
  'auth/loginAction',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const {data} = await http().post('/auth/login', {email, password});
      return data.result;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const registerAction = createAsyncThunk(
  'auth/registerAction',
  async (
    {firstName, lastName, email, password, phoneNumber},
    {rejectWithValue},
  ) => {
    try {
      const {data} = await http().post('/auth/register', {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      });
      return data.results;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const forgotPasswordAction = createAsyncThunk(
  'auth/forgotPassword',
  async ({email}, {rejectWithValue}) => {
    try {
      const data = await http().post('/auth/forgotPassword', {email});
      return data.result;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const ResetPasswordAction = createAsyncThunk(
  'auth/resetPassword',
  async ({code, password, email, confirmPassword}, {rejectWithValue}) => {
    try {
      const data = await http().post('/auth/resetPassword', {
        email,
        confirmPassword,
        code,
        password,
      });
      return data.result;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
