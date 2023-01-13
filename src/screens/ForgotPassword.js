import {
  View,
  Input,
  Button,
  Text,
  Image,
  VStack,
  HStack,
  Box,
  ScrollView,
} from 'native-base';
import Logo from '../images/logo.png';
import {Eye, EyeOff} from 'react-native-feather';
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setEmail} from '../redux/reducers/auth';
import {forgotPasswordAction} from '../redux/actions/authActions';

YupPassword(Yup);

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });
  //redux email
  const err = useSelector(state => state.auth.error);
  const loading = useSelector(state => state.auth.loading);
  const ForgotPasswordSubmit = async form => {
    try {
      const {email} = form;
      dispatch(setEmail({email}));
      dispatch(forgotPasswordAction({email}));
      if (!err) {
        navigation.navigate('ResetPassword');
      }
      navigation.navigate('ForgotPassword');
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
            Forgot Password
          </Text>
          <Text color="#8692A6" fontSize="lg">
            we'll send a link to your email shortly
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
        </VStack>
        <Button
          mt="10"
          bgColor="#C539B4"
          borderRadius="10"
          fontWeight="bold"
          fontSize="3xl"
          title="Send"
          disable={!isDirty}
          // onPress={() => navigation.navigate('ResetPassword')}
          onPress={handleSubmit(ForgotPasswordSubmit)}>
          <Text fontSize="lg" fontWeight="bold" color="white">
            Send
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
      </VStack>
    </ScrollView>
  );
};

export default ForgotPassword;
