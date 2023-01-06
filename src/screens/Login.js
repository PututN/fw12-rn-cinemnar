import {View, StyleSheet} from 'react-native';
import {Input, Button, Text, Image} from '@rneui/themed';
import Logo from '../images/logo.png';
import {Eye, EyeOff} from 'react-native-feather';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {yupResolver} from '@hookform/resolvers/yup';

YupPassword(Yup);

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
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const loginSubmit = data => {
    Alert.alert('data', JSON.stringify(data));
  };
  return (
    <View style={LoginStyle.authWrapper}>
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
          Sign In
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 20, color: '#8692A6'}}>
          Sign in with your data that you entered during your registration
        </Text>
      </View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{marginTop: 30}}>
            <Text style={{color: '#4E4B66', fontSize: 20}}>Email</Text>
            <Input placeholder="Write your email" />
          </View>
        )}
        name="email"
      />
      {errors.email && (
        <Text style={{color: 'red', fontWeight: 'bold', marginBottom:10}}>
          {errors.email.message}
        </Text>
      )}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{position: 'relative'}}>
            <Text style={{color: '#4E4B66', fontSize: 20}}>Password</Text>
            <Input
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
        <Text style={{color: 'red', fontWeight: 'bold', marginBottom:10}}>
          {errors.password.message}
        </Text>
      )}
      <View>
        <Button
          title="Sign In"
          disable={!isDirty}
          onPress={handleSubmit(loginSubmit)}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{marginBottom: 15, color: '#8692A6'}}>
          Forgot your password? <Text style={{color: 'blue'}}>Reset now</Text>
        </Text>
        <Text style={{color: '#8692A6'}}>
          Don’t have an account? <Text style={{color: 'blue'}}> Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const LoginStyle = StyleSheet.create({
  authWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 15,
  },
});

export default Login;
