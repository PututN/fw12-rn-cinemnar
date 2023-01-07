import React from 'react';
import {View, Text} from 'react-native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp'
import ForgotPassword from './src/screens/ForgotPassword'
import ResetPassowrd from './src/screens/ResetPassword'

const App = () => {
  return (
    <View>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <ForgotPassword /> */}
      <ResetPassowrd />
    </View>
  );
};

export default App;
