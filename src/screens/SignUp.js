import {View, StyleSheet} from 'react-native';
import {Input, Button, Text, Image} from '@rneui/themed';
import Logo from '../images/logo.png';
import {Eye, EyeOff} from 'react-native-feather';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {yupResolver} from '@hookform/resolvers/yup';
import {ScrollView} from 'react-native-gesture-handler';

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
    .min(10, 'Phone Number must be at least 10 characters')
    .max(13, 'Phone Number must be at most 13 characters')
    .matches(/^[0-9]+$/, 'Phone Number must be only number'),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  });
  const SignUpSubmit = data => {
    Alert.alert('data', JSON.stringify(data));
  };
  return (
    <ScrollView>
      <View style={SignUpStyle.authWrapper}>
        <View>
          <Image
            source={Logo}
            style={{height: 100, width: 'auto'}}
            resizeMode="center"
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 40,
              marginBottom: 15,
              fontWeight: 'bold',
              marginTop: 15,
            }}>
            Sign Up
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 20, color: '#8692A6'}}>
            Fill your additional details
          </Text>
        </View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{marginTop: 30}}>
              <Text style={{color: '#4E4B66', fontSize: 20}}>First Name</Text>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Write your First Name"
              />
            </View>
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
            {errors.firstName.message}
          </Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{marginTop: 30}}>
              <Text style={{color: '#4E4B66', fontSize: 20}}>Last Name</Text>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Write your Last Name"
              />
            </View>
          )}
          name="lastName"
        />
        {errors.lastName && (
          <Text style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
            {errors.lastName.message}
          </Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{marginTop: 30}}>
              <Text style={{color: '#4E4B66', fontSize: 20}}>Phone Number</Text>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Write your Phone Number"
              />
            </View>
          )}
          name="phoneNumber"
        />
        {errors.phoneNumber && (
          <Text style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
            {errors.phoneNumber.message}
          </Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{marginTop: 30}}>
              <Text style={{color: '#4E4B66', fontSize: 20}}>Email</Text>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Write your email"
              />
            </View>
          )}
          name="email"
        />
        {errors.email && (
          <Text style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
            {errors.email.message}
          </Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{position: 'relative', marginTop: 30}}>
              <Text style={{color: '#4E4B66', fontSize: 20}}>Password</Text>
              <Input
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
                  stroke="red"
                  fill="#0000"
                  style={{position: 'absolute', top: 33, right: 20}}
                />
              ) : (
                <EyeOff
                  onPress={() => setShowPassword(!showPassword)}
                  width={24}
                  height={24}
                  stroke="black"
                  fill="#0000"
                  style={{position: 'absolute', top: 33, right: 20}}
                />
              )}
            </View>
          )}
          name="password"
        />
        {errors.password && (
          <Text style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
            {errors.password.message}
          </Text>
        )}
        <View>
          <Button
            title="Sign Up"
            disable={!isDirty}
            onPress={handleSubmit(SignUpSubmit)}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{marginBottom: 15, color: '#8692A6'}}>
            Already have account ?{' '}
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const SignUpStyle = StyleSheet.create({
  authWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 15,
  },
});

export default SignUp;
