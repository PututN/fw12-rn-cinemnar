import {
  Text,
  Box,
  HStack,
  VStack,
  Image,
  Button,
  Select,
  CheckIcon,
  ScrollView,
} from 'native-base';
import React, {Component, useState} from 'react';
import {Calendar, MapPin} from 'react-native-feather';
import Spiderman from '../images/imgSpiderman.png';
import DatePicker from 'react-native-date-picker';
import ebv from '../images/imgEbv.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import http from '../helpers/http';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MovieDetail = ({idMovie}) => {
  const route = useRoute();

  const getId = route.params.idMovie;
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  //FETCHING MOVIE ID
  const [movieId, setMovieId] = React.useState({});
  const fetchMovieId = async () => {
    try {
      console.log('masuk pak');
      const response = await http().get(`/movies/${getId}`);
      setMovieId(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchMovieId();
  }, []);
  //setting release date
  let NewDate = new Date(movieId?.releaseDate).toDateString();
  let month = NewDate.split(' ')[1];
  let newDate = NewDate.split(' ')[2];
  let year = NewDate.split(' ')[3];

  //Setting duration
  let duration = movieId?.duration;
  let Hour = String(duration).split(':').slice(0, 1).join(':');
  let Minute = String(duration).split(':')[1];

  return (
    <ScrollView>
      <Navbar />
      <VStack alignItems="center" justifyContent="center">
        <Box
          p="5"
          borderWidth="1"
          borderRadius="10"
          borderColor="#DEDEDE"
          marginY="5">
          <Image
            source={{uri: movieId?.picture}}
            alt="picture"
            width="200"
            height="300"
            resizeMode="cover"
            borderRadius="10"
          />
        </Box>
        {/* DETAILS MOVIE */}
        <VStack space="2">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            {movieId?.title}
          </Text>
          <Text fontWeight="normal" color="#4E4B66" textAlign="center">
            {movieId?.genre}
          </Text>
        </VStack>
      </VStack>
      <VStack px="3">
        <HStack justifyContent="space-between" py="8">
          <VStack space="5">
            <VStack space="2">
              <Text fontWeight="normal" color="#4E4B66">
                Relase date
              </Text>
              <Text fontWeight="600" flexWrap="wrap" fontSize="lg">
                {month} {newDate}, {year}
              </Text>
            </VStack>
            <VStack space="2">
              <Text fontWeight="normal" color="#4E4B66">
                Duration
              </Text>
              <Text fontWeight="600" fontSize="lg" flexWrap="wrap">
                {Hour} Hours {Minute} Minutes
              </Text>
            </VStack>
          </VStack>
          <VStack space="5" width="50%">
            <VStack space="2">
              <Text fontWeight="normal" color="#4E4B66">
                Directed by
              </Text>
              <Text fontWeight="600" fontSize="lg" flexWrap="wrap">
                {movieId?.director}
              </Text>
            </VStack>
            <VStack space="2">
              <Text fontWeight="normal" color="#4E4B66">
                Casts
              </Text>
              <Text fontWeight="600" fontSize="lg" flexWrap="wrap">
                {movieId?.casts}
              </Text>
            </VStack>
          </VStack>
        </HStack>
        <Box borderBottomWidth="1" borderColor="#D6D8E7"></Box>
        <VStack space="3" py="8">
          <Text fontWeight="bold" fontSize="lg">
            Synopsis
          </Text>
          <Text color="#4E4B66">{movieId?.synopsis}</Text>
        </VStack>
      </VStack>
      {/* Showtimes and Tickets */}
      <VStack bg="#F5F6F8" px="3" py="5" space="4" alignItems="center">
        <Text textAlign="center" fontWeight="bold" fontSize="2xl">
          Showtimes and Tickets
        </Text>
        {/* DATE */}
        <Button
          title="Open"
          position="relative"
          onPress={() => setOpen(true)}
          bg="#EFF0F6"
          width="50%">
          <Text color="black" textAlign="left">
            Set a date
          </Text>
          <Calendar
            size={50}
            color="black"
            style={{position: 'absolute', left: -50, top: -5}}
          />
        </Button>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        {/* CITY */}
        <Box width="50%" position="relative">
          <Select
            textAlign="center"
            variant="rounded"
            accessibilityLabel="Sort"
            placeholder="Set a city"
            bg="#EFF0F6"
            _selectedItem={{
              bg: 'teal.600',
              //   endIcon: <CheckIcon size={5}  />,
            }}
            mt="1">
            <Select.Item label="Yogyakarta" value="yogyakarta" />
            <Select.Item label="Purwokerto" value="purwokerto" />
          </Select>
          <MapPin
            size={50}
            color="black"
            style={{position: 'absolute', top: 13, left: 20}}
          />
        </Box>
        {/* TICKET */}
        <VStack bg="white" width="100%" py="7">
          <VStack alignItems="center" space="3">
            <Image
              alt="ticket"
              source={ebv}
              width="200"
              height="50"
              resizeMode="contain"
            />
            <Text color="#AAAAAA">Whatever street No.12, South Purwokerto</Text>
          </VStack>
          <VStack px="5" space="5">
            <Box mt="5" borderColor="#DEDEDE" borderBottomWidth="2"></Box>
            <HStack space="8" alignItems="center" justifyContent="center">
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
            </HStack>
            <HStack space="8" alignItems="center" justifyContent="center">
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
            </HStack>

            <HStack justifyContent="space-between">
              <Text fontSize="lg">Price</Text>
              <Text fontSize="xl" fontWeight="bold">
                $10.00/seat
              </Text>
            </HStack>
            <Button
              onPress={() => navigation.navigate('Order')}
              bgColor="#C539B4"
              alignItems="center"
              justifyContent="center">
              <Text fontSize="lg" fontWeight="bold" color="white">
                Book now
              </Text>
            </Button>
          </VStack>
        </VStack>
        <VStack bg="white" width="100%" py="7">
          <VStack alignItems="center" space="3">
            <Image
              alt="ticket"
              source={ebv}
              width="200"
              height="50"
              resizeMode="contain"
            />
            <Text color="#AAAAAA">Whatever street No.12, South Purwokerto</Text>
          </VStack>
          <VStack px="5" space="5">
            <Box mt="5" borderColor="#DEDEDE" borderBottomWidth="2"></Box>
            <HStack space="8" alignItems="center" justifyContent="center">
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
            </HStack>
            <HStack space="8" alignItems="center" justifyContent="center">
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
              <Text flex="1">08.30am</Text>
            </HStack>

            <HStack justifyContent="space-between">
              <Text fontSize="lg">Price</Text>
              <Text fontSize="xl" fontWeight="bold">
                $10.00/seat
              </Text>
            </HStack>
            <Button
              onPress={() => navigation.navigate('Order')}
              bgColor="#C539B4"
              alignItems="center"
              justifyContent="center">
              <Text fontSize="lg" fontWeight="bold" color="white">
                Book now
              </Text>
            </Button>
          </VStack>
        </VStack>
        <HStack position="relative">
          <Box
            borderBottomColor="#DEDEDE"
            borderBottomWidth="1"
            width="25%"
            position="absolute"
            top="2.5"
            right="-150"
          />

          <Text bg="#F5F6F8" color="#5F2EEA" fontSize="lg" fontWeight="bold">
            view more
          </Text>
          <Box
            borderBottomColor="#DEDEDE"
            borderBottomWidth="1"
            width="25%"
            position="absolute"
            top="2.5"
            left="-150"
          />
        </HStack>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default MovieDetail;
