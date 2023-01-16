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
  const {bookingDate, cinemaName, cinemaPicture, movieTitle, time, price} =
    useSelector(state => state?.transaction);
//set date
const date = moment(bookingDate).format('LLLL').split(' ')
const day = date[0]
const month = date[1]
const newDate = date[2]
const year = date[3]
const fixDate = `${day} ${month} ${newDate} ${year}`
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
            <VStack
              flex="1"
              space="1"
              borderLeftWidth="1"
              pl="2"
              borderLeftColor="#00BA88">
              {/* LEFT */}
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack
                space="1"
                borderBottomColor="#ED2E7E"
                borderBottomWidth="1"
                pb="2">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
            </VStack>
            {/* RIGHT */}
            <VStack flex="1" space="1">
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack space="1">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
              <HStack
                space="1"
                borderBottomColor="#ED2E7E"
                borderBottomWidth="1"
                pb="2">
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
                <Pressable
                  bg="#D6D8E7"
                  w="5"
                  h="5"
                  borderRadius="5"></Pressable>
              </HStack>
            </VStack>
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
          <Image source={CinemaOne} alt="ticket" />
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
                C4, C5, C6
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
              $30
            </Text>
          </HStack>
        </VStack>
        <Button
          mt="10"
          bgColor="#C539B4"
          borderRadius="10"
          fontWeight="bold"
          fontSize="3xl"
          onPress={() => navigation.navigate('Payment')}>
          <Text fontSize="lg" fontWeight="bold" color="white">
            Checkout Now
          </Text>
        </Button>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default Order;
