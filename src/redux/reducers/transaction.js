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
  cinemaName:null,
  price:null,
  cinemaPicture:null,
  movieTitle:null,
};

const transactionReducer = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    transaction: (state, action) => {
      state.bookingDate = action.payload.bookingDate;
      state.movieId = action.payload.movieId;
      state.userId = action.payload.userId;
      state.cinemaId = action.payload.cinemaId;
      state.movieScheduleId = action.payload.movieScheduleId;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.statusId = action.payload.statusId;
      state.paymentId = action.payload.paymentId;
      state.seatNum = action.payload.seatNum;
      state.time = action.payload.time;
      state.cinemaName = action.payload.cinemaName;
      state.price = action.payload.price;
      state.cinemaPicture = action.payload.cinemaPicture;
      state.movieTitle = action.payload.movieTitle;
    },
    cancelTransaction: (state, {payload}) => {
      return initialState;
    },
  },
  extraReducers: build => {},
});

export const {transaction, cancelTransaction} = transactionReducer.actions;

export default transactionReducer.reducer;
