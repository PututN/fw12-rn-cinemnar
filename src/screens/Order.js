import {
  Box,
  HStack,
  Text,
  View,
  VStack,
  Pressable,
  Image,
  Button,
  ScrollView,
} from 'native-base';
import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import {ArrowDown, ArrowRight} from 'react-native-feather';
import CinemaOne from '../images/imgCineOne.png';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {transaction} from '../redux/reducers/transaction';
import moment from 'moment';

const Order = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    bookingDate,
    cinemaName,
    cinemaPicture,
    movieTitle,
    time,
    price,
    cinemaId,
    movieId,
    movieScheduleId,
    userId,
    price,
  } = useSelector(state => state?.transaction);
  //set date
  const date = moment(bookingDate).format('LLLL').split(' ');
  const day = date[0];
  const month = date[1];
  const newDate = date[2];
  const year = date[3];
  const fixDate = `${day} ${month} ${newDate} ${year}`;
  //set seatnum
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const column1 = [1, 2, 3, 4, 5, 6, 7];
  const column2 = [8, 9, 10, 11, 12, 13, 14];
  const [selectSeat, setSelectSeat] = React.useState([]);
  //handlechooseseat
  const handleChooseSeat = seat => {
    if (!selectSeat.includes(seat)) {
      setSelectSeat([...selectSeat, seat].sort());
    } else {
      setSelectSeat(selectSeat.filter(e => e !== seat));
    }
  };

  //validate choose seat
  const [errorMessage, setErrorMessage] = React.useState(false);

  //total price
  const totalPrice = Number(selectSeat.length * price).toLocaleString('id');

  //handlesubmit checkout
  const handleCheckoutNow = async totalPrice => {
    try {
      if (selectSeat.length) {
        dispatch(
          transaction({
            bookingDate,
            time,
            cinemaName,
            cinemaId,
            cinemaPicture,
            movieId,
            movieScheduleId,
            movieTitle,
            seatNum: selectSeat,
            totalPrice,
            userId,
            price,
          }),
        );
        navigation.navigate('Payment');
      } else {
        setErrorMessage('Please choose your seat')
        setTimeout(() => {
          setErrorMessage(false)
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <Navbar />
      <VStack bg="#E5E5E5" px="5" py="10" mb="10">
        <Text fontSize="2xl" fontWeight="bold" mb="5">
          Choose Your Seat
        </Text>
        <VStack bg="white" borderRadius="10" py="10" px="3">
          <Box
            borderBottomColor="#9570FE"
            borderWidth="5"
            borderRadius="5"
            mb="5"></Box>
          <HStack space="5">
            {/* LEFT */}
            <Box>
              {alphabet.map((alp, i) => {
                return (
                  <HStack key={String(i)} flexDirection="row">
                    {column1.map((num, index) => {
                      const seat = alp + num;
                      return (
                        <Pressable
                          key={String(index)}
                          borderRadius="5"
                          m="0.5"
                          h="5"
                          w="5"
                          bg={selectSeat.includes(seat) ? '#C539B4' : '#D6D8E7'}
                          onPress={() => handleChooseSeat(seat)}
                        />
                      );
                    })}
                  </HStack>
                );
              })}
            </Box>
            {/* RIGHT */}
            <Box>
              {alphabet.map((alp, i) => {
                return (
                  <HStack key={String(i)} flexDirection="row">
                    {column2.map((num, index) => {
                      const seat = alp + num;
                      return (
                        <Pressable
                          key={String(index)}
                          borderRadius="5"
                          m="0.5"
                          h="5"
                          w="5"
                          bg={selectSeat.includes(seat) ? '#C539B4' : '#D6D8E7'}
                          onPress={() => handleChooseSeat(seat)}
                        />
                      );
                    })}
                  </HStack>
                );
              })}
            </Box>
          </HStack>
          <Text my="5" fontWeight="bold" fontSize="lg">
            Seating key
          </Text>
          <HStack space="10">
            <VStack space="3">
              <HStack space="3" alignItems="center">
                <ArrowDown size={50} color="#14142B" />
                <Text fontSize="lg">A - G</Text>
              </HStack>
              <HStack space="3" alignItems="center">
                <Box w="5" h="5" borderRadius="5" bgColor="#D6D8E7" />
                <Text fontSize="lg" color="#4E4B66">
                  Available
                </Text>
              </HStack>
              <HStack space="3" alignItems="center">
                <Box w="5" h="5" borderRadius="5" bgColor="#6E7191" />
                <Text fontSize="lg" color="#4E4B66">
                  Sold
                </Text>
              </HStack>
            </VStack>
            <VStack space="3">
              <HStack space="3" alignItems="center">
                <ArrowRight size={50} color="#14142B" />
                <Text fontSize="lg">1 - 14</Text>
              </HStack>
              <HStack space="3" alignItems="center">
                <Box w="5" h="5" borderRadius="5" bgColor="#C539B4" />
                <Text fontSize="lg" color="#4E4B66">
                  Selected
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
        <Text fontSize="2xl" fontWeight="bold" mb="5" pt="10">
          Order Info
        </Text>
        <VStack
          bg="white"
          borderRadius="10"
          py="10"
          px="3"
          alignItems="center"
          space="3">
          <Image source={cinemaPicture} alt="ticket" />
          <Text fontWeight="bold" fontSize="3xl">
            {cinemaName} Cinema
          </Text>
          <Text fontWeight="bold" fontSize="xl">
            {movieTitle}
          </Text>
          <VStack w="100%" mt="3" space="3">
            <HStack justifyContent="space-between">
              <Text fontSize="lg" color="#6B6B6B">
                {fixDate}
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="#14142B">
                {time.split(':')[0] + ':' + time.split(':')[1] + ' WIB'}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text fontSize="lg" color="#6B6B6B">
                One ticket price
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="#14142B">
                Rp {Number(price).toLocaleString('id')}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text fontSize="lg" color="#6B6B6B">
                Seat Choosed
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="#14142B">
                {selectSeat.length ? selectSeat.join(', ') : '-'}
              </Text>
            </HStack>
          </VStack>
          <Box
            borderBottomWidth="1"
            w="100%"
            py="3"
            mb="3"
            borderBottomColor="#E6E6E6"></Box>
          <HStack justifyContent="space-between" w="100%">
            <Text fontSize="2xl" fontWeight="bold">
              Total Payment
            </Text>
            <Text fontSize="3xl" fontWeight="bold" color="#C539B4">
              Rp {totalPrice}
            </Text>
          </HStack>
        </VStack>
        <Button
          mt="10"
          bgColor="#C539B4"
          borderRadius="10"
          fontWeight="bold"
          fontSize="3xl"
          onPress={() => handleCheckoutNow(totalPrice)}>
          <Text fontSize="lg" fontWeight="bold" color="white">
            Checkout Now
          </Text>
        </Button>
        <Text fontSize="xl" color="red.500" textAlign='center' fontWeight='bold' mt='5'>{errorMessage}</Text>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default Order;
