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
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import http from '../helpers/http';
import moment from 'moment';

const History = () => {
  const navigation = useNavigation();

  //FETCHING hisotry transacion ID
  const [history, setHistory] = React.useState([]);
  const token = useSelector(state => state.auth.token);
  const fetchHistory = async () => {
    try {
      const response = await http(token).get('/transaction/history');
      setHistory(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    if (token) {
      fetchHistory();
    }
  }, [token]);

  console.log(history);
  //set booking date
  return (
    <ScrollView>
      <Navbar />
      <VStack bg="#E5E5E5">
        <HStack
          justifyContent="space-around"
          bg="#C539B4"
          p="5"
          borderBottomRadius="20">
          <Button
            onPress={() => navigation.navigate('Profile')}
            bgColor="#C539B4">
            <Text color="#AAAAAA" fontWeight="bold" fontSize="lg">
              Details Account
            </Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('History')}
            bgColor="#C539B4">
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
        {history?.map(item => {
          return (
            <VStack bg="white" borderRadius="10" space="3" py="6" key={item.id}>
              <VStack px="6" space="3">
                <Image
                  source={{uri: item?.picture}}
                  alt="ticket"
                  width="200"
                  height="50"
                  resizeMode="contain"
                />
                <Text fontSize="lg" color="#AAAAAA">
                  {moment(item?.bookingDate).format('LLLL').slice(0, 25)} -{' '}
                  {item.time.split(':')[0] +
                    ':' +
                    item.time.split(':')[1] +
                    ' WIB'}
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  {item?.title}
                </Text>
              </VStack>
              <Box borderWidth="1" borderColor="#DEDEDE" my="3"></Box>
              <Box px="6">
                <Button
                  onPress={() =>
                    navigation.navigate('TicketResult', {idTicket: item.id})
                  }
                  bgColor="#C539B4"
                  borderRadius="10"
                  fontWeight="bold">
                  Ticket in active
                </Button>
              </Box>
            </VStack>
          );
        })}
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default History;
