import React from 'react';
import {View, Text, ScrollView, SafeAreaView } from 'react-native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp'
import ForgotPassword from './src/screens/ForgotPassword'
import ResetPassword from './src/screens/ResetPassword'
import Home from './src/screens/Home'

const App = () => {
  return (
    <>
    <ScrollView>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      <Home />
    </ScrollView>
    </>
  );
};

export default App;
