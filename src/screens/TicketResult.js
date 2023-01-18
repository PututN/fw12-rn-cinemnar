import {
  Text,
  HStack,
  VStack,
  Image,
  Stack,
  View,
  Box,
  ScrollView,
} from 'native-base';
import React, {Component} from 'react';
import {useRoute} from '@react-navigation/native';
import http from '../helpers/http';
import {useSelector} from 'react-redux';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import QR from '../images/QR.png';

const TicketResult = ({idTicket}) => {
  const route = useRoute();
  const getIdTicket = route.params.idTicket;

  //FETCHING GET HISTORY ID
  //FETCHING PROFILE ID
  const [ticket, setTicket] = React.useState({});
  const token = useSelector(state => state.auth.token);
  const fetchTicket = async () => {
    try {
      const response = await http(token).get(
        `/transaction/history/${getIdTicket}`,
      );
      setTicket(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    if (token) {
      fetchTicket();
    }
  }, [token]);
  console.log(ticket)

  return (
    <ScrollView>
      <Navbar />
      <VStack bg="#F5F6F8" p="10">
        <VStack
          bg="white"
          p="5"
          borderRadius="10"
          position="relative"
          space="10">
          <VStack alignItems="center">
            <Stack>
              <Image source={QR} alt="QR" />
            </Stack>
            <Stack direction={'row'} alignItems={'center'}>
              <Box
                borderBottomWidth={2}
                flex={1}
                borderStyle={'dashed'}
                borderBottomColor={'#F5F6F8'}
              />
              <View
                style={{width: 44, height: 44, borderRadius: 44, left: -40}}
                position={'absolute'}
                left={-22}
                backgroundColor={'#F5F6F8'}
              />
              <View
                position={'absolute'}
                right={-22}
                style={{width: 44, height: 44, borderRadius: 44, right: -40}}
                backgroundColor={'#F5F6F8'}
              />
            </Stack>
          </VStack>
          <HStack justifyContent="space-between">
            <VStack space="5">
              <VStack space="2">
                <Text color="#AAAAAA">Movie</Text>
                <Text fontSize="lg" fontWeight="bold">
                  Spider-Man: ..
                </Text>
              </VStack>
              <VStack space="2">
                <Text color="#AAAAAA">Date</Text>
                <Text fontSize="lg" fontWeight="bold">
                  07 Jul
                </Text>
              </VStack>

              <VStack space="2">
                <Text color="#AAAAAA">Count</Text>
                <Text fontSize="lg" fontWeight="bold">
                  3 pcs
                </Text>
              </VStack>
            </VStack>
            <VStack space="5">
              <VStack space="2">
                <Text color="#AAAAAA">Category</Text>
                <Text fontSize="lg" fontWeight="bold">
                  Action
                </Text>
              </VStack>
              <VStack space="2">
                <Text color="#AAAAAA">Time</Text>
                <Text fontSize="lg" fontWeight="bold">
                  02:00pm
                </Text>
              </VStack>

              <VStack space="2">
                <Text color="#AAAAAA">Seats</Text>
                <Text fontSize="lg" fontWeight="bold">
                  C4, C5, C6
                </Text>
              </VStack>
            </VStack>
          </HStack>
          <HStack
            justifyContent="space-between"
            borderWidth="1"
            p="4"
            borderColor="#DEDEDE">
            <Text fontSize="xl" fontWeight="bold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              $30.00
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default TicketResult;
