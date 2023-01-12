import {createSlice} from '@reduxjs/toolkit';
import {loginAction, registerAction} from '../actions/authActions';

const initialState = {
  token: null,
  error: "",
  // loading: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // login: (state, action) => {
    //   // console.log(action);
    //   state.token = action.payload.token;
    // },
    logout: (state, action) => {
      return initialState
    },
  },
  extraReducers: build => {
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

  },
});

export const {logout, login} = authReducer.actions;

export default authReducer.reducer;
