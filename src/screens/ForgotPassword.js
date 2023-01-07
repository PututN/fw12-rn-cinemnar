import {View, StyleSheet} from 'react-native';
import {Input, Button, Text, Image} from '@rneui/themed';
import Logo from '../images/logo.png';
import {Eye, EyeOff} from 'react-native-feather';
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {yupResolver} from '@hookform/resolvers/yup';

YupPassword(Yup);

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });
  const ForgotPasswordSubmit = data => {
    Alert.alert('data', JSON.stringify(data));
  };
  return (
    <View style={ForgotPasswordStyle.authWrapper}>
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
          Forgot Password
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 20, color: '#8692A6'}}>
          we'll send a link to your email shortly
        </Text>
      </View>
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
      <View>
        <Button
          title="Send"
          disable={!isDirty}
          onPress={handleSubmit(ForgotPasswordSubmit)}
        />
      </View>
    </View>
  );
};

const ForgotPasswordStyle = StyleSheet.create({
  authWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 15,
  },
});

export default ForgotPassword;
