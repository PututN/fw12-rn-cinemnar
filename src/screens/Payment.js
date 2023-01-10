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
  ScrollView
} from 'native-base';
import React, {Component} from 'react';
import {AlertTriangle} from 'react-native-feather';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import OVO from '../images/paymentOVO.png';
import Dana from '../images/paymentDana.png';
import Gopay from '../images/paymentGopay.png';
import Gpay from '../images/paymentGpay.png';
import Paypal from '../images/paymentPaypal.png';
import Visa from '../images/paymentVisa.png';

const Payment = () => {
  //   const payment = [
  //     {
  //       id: 1,
  //       name: 'OVO',
  //       picture: OVO,
  //     },
  //     {
  //       id: 2,
  //       name: 'Dana',
  //       picture: Dana,
  //     },
  //     {
  //       id: 3,
  //       name: 'Gopay',
  //       picture: Gopay,
  //     },
  //     {
  //       id: 4,
  //       name: 'Gpay',
  //       picture: Gpay,
  //     },

  //     {
  //       id: 5,
  //       name: 'Paypal',
  //       picture: Paypal,
  //     },
  //     {
  //       id: 6,
  //       name: 'Visa',
  //       picture: Visa,
  //     },
  //   ];

  return (
    <ScrollView>
      <Navbar />
      <VStack bg="#E5E5E5">
        <HStack
          justifyContent="space-between"
          bg="darkBlue.500"
          p="5"
          borderBottomRadius="20">
          <Text color="white" fontWeight="bold" fontSize="lg">
            Total Payment
          </Text>
          <Text color="white" fontWeight="bold" fontSize="2xl">
            $30
          </Text>
        </HStack>
      </VStack>
      <VStack bg="#E5E5E5" px="5" space="5" pt="10">
        <Text fontSize="2xl" fontWeight="bold">
          Payment Method
        </Text>
        <VStack bg="white" p="5" borderRadius="10" space="5">
          <HStack space="2" alignItems="center" justifyContent="center">
            <VStack
              borderWidth="1"
              borderRadius="10"
              px="3"
              py="2"
              space="2"
              alignItems="center"
              w="100">
              <Image source={OVO} alt="OVO" resizeMode="contain" />
            </VStack>
            <VStack
              borderWidth="1"
              borderRadius="10"
              px="3"
              py="2"
              space="2"
              alignItems="center"
              w="100">
              <Image source={Dana} alt="Dana" resizeMode="contain" />
            </VStack>
            <VStack
              borderWidth="1"
              borderRadius="10"
              px="3"
              py="2"
              space="2"
              alignItems="center"
              w="100">
              <Image source={Gopay} alt="Gopay" resizeMode="contain" />
            </VStack>
          </HStack>
          <HStack space="2" alignItems="center" justifyContent="center">
            <VStack
              borderWidth="1"
              borderRadius="10"
              px="3"
              py="2"
              space="2"
              alignItems="center"
              w="100">
              <Image source={Gpay} alt="Gpay" resizeMode="contain" />
            </VStack>
            <VStack
              borderWidth="1"
              borderRadius="10"
              px="3"
              py="2"
              space="2"
              alignItems="center"
              w="100">
              <Image source={Visa} alt="Visa" resizeMode="contain" />
            </VStack>
            <VStack
              borderWidth="1"
              borderRadius="10"
              px="3"
              py="2"
              space="2"
              alignItems="center"
              w="100">
              <Image source={Paypal} alt="Paypal" resizeMode="contain" />
            </VStack>
          </HStack>
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
              placeholder="Jonas El Rodrigues"
              borderRadius="10"
              borderColor="black"></Input>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">Email</Text>
            <Input
              placeholder="jonasrodri123@gmail.com"
              borderColor="black"
              borderRadius="10"></Input>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">Phone Number</Text>
            <HStack
              alignItems="center"
              justifyContent="center"
              px="5"
              borderWidth="1"
              borderColor="black"
              borderRadius="10">
              <Input
                width="20%"
                placeholder="+62"
                borderTopWidth="0"
                borderBottomWidth="0"
                borderLeftWidth="0"
                pt="2"
                borderRightColor="black"></Input>
              <Input
                width="80%"
                placeholder="81445687121"
                borderWidth="0"></Input>
            </HStack>
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
        <Button mb="10" borderRadius="10" fontWeight="bold" fontSize="3xl">
          Pay your order
        </Button>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default Payment;
