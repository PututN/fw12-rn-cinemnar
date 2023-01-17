import {
  Box,
  FlatList,
  HStack,
  Image,
  Input,
  Text,
  View,
  VStack,
  Button,
  ScrollView,
  Pressable,
} from 'native-base';
import React, {Component} from 'react';
import {AlertTriangle} from 'react-native-feather';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import http from '../helpers/http';
import {transaction} from '../redux/reducers/transaction';

const Payment = () => {
  const {
    movieTitle,
    price,
    cinemaPicture,
    bookingDate,
    time,
    userId,
    movieId,
    cinemaId,
    movieScheduleId,
    seatNum,
    cinemaName,
    totalPrice,
  } = useSelector(state => state?.transaction);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector(state => state.auth.token);

  //FETCHING PAYMENT METHOD
  const [paymentMethod, setPaymentMethod] = React.useState([]);
  const fetchPaymentMethod = async () => {
    try {
      const response = await http(token).get('/paymentMethod?limit=6');
      setPaymentMethod(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    if (token) {
      fetchPaymentMethod();
    }
  }, [token]);

  //set selected payment method
  const [selectPaymentMethod, setSelectPaymentMethod] = React.useState(null);
  //FETCHING PROFILE ID
  const [profile, setProfile] = React.useState({});
  const fetchProfile = async () => {
    try {
      const response = await http(token).get('/profile');
      setProfile(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);
  //set profile
  const [fullName, setFullName] = React.useState('');
  const [newEmail, setNewEmail] = React.useState('');
  const [newPhoneNumber, setNewPhoneNumber] = React.useState('');

  //alert success
  const [successMessage, setSuccessMessage] = React.useState(false);

  //alert error
  const [errorPayment, setErrorPayment] = React.useState(false);

  //handle payorder
  const handlePayOrder = async () => {
    if (!selectPaymentMethod) {
      setErrorPayment('Please choose your payment');
      setTimeout(() => {
        setErrorPayment(false);
      }, 3000);
    } else {
      dispatch(
        transaction({
          userId,
          bookingDate,
          movieId,
          cinemaId,
          movieScheduleId,
          fullName: fullName
            ? fullName
            : `${profile?.firstName} ${profile?.lastName}`,
          email: newEmail ? newEmail : `${profile?.email}`,
          phoneNumber: newPhoneNumber
            ? newPhoneNumber
            : `${profile?.phoneNumber}`,
          statusId: 1,
          paymentId: selectPaymentMethod,
          seatNum,
          time,
          cinemaName,
          price,
          cinemaPicture,
          movieTitle,
          totalPrice,
        }),
      );
      createTransaction();
    }
  };

  //create transaction
  const createTransaction = async () => {
    try {
      const response = await http(token).post(`/transaction/order`, {
        bookingDate,
        fullName: fullName
          ? fullName
          : `${profile?.firstName} ${profile?.lastName}`,
        email: newEmail ? newEmail : `${profile?.email}`,
        movieId,
        movieScheduleId,
        paymentId: selectPaymentMethod,
        statusId: 1,
        cinemaId,
        seatNum,
        phoneNumber: newPhoneNumber
          ? newPhoneNumber
          : `${profile?.phoneNumber}`,
        time,
        totalPrice,
      });
      setSuccessMessage('Payment Success');
      setTimeout(() => {
        setSuccessMessage(false);
        navigation.navigate('History');
      }, 3000);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(totalPrice);

  return (
    <ScrollView>
      <Navbar />
      <VStack bg="#E5E5E5">
        <HStack
          justifyContent="space-between"
          bg="#C539B4"
          p="5"
          borderBottomRadius="20">
          <Text color="white" fontWeight="bold" fontSize="lg">
            Total Payment
          </Text>
          <Text color="white" fontWeight="bold" fontSize="2xl">
            Rp {totalPrice}
          </Text>
        </HStack>
      </VStack>
      <VStack bg="#E5E5E5" px="5" space="5" pt="10">
        <Text fontSize="2xl" fontWeight="bold">
          Payment Method
        </Text>
        <VStack bg="white" p="5" borderRadius="10" space="5">
          <Box space="10px" flexDirection="row" flexWrap="wrap">
            {paymentMethod?.map(item => {
              return (
                <Pressable
                  key={item.id}
                  borderWidth="1"
                  borderRadius="10"
                  px="3"
                  py="2"
                  space="2"
                  m="1"
                  alignItems="center"
                  w="100"
                  onPress={() => setSelectPaymentMethod(item?.id)}
                  backgroundColor={
                    selectPaymentMethod === item?.id ? '#F5D5AE' : 'white'
                  }>
                  <Image
                    source={{uri: item.picture}}
                    alt={`${item.name}`}
                    width="80px"
                    height="50px"
                    resizeMode="contain"
                  />
                </Pressable>
              );
            })}
          </Box>
          <HStack position="relative" alignItems="center">
            <Box
              borderBottomColor="#DEDEDE"
              borderBottomWidth="1"
              width="35%"
              position="absolute"
              top="2.5"
              left="0"
            />

            <Text fontSize="lg" fontWeight="bold" textAlign="center" w="100%">
              Or
            </Text>
            <Box
              borderBottomColor="#DEDEDE"
              borderBottomWidth="1"
              width="35%"
              position="absolute"
              top="2.5"
              right="0"
            />
          </HStack>
          <Text textAlign="center" color="#6E7191">
            Pay via cash.{' '}
            <Text color="#5F2EEA" fontWeight="bold">
              See how it work
            </Text>
          </Text>
        </VStack>
        <Text fontSize="2xl" fontWeight="bold">
          Personal Info
        </Text>
        <VStack bg="white" p="5" borderRadius="10" space="5">
          <VStack space="2">
            <Text fontSize="lg">Full Name</Text>
            <Input
              placeholder="Write your fullname"
              onChangeText={value => setFullName(value)}
              defaultValue={`${profile?.firstName} ${profile?.lastName}`}
              borderRadius="10"
              borderColor="black"></Input>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">Email</Text>
            <Input
              placeholder="Write your email"
              onChangeText={value => setNewEmail(value)}
              defaultValue={profile?.email}
              borderColor="black"
              borderRadius="10"></Input>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">Phone Number</Text>
            <Input
              onChangeText={value => setNewPhoneNumber(value)}
              defaultValue={profile.phoneNumber}
              borderColor="black"
              placeholder="Write your phone number"
              borderRadius="10"></Input>
          </VStack>
          <HStack
            bg="#F4B7404D"
            alignItems="center"
            justifyContent="center"
            py="3"
            space="3"
            borderRadius="10">
            <AlertTriangle size={50} color="#F4B740" />
            <Text fontSize="lg" fontWeight="bold">
              Fill your data correctly.
            </Text>
          </HStack>
        </VStack>

        {errorPayment && (
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="red.500"
            textAlign="center">
            {errorPayment}
          </Text>
        )}
        {successMessage && (
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="green.500"
            textAlign="center">
            {successMessage}
          </Text>
        )}
        <Button
          mb="10"
          bgColor="#C539B4"
          borderRadius="10"
          fontWeight="bold"
          fontSize="3xl"
          onPress={handlePayOrder}>
          <Text fontSize="lg" fontWeight="bold" color="white">
            Pay your order
          </Text>
        </Button>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default Payment;
