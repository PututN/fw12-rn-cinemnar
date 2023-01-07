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

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
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
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const ResetPasswordSubmit = data => {
    Alert.alert('data', JSON.stringify(data));
  };
  return (
    <View style={ResetPasswordStyle.authWrapper}>
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
          Set Password
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 20, color: '#8692A6'}}>
          set your new password{' '}
        </Text>
      </View>
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
              secureTextEntry={showPassword1 ? false : true}
            />
            {showPassword1 ? (
              <Eye
                onPress={() => setShowPassword1(!showPassword1)}
                width={24}
                height={24}
                stroke="red"
                fill="#0000"
                style={{position: 'absolute', top: 33, right: 20}}
              />
            ) : (
              <EyeOff
                onPress={() => setShowPassword1(!showPassword1)}
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
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{position: 'relative', marginTop: 30}}>
            <Text style={{color: '#4E4B66', fontSize: 20}}>
              Confirm Password
            </Text>
            <Input
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
                stroke="red"
                fill="#0000"
                style={{position: 'absolute', top: 33, right: 20}}
              />
            ) : (
              <EyeOff
                onPress={() => setShowPassword2(!showPassword2)}
                width={24}
                height={24}
                stroke="black"
                fill="#0000"
                style={{position: 'absolute', top: 33, right: 20}}
              />
            )}
          </View>
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && (
        <Text style={{color: 'red', fontWeight: 'bold', marginBottom: 10}}>
          {errors.confirmPassword.message}
        </Text>
      )}

      <View>
        <Button
          title="Submit"
          disable={!isDirty}
          onPress={handleSubmit(ResetPasswordSubmit)}
        />
      </View>
    </View>
  );
};

const ResetPasswordStyle = StyleSheet.create({
  authWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 15,
  },
});

export default ResetPassword;
