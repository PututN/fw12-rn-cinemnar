import {createSlice} from '@reduxjs/toolkit';
import {
  loginAction,
  registerAction,
  forgotPasswordAction,
  ResetPasswordAction,
} from '../actions/authActions';

const initialState = {
  token: null,
  error: '',
  email: '',
  message: '',
  // loading: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    forgotPassword: (state, action) => {
      state.email = action.payload;
    },
    logout: (state, action) => {
      return initialState;
    },
  },
  extraReducers: build => {
    // LOGIN
    build.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(loginAction.fulfilled, (state, action) => {
      // console.log(action)
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    });
    build.addCase(loginAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });


    // REGISTER
    build.addCase(registerAction.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(registerAction.fulfilled, (state, action) => {
      // console.log(action)
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    });
    build.addCase(registerAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    // FORGOT PASSWORD
    build.addCase(forgotPasswordAction.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(forgotPasswordAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    build.addCase(forgotPasswordAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });


    // RESET PASSWORD
    build.addCase(ResetPasswordAction.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(ResetPasswordAction.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    });
    build.addCase(ResetPasswordAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const {logout, login, forgotPassword} = authReducer.actions;

export default authReducer.reducer;
