import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import imgHomepage from '../images/imgHomepage.png';
import Spiderman from '../images/imgSpiderman.png';
import Tenet from '../images/imgTenet.png';
import LionKing from '../images/imgLionKing.png';
import JohnWick from '../images/imgJohnWick.png';
import {
  View,
  Image,
  HStack,
  VStack,
  ScrollView,
  Button,
  Text,
  Input,
  NativeBaseProvider,
  Box,
  Pressable,
} from 'native-base';
import Footer from '../components/Footer';
import NavbarAdmin from '../components/NavbarAdmin';
import NavbarBeforeLogin from '../components/NavbarBeforeLogin';
import {useNavigation} from '@react-navigation/native';
import http from '../helpers/http';

const data = [
  {
    id: 1,
    picture: Spiderman,
    title: 'Spider-Man: Homecoming',
    genre: 'Action, Adventure, Sci-Fi',
  },
  {
    id: 2,
    picture: Tenet,
    title: 'Tenet',
    genre: 'Action, Adventure, Sci-Fi',
  },
  {
    id: 3,
    picture: LionKing,
    title: 'Lion King',
    genre: 'Animation, Adventure, Story',
  },
  {
    id: 4,
    picture: JohnWick,
    title: 'John Wick',
    genre: 'Action, Thriller, Sci-Fi',
  },
];
const month = [
  {
    id: 1,
    time: 'January',
  },
  {
    id: 2,
    time: 'February',
  },
  {
    id: 3,
    time: 'March',
  },
  {
    id: 4,
    time: 'April',
  },
  {
    id: 5,
    time: 'May',
  },
  {
    id: 6,
    time: 'June',
  },
  {
    id: 7,
    time: 'July',
  },
  {
    id: 8,
    time: 'August',
  },
  {
    id: 9,
    time: 'September',
  },
  {
    id: 10,
    time: 'October',
  },
  {
    id: 11,
    time: 'November',
  },
  {
    id: 12,
    time: 'December',
  },
];
const Home = () => {
  //fetch now showing
  const [nowShowing, setNowShowing] = useState([]);
  useEffect(() => {
    const fetchNowShowing = async () => {
      try{
        const response = await http().get('/movies/nowShowing');
        setNowShowing(response?.data?.results)
      } catch (error) {
        console.log(error)
      }
    };
    fetchNowShowing()
  }, []);

  console.log(nowShowing);
  //fetch up coming
  const [upComing, setUpComing] = useState([]);
  useEffect(() => {
    fetchUpComing().then(data => {
      setUpComing(data?.results);
    });
  }, []);

  const fetchUpComing = async () => {
    const {data} = await http().get('/movies/upComingMovies');
    return data;
  };

  //dropdown image now showing
  const [focus, setFocus] = React.useState(null);
  const navigation = useNavigation();
  const toggleFocus = id => {
    if (focus === id) {
      setFocus(null);
    } else {
      setFocus(id);
    }
  };
  return (
    <ScrollView>
      <Navbar />
      {/* <NavbarAdmin /> */}
      {/* <NavbarBeforeLogin /> */}
      {/* TOP SECTION */}
      <VStack my="30" justifyContent="center" space="5" px="5">
        <Text fontSize="lg">Nearest Cinema, Newest Movie,</Text>
        <Text fontSize="5xl" color="#5F2EEA">
          Find out now!
        </Text>
        <Image
          source={imgHomepage}
          style={{width: '100%', resizeMode: 'cover'}}
          alt="picture"
          // style={{width: 100, height: 40}}
        />
      </VStack>
      {/* NOW SHOWING */}
      <VStack bg="#D6D8E7">
        <HStack
          px="5"
          py="10"
          justifyContent="space-between"
          alignItems="center">
          <Text fontSize="2xl" fontWeight="bold" color="#752EEA">
            Now Showing
          </Text>
          <Pressable
            onPress={() => navigation.navigate('ViewAll')}
            fontSize="lg"
            color="blue">
            <Text fontSize="lg" color="blue">
              View All
            </Text>
          </Pressable>
        </HStack>
        <HStack px="5" py="5">
          <ScrollView horizontal height={focus ? '380px' : 'auto'}>
            <HStack space="3">
              {nowShowing.map(data => (
                <Pressable key={data.id} onPress={() => toggleFocus(data.id)}>
                  <Box
                    p="2"
                    borderWidth="1"
                    bg={focus === data.id ? 'white' : 'transparent'}
                    borderColor={focus === data.id ? '#dedede' : 'white'}
                    borderRadius="2">
                    <Image
                      source={{uri: data.picture}}
                      alt={data.title}
                      width="160px"
                      height="250px"
                    />
                    <Box position="relative">
                      {' '}
                      {focus === data.id && (
                        <VStack
                          bg="white"
                          width="110%"
                          position="absolute"
                          ml="-2"
                          p="4"
                          space="1"
                          alignItems="center">
                          <Text fontSize="lg" fontWeight="bold">
                            {data.title}
                          </Text>
                          <Text>{data.genre}</Text>
                          <Button
                            width="50%"
                            onPress={() => navigation.navigate('MovieDetail')}>
                            Details
                          </Button>
                        </VStack>
                      )}
                    </Box>
                  </Box>
                </Pressable>
              ))}
            </HStack>
          </ScrollView>
        </HStack>
      </VStack>
      {/* UPCOMING MOVIE */}
      <HStack justifyContent="space-between" p="5">
        <Text fontSize="2xl" fontWeight="bold">
          Upcoming Movies
        </Text>
        <Pressable onPress={() => navigation.navigate('ViewAll')}>
          <Text fontSize="lg" color="blue">
            View All
          </Text>
        </Pressable>
      </HStack>
      {/* MONTH */}
      <HStack px="5">
        <ScrollView horizontal>
          {month.map(month => (
            <HStack
              p="3"
              mr="3"
              borderWidth="1"
              borderRadius="5"
              space="2"
              key={month.id}>
              <Text fontWeight="bold">{month.time}</Text>
            </HStack>
          ))}
        </ScrollView>
      </HStack>
      {/* MOVIE UPCOMING */}
      <HStack p="5">
        <ScrollView horizontal>
          {upComing.map(data => (
            <View
              key={data.id}
              style={{
                // flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                // marginTop: 20,
                borderColor: 'black',
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 10,
                marginRight: 20,
                paddingVertical: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Image
                  source={{uri: data.picture}}
                  alt={data.title}
                  width="160px"
                  height="250px"
                />
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginVertical: 10,
                    }}>
                    {data.title}
                  </Text>
                  <View>
                    <Text>{data.genre}</Text>
                  </View>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <NativeBaseProvider>
                  <Button ize="md">Details</Button>
                </NativeBaseProvider>
              </View>
            </View>
          ))}
        </ScrollView>
      </HStack>
      {/* MOVIEGOERS */}
      <NativeBaseProvider>
        <View
          style={{
            marginHorizontal: 30,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'black',
            paddingHorizontal: 30,
            paddingVertical: 50,
          }}>
          <Text fontSize="lg">Be the vanguard of the</Text>
          <Text fontSize="5xl" style={{color: '#5F2EEA', marginBottom: 30}}>
            Moviegoers
          </Text>
          <Input variant="outline" placeholder="Enter Your Email" />
          <Button
            size="md"
            variant="solid"
            style={{width: '100%', marginTop: 20, marginBottom: 30}}>
            Join now
          </Button>
          <Text style={{color: '#6E7191', textAlign: 'center'}}>
            By joining you as a Tickitz member, we will always send you the
            latest updates via email .
          </Text>
        </View>
      </NativeBaseProvider>
      <Footer />
    </ScrollView>
  );
};

export default Home;
