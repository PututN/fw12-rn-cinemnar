import {
  View,
  Input,
  Button,
  Text,
  Image,
  ScrollView,
  VStack,
  HStack,
  Box,
} from 'native-base';
import Logo from '../images/logo.png';
import {Eye, EyeOff} from 'react-native-feather';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ResetPasswordAction} from '../redux/actions/authActions';
import http from '../helpers/http';

YupPassword(Yup);

const ResetPasswordSchema = Yup.object().shape({
  code: Yup.string()
    .required('Code is required')
    .matches(/^[0-9]+$/, 'Code must be only number'),
  password: Yup.string()
    .password()
    .min(6, 'Password must be at least 6 characters')
    .minLowercase(1, 'Password must have at least one lowercase letter')
    .minUppercase(1, 'Password must have at least one uppercase letter')
    .minNumbers(1, 'Password must have at least one number')
    .minSymbols(1, 'Password must have at least one symbol')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

const ResetPassword = () => {
  const navigation = useNavigation();
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
      password: '',
      code: '',
      confirmPassword: '',
    },
  });

  //integrate with BE
  const [failed, setFailed] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const email = useSelector(state => state.auth.email.email);
  const ResetPasswordSubmit = async form => {
    try {
      const {code, password, confirmPassword} = form;
      const data = await http().post('/auth/resetPassword', {
        email,
        confirmPassword,
        code,
        password,
      });
      setSuccess('Password updated, please relogin');
      setTimeout(() => {
        setSuccess(false);
        navigation.navigate('Login')
      }, 3000);
      return data.result;
    } catch (error) {
      setFailed(error.response.data.message);
      setTimeout(() => {
        setFailed(false);
      }, 3000);
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
            Set Password
          </Text>
          <Text color="#8692A6" fontSize="lg">
            set your new password{' '}
          </Text>
        </VStack>
        <VStack space="5">
          <VStack space="2">
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <VStack space="2">
                  <Text fontSize="lg">Code</Text>
                  <Input
                    borderColor="black"
                    borderRadius="10"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Write your code"
                  />
                </VStack>
              )}
              name="code"
            />
            {errors.code && (
              <Text
                style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
                {errors.code.message}
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
                    secureTextEntry={showPassword1 ? false : true}
                  />
                  {showPassword1 ? (
                    <Eye
                      onPress={() => setShowPassword1(!showPassword1)}
                      width={24}
                      height={24}
                      stroke="black"
                      fill="#0000"
                      style={{position: 'absolute', top: 40, right: 20}}
                    />
                  ) : (
                    <EyeOff
                      onPress={() => setShowPassword1(!showPassword1)}
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
          <VStack space="2">
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <VStack position="relative" space="2">
                  <Text fontSize="lg">Confirm Password</Text>
                  <Input
                    borderColor="black"
                    borderRadius="10"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Write your Confirm Password"
                    secureTextEntry={showPassword2 ? false : true}
                  />
                  {showPassword2 ? (
                    <Eye
                      onPress={() => setShowPassword2(!showPassword2)}
                      width={24}
                      height={24}
                      stroke="black"
                      fill="#0000"
                      style={{position: 'absolute', top: 40, right: 20}}
                    />
                  ) : (
                    <EyeOff
                      onPress={() => setShowPassword2(!showPassword2)}
                      width={24}
                      height={24}
                      stroke="black"
                      fill="#0000"
                      style={{position: 'absolute', top: 40, right: 20}}
                    />
                  )}
                </VStack>
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <Text
                style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
                {errors.confirmPassword.message}
              </Text>
            )}
          </VStack>
        </VStack>

        <Button
          mt="10"
          borderRadius="10"
          bgColor="#C539B4"
          fontWeight="bold"
          fontSize="3xl"
          title="Submit"
          disable={!isDirty}
          // onPress={() => navigation.navigate('Home')}
          onPress={handleSubmit(ResetPasswordSubmit)}>
          <Text fontSize="lg" fontWeight="bold" color="white">
            Submit
          </Text>
        </Button>
        {failed && (
          <Text
            textAlign="center"
            color="red.500"
            fontSize="lg"
            fontWeight="bold"
            mt="3">
            {failed}
          </Text>
        )}
        {success && (
          <Text
            textAlign="center"
            color="green.500"
            fontSize="lg"
            fontWeight="bold"
            mt="3">
            {success}
          </Text>
        )}
      </VStack>
    </ScrollView>
  );
};

export default ResetPassword;
