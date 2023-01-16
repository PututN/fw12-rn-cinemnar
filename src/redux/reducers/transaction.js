import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  bookingDate: null,
  movieId: null,
  cinemaId: null,
  movieScheduleId: null,
  fullName: null,
  email: null,
  phoneNumber: null,
  statusId: null,
  paymentId: null,
  seatNum: null,
  time:null,
};

const transactionReducer = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    transaction: (state, {payload}) => {
      state.bookingDate = payload.bookingDate;
      state.movieId = payload.movieId;
      state.userId = payload.userId;
      state.cinemaId = payload.cinemaId;
      state.movieScheduleId = payload.movieScheduleId;
      state.fullName = payload.fullName;
      state.email = payload.email;
      state.phoneNumber = payload.phoneNumber;
      state.statusId = payload.statusId;
      state.paymentId = payload.paymentId;
      state.seatNum = payload.seatNum;
      state.time = payload.time;
    },
    cancelTransaction: (state, {payload}) => {
      return initialState;
    },
  },
  extraReducers: build => {},
});

export const {transaction, cancelTransaction} = transactionReducer.actions;

export default transactionReducer.reducer;
