import React from 'react';
import {ScrollView, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Home from './Home';
import ViewAll from './ViewAll';
import MovieDetail from './MovieDetail.js';
import Order from './Order';
import Payment from './Payment';
import Profile from './Profile';
import History from './History';
import TicketResult from './TicketResult';
import TestingImage from './TestingImage';

const Stack = createNativeStackNavigator();
const Main = () => {
  const token = useSelector(state => state?.auth?.token);
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          {!token && (
            <>
              {/* <Stack.Screen
                name="TestingImage"
                component={TestingImage}
                options={{headerShown: false}}
              /> */}
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
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{headerShown: false}}
              />
            </>
          )}
          {token && (
            <>
              {/* <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ViewAll"
                component={ViewAll}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MovieDetail"
                component={MovieDetail}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Order"
                component={Order}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Payment"
                component={Payment}
                options={{headerShown: false}}
              /> */}
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="History"
                component={History}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="TicketResult"
                component={TicketResult}
                options={{headerShown: false}}
              />
            </>
          )}
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

export default Main;
