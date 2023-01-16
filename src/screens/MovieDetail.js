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
  Modal,
  Pressable,
} from 'native-base';
import React, {Component, useState} from 'react';
import {Calendar, ChevronDown, MapPin} from 'react-native-feather';
import Spiderman from '../images/imgSpiderman.png';
import DatePicker from 'react-native-date-picker';
import ebv from '../images/imgEbv.png';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import http from '../helpers/http';
import moment from 'moment/moment';
import CalendarPicker from 'react-native-calendar-picker';
import {transaction} from '../redux/reducers/transaction';
import jwt_decode from 'jwt-decode';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MovieDetail = ({idMovie}) => {
  const route = useRoute();

  const getId = route.params.idMovie;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //FETCHING MOVIE ID
  const [movieId, setMovieId] = React.useState({});
  const fetchMovieId = async () => {
    try {
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

  const minDate = new Date(); // Today
  const maxDate = new Date(2023, 6, 3);
  const token = useSelector(state => state.auth.token);
  const {id} = jwt_decode(token);
  const movieTitle = movieId?.title
  const [cinema, setCinema] = React.useState([]);
  const [selectCity, setSelectCity] = React.useState('');
  const [selectDate, setSelectDate] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [selectedCinema, setSelectedCinema] = React.useState(null);
  //handle select time
  const handleSelectTime = (item, cinemaId) => {
    setSelectedTime(item);
    setSelectedCinema(cinemaId);
  };

  //FETCHING CINEMA
  const fetchCinema = async () => {
    try {
      const response = await http(token).get(
        `/movieDetail/${getId}/schedules?city=${selectCity}&date=${selectDate}`,
      );
      setCinema(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchCinema();
  }, [selectCity, selectDate]);

  //handlesubmit book now
  const handleSubmitBookNow = async (
    cinemaName,
    price,
    movieScheduleId,
    cinemaPicture,
  ) => {
    try {
      dispatch(
        transaction({
          bookingDate: selectDate,
          userId: id,
          movieId: getId,
          cinemaId: selectedCinema,
          time: selectedTime,
          cinemaName,
          price,
          movieScheduleId,
          cinemaPicture,
          movieTitle,
        }),
      );
      navigation.navigate('Order');
    } catch (err) {
      console.log(err);
    }
  };
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
        <Pressable
          onPress={() => setShowModal(true)}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          borderWidth="1"
          borderRadius={4}
          borderColor="#EFF0F6"
          bg="#EFF0F6"
          px="3"
          width={180}
          height={35}>
          <Calendar color="black" size={18} />
          <Text ml="3" flex={1}>
            {selectDate ? selectDate : 'Set a date'}
          </Text>
          <ChevronDown color="black" size={18} />
        </Pressable>
        <Modal
          size="full"
          isOpen={showModal}
          onClose={() => setShowModal(false)}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Body backgroundColor="white">
              <Box backgroundColor="white" pt="12">
                <CalendarPicker
                  minDate={minDate}
                  maxDate={maxDate}
                  todayBackgroundColor="#f2e6ff"
                  selectedDayColor="#C539B4"
                  selectedDayTextColor="#FFFFFF"
                  onDateChange={value =>
                    setSelectDate(String(moment(value).format()).split('T')[0])
                  }
                />
              </Box>
            </Modal.Body>
          </Modal.Content>
        </Modal>
        {/* CITY */}
        <Box width="50%" position="relative">
          <Select
            textAlign="center"
            variant="rounded"
            accessibilityLabel="Sort"
            placeholder="Set a city"
            bg="#EFF0F6"
            onValueChange={e => setSelectCity(e)}
            _selectedItem={{
              bg: 'teal.600',
            }}
            mt="1">
            <Select.Item label="yogyakarta" value="yogyakarta" />
            <Select.Item label="purwokerto" value="purwokerto" />
          </Select>
          <MapPin
            size={50}
            color="black"
            style={{position: 'absolute', top: 13, left: 20}}
          />
        </Box>
        {/* TICKET */}
        {cinema?.map(cinema => (
          <VStack bg="white" width="100%" py="7" key={cinema.id}>
            <VStack alignItems="center" space="3">
              <Image
                alt="ticket"
                source={{uri: cinema?.picture}}
                width="200"
                height="50"
                resizeMode="contain"
              />
              <Text color="#AAAAAA" textAlign="center">
                {cinema?.address}
              </Text>
            </VStack>
            <VStack px="5" space="5">
              <Box mt="5" borderColor="#DEDEDE" borderBottomWidth="2"></Box>
              <Box
                flexDirection="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center">
                {cinema?.time.map((item, index) => {
                  return (
                    <Pressable
                      width={75}
                      py="1.5"
                      key={String(index)}
                      onPress={() => handleSelectTime(item, cinema.id)}>
                      <Text
                        color={
                          selectedTime === item && selectedCinema === cinema.id
                            ? '#C539B4'
                            : 'black'
                        }
                        fontWeight={
                          selectedTime === item && selectedCinema === cinema.id
                            ? 'bold'
                            : ''
                        }
                        fontSize={
                          selectedTime === item && selectedCinema === cinema.id
                            ? 'lg'
                            : 'md'
                        }>
                        {item.split(':')[0] + ':' + item.split(':')[1] + ' WIB'}
                      </Text>
                    </Pressable>
                  );
                })}
              </Box>

              <HStack justifyContent="space-between">
                <Text fontSize="lg">Price</Text>
                <Text fontSize="xl" fontWeight="bold">
                  Rp {Number(cinema.price).toLocaleString('id')}/seat
                </Text>
              </HStack>
              <Button
                onPress={() =>
                  handleSubmitBookNow(
                    cinema?.name,
                    cinema?.price,
                    cinema?.moviescheduleid,
                    cinema?.picture,
                  )
                }
                bgColor="#C539B4"
                alignItems="center"
                justifyContent="center">
                <Text fontSize="lg" fontWeight="bold" color="white">
                  Book now
                </Text>
              </Button>
            </VStack>
          </VStack>
        ))}
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
