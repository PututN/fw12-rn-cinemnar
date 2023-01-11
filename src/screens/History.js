import {
  Text,
  View,
  HStack,
  VStack,
  Image,
  Box,
  Button,
  ScrollView,
} from 'native-base';
import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {useNavigate} from '@react-navigation/native';

import CineOne from '../images/imgCineOne.png';
import Ebv from '../images/imgEbv.png';

const History = () => {
  const navigation = useNavigate();
  return (
    <ScrollView>
      <Navbar />
      <VStack bg="#E5E5E5">
        <HStack
          justifyContent="space-around"
          bg="darkBlue.500"
          p="5"
          borderBottomRadius="20">
          <Button onPress={() => navigation.navigate('Profile')}>
            <Text color="#AAAAAA" fontWeight="bold" fontSize="lg">
              Details Account
            </Text>
          </Button>
          <Button onPress={() => navigation.navigate('History')}>
            <Text
              color="white"
              fontWeight="bold"
              fontSize="lg"
              pb="2"
              borderBottomColor="white"
              borderBottomWidth="3">
              Order History
            </Text>
          </Button>
        </HStack>
      </VStack>
      <VStack bg="#E5E5E5" px="3" py="5" space="5">
        <VStack bg="white" borderRadius="10" space="3" py="6">
          <VStack px="6" space="3">
            <Image source={CineOne} alt="ticket" />
            <Text fontSize="lg" color="#AAAAAA">
              Tuesday, 07 July 2020 - 04:30pm
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              Spider-Man: Homecoming
            </Text>
          </VStack>
          <Box borderWidth="1" borderColor="#DEDEDE" my="3"></Box>
          <Box px="6">
            <Button
              onPress={() => navigation.navigate('TicketResult')}
              backgroundColor="blue.500"
              borderRadius="10"
              fontWeight="bold">
              Ticket in active
            </Button>
          </Box>
        </VStack>
        <VStack bg="white" borderRadius="10" space="3" py="6">
          <VStack px="6" space="3">
            <Image source={Ebv} alt="ticket" />
            <Text fontSize="lg" color="#AAAAAA">
              Monday, 14 June 2020 - 02:00pm
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              Avengers: End Game
            </Text>
          </VStack>
          <Box borderWidth="1" borderColor="#DEDEDE" my="3"></Box>
          <Box px="6">
            <Button
              backgroundColor="#6E7191"
              borderRadius="10"
              fontWeight="bold">
              Ticket in expired
            </Button>
          </Box>
        </VStack>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default History;
