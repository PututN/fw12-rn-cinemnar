import {
  View,
  Input,
  Button,
  Text,
  Image,
  HStack,
  VStack,
  Box,
  Pressable,
  ScrollView,
} from 'native-base';
import Logo from '../images/logo.png';
import {Eye, EyeOff} from 'react-native-feather';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {registerAction} from '../redux/actions/authActions';

YupPassword(Yup);

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .password()
    .min(6, 'Password must be at least 6 characters')
    .minLowercase(1, 'Password must have at least one lowercase letter')
    .minUppercase(1, 'Password must have at least one uppercase letter')
    .minNumbers(1, 'Password must have at least one number')
    .minSymbols(1, 'Password must have at least one symbol')
    .required('Password is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  phoneNumber: Yup.string()
    .required('Phone Number is required')
    .matches(/^[0-9]+$/, 'Phone Number must be only number')
    .min(10, 'Phone Number must be at least 10 characters')
    .max(13, 'Phone Number must be at most 13 characters'),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  });
  // const SignUpSubmit = data => {
  //   Alert.alert('data', JSON.stringify(data));
  // };

  const SignUpSubmit = async value => {
    try {
      const {firstName, lastName, email, password, phoneNumber} = value;
      dispatch(
        registerAction({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
        }),
      );
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
            Sign Up
          </Text>
          <Text color="#8692A6" fontSize="lg">
            Fill your additional details
          </Text>
        </VStack>
        <VStack space="5">
          <VStack space="2">
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <>
                  <VStack space="2">
                    <Text fontSize="lg">First Name</Text>
                    <Input
                      borderColor="black"
                      borderRadius="10"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Write your First Name"></Input>
                  </VStack>
                </>
              )}
              name="firstName"
            />
            {errors.firstName && (
              <Text
                style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
                {errors.firstName.message}
              </Text>
            )}
          </VStack>
          <VStack space="2">
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <VStack space="2">
                  <Text fontSize="lg">Last Name</Text>
                  <Input
                    borderColor="black"
                    borderRadius="10"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Write your Last Name"
                  />
                </VStack>
              )}
              name="lastName"
            />
            {errors.lastName && (
              <Text
                style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
                {errors.lastName.message}
              </Text>
            )}
          </VStack>
          <VStack space="2">
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <VStack space="2">
                  <Text fontSize="lg">Phone Number</Text>
                  <Input
                    borderColor="black"
                    borderRadius="10"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Write your Phone Number"
                  />
                </VStack>
              )}
              name="phoneNumber"
            />
            {errors.phoneNumber && (
              <Text
                style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
                {errors.phoneNumber.message}
              </Text>
            )}
          </VStack>
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
          borderRadius="10"
          fontWeight="bold"
          fontSize="3xl"
          title="Sign Up"
          disable={!isDirty}
          onPress={handleSubmit(SignUpSubmit)}>
          Sign Up
        </Button>
        <HStack
          alignItems="center"
          mt="5"
          justifyContent="center"
          flexDirection="row">
          <Text color="#8692A6" fontSize="lg">
            Already have account ?{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="blue"
              textDecorationLine="underline">
              Sign In
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default SignUp;
