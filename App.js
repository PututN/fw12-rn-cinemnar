import React from 'react';
import {ScrollView, NativeBaseProvider} from 'native-base';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import Home from './src/screens/Home';
import ViewAll from './src/screens/ViewAll';
import MovieDetail from './src/screens/MovieDetail.js';
import Order from './src/screens/Order';

const App = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <ForgotPassword /> */}
        {/* <ResetPassword /> */}
        {/* <Home /> */}
        {/* <ViewAll /> */}
        {/* <MovieDetail /> */}
        <Order />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;
