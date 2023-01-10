import React from 'react';
import {ScrollView, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import Home from './src/screens/Home';
import ViewAll from './src/screens/ViewAll';
import MovieDetail from './src/screens/MovieDetail.js';
import Order from './src/screens/Order';
import Payment from './src/screens/Payment';
import Profile from './src/screens/Profile';
import History from './src/screens/History';
import TicketResult from './src/screens/TicketResult';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <ForgotPassword /> */}
        {/* <ResetPassword /> */}
        {/* <Home /> */}
        {/* <ViewAll /> */}
        {/* <MovieDetail /> */}
        {/* <Order /> */}
        {/* <Payment /> */}
        {/* <Profile /> */}
        {/* <History /> */}
        {/* <TicketResult /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
