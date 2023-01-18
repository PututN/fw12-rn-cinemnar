import {
  View,
  Input,
  Button,
  Text,
  Image,
  VStack,
  HStack,
  Pressable,
  Box,
  ScrollView,
} from 'native-base';
import Logo from '../images/logo.png';
import {Eye, EyeOff} from 'react-native-feather';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {yupResolver} from '@hookform/resolvers/yup';
import http from '../helpers/http';
import {useDispatch, useSelector} from 'react-redux';
import {logout, setErr} from '../redux/reducers/auth';
import { cancelTransaction } from '../redux/reducers/transaction';
import {useNavigation} from '@react-navigation/native';
import {loginAction as testLogin} from '../redux/actions/authActions';

YupPassword(Yup);

//VALIDATOR LOGIN
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .password()
    .min(6, 'Password must be at least 6 characters')
    .minLowercase(1, 'Password must have at least one lowercase letter')
    .minUppercase(1, 'Password must have at least one uppercase letter')
    .minNumbers(1, 'Password must have at least one number')
    .minSymbols(1, 'Password must have at least one symbol')
    .required('Password is required'),
});

const Login = () => {
  //NAVIGATION
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const err = useSelector(state => state.auth.error);
  const loading = useSelector(state => state.auth.loading);

  //err gone while refresh
  React.useEffect(() => {
    dispatch(cancelTransaction());
    if (err) {
      setTimeout(() => {
        dispatch(setErr());
      }, 3000);
    }
  }, [err]);

  //SHOWPASSWORD
  const [showPassword, setShowPassword] = React.useState(false);

  //CONTROL VALIDATOR
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  //INTEGRASI POST LOGIN

  const loginSubmit = async form => {
    try {
      const {email, password} = form;
      dispatch(testLogin({email, password}));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <VStack p="8">
        <View alignItems="center">
          <Image
            h="100"
            w="100"
            source={Logo}
            resizeMode="contain"
            alt="logo"
          />
        </View>
        <VStack space="3" mb="8">
          <Text fontSize="5xl" fontWeight="bold">
            Sign In
          </Text>
          <Text color="#8692A6" fontSize="lg">
            Sign in with your data that you entered during your registration
          </Text>
        </VStack>
        <VStack space="5">
          <VStack space="2">
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <VStack space="2">
                  <Text fontSize="lg">Email</Text>
                  <Input
                    borderColor="black"
                    borderRadius="10"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Write your email"
                  />
                </VStack>
              )}
              name="email"
            />
            {errors.email && (
              <Text
                style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
                {errors.email.message}
              </Text>
            )}
          </VStack>
          <VStack space="2">
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <VStack position="relative" space="2">
                  <Text fontSize="lg">Password</Text>
                  <Input
                    borderColor="black"
                    borderRadius="10"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Write your password"
                    secureTextEntry={showPassword ? false : true}
                  />
                  {showPassword ? (
                    <Eye
                      onPress={() => setShowPassword(!showPassword)}
                      width={24}
                      height={24}
                      stroke="black"
                      fill="#0000"
                      style={{position: 'absolute', top: 40, right: 20}}
                    />
                  ) : (
                    <EyeOff
                      onPress={() => setShowPassword(!showPassword)}
                      width={24}
                      height={24}
                      stroke="black"
                      fill="#0000"
                      style={{position: 'absolute', top: 40, right: 20}}
                    />
                  )}
                </VStack>
              )}
              name="password"
            />
            {errors.password && (
              <Text
                style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
                {errors.password.message}
              </Text>
            )}
          </VStack>
        </VStack>
        <Button
          mt="10"
          bgColor="#C539B4"
          borderRadius="10"
          fontWeight="bold"
          fontSize="3xl"
          title="Sign In"
          disable={!isDirty}
          onPress={handleSubmit(loginSubmit)}>
          <Text fontSize="lg" fontWeight="bold" color="white">
            Sign In
          </Text>
        </Button>
        {err && (
          <Text
            textAlign="center"
            color="red.500"
            fontSize="lg"
            fontWeight="bold"
            mt="3">
            {err}
          </Text>
        )}
        {loading === true && (
          <Text
            textAlign="center"
            color="blue.500"
            fontSize="lg"
            fontWeight="bold"
            mt="3">
            Loading...
          </Text>
        )}

        <VStack alignItems="center" mt="5" space="3">
          <HStack
            alignItems="center"
            justifyContent="center"
            flexDirection="row">
            <Text
              color="#8692A6"
              fontSize="lg"
              alignItems="center"
              justifyContent="center">
              Forgot your password?{' '}
            </Text>
            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text
                fontSize="lg"
                color="#852999"
                fontWeight="bold"
                textDecorationLine="underline">
                Reset now
              </Text>
            </Pressable>
          </HStack>
          <HStack
            alignItems="center"
            justifyContent="center"
            flexDirection="row">
            <Text color="#8692A6" fontSize="lg">
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text
                fontSize="lg"
                color="#852999"
                fontWeight="bold"
                textDecorationLine="underline">
                {' '}
                Sign Up
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Login;
