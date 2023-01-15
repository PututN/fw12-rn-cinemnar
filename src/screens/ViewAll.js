import {
  Text,
  View,
  NativeBaseProvider,
  Select,
  CheckIcon,
  Input,
  Image,
  Button,
  FlatList,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  Box,
} from 'native-base';
import React, {Component, useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlackWidow from '../images/imgBlackWidow.png';
import Witches from '../images/imgWitches.png';
import {useNavigation} from '@react-navigation/native';
import {ArrowDownLeft, ArrowLeft, ArrowRight} from 'react-native-feather';
import http from '../helpers/http';

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
const data = [
  {
    id: 1,
    picture: BlackWidow,
    title: 'Black Widow',
    genre: 'Action, Adventure, Sci-Fi',
  },
  {
    id: 2,
    picture: Witches,
    title: 'The Witches',
    genre: 'Adventure, Comedy, Family',
  },
  {
    id: 3,
    picture: BlackWidow,
    title: 'Black Widow',
    genre: 'Action, Adventure, Sci-Fi',
  },
  {
    id: 4,
    picture: Witches,
    title: 'The Witches',
    genre: 'Adventure, Comedy, Family',
  },
];

const ViewAll = () => {
  const navigation = useNavigation();
  // fetching all movie
  const [ViewAll, setViewAll] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchViewAll = async () => {
      try {
        const response = await http().get(
          `/movies?page=${page}&limit=4&sort=${sort}&sortBy=title&search=${search}`,
        );
        setViewAll(response?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchViewAll();
  }, [page, sort, search]);
  //handle page
  const pagePrev = () => {
    setPage(page - 1);
  };
  const pageNext = () => {
    setPage(page + 1);
  };

  // console.log(ViewAll)

  return (
    <>
      <ScrollView>
        <Navbar />
        <View style={{backgroundColor: '#E5E5E5', marginBottom: 30}}>
          <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
            <Text fontSize="xl" style={{fontWeight: 'bold'}}>
              List Movie
            </Text>
            {/* FILTER */}
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <View style={{width: '30%', marginRight: 10}}>
                <Select
                  selectedValue={sort}
                  onValueChange={value => setSort(value)}
                  variant="rounded"
                  accessibilityLabel="Sort"
                  placeholder="Sort"
                  _selectedItem={{
                    bg: 'teal.600',
                    endIcon: <CheckIcon size={5} />,
                  }}
                  mt="1">
                  <Select.Item label="A-Z" value="ASC" />
                  <Select.Item label="Z-A" value="DESC" />
                </Select>
              </View>
              <View style={{width: '60%'}}>
                <Input
                  onChangeText={value => setSearch(value)}
                  variant="rounded"
                  placeholder="Search Movie Name..."
                  style={{width: '90%'}}
                />
              </View>
            </View>
            {/* MONTH */}
            <ScrollView horizontal>
              <View style={{flexDirection: 'row'}}>
                {month.map(month => (
                  <View
                    p="3"
                    mr="3"
                    borderWidth="1"
                    borderRadius="5"
                    space="2"
                    alignItems="center"
                    justifyContent="center"
                    width="100"
                    key={month.id}>
                    <Text fontWeight="bold" fontSize="lg">
                      {month.time}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
            {/* MOVIE VIEW ALL */}
            {ViewAll?.map(movie => {
              return (
                <Box
                  key={String(movie?.id)}
                  // width="160"
                  borderWidth="1"
                  borderColor="#DEDEDE"
                  backgroundColor="white"
                  p="5"
                  mx="20"
                  my="5"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="10">
                  <Image
                    source={{uri: movie?.picture}}
                    alt="Movie"
                    width="150"
                    height="200"
                    mb="3"
                    borderRadius={8}
                    resizeMode="contain"
                  />
                  <VStack alignItems="center" space="3">
                    <Text fontSize="lg" fontWeight="bold" textAlign="center">
                      {movie?.title}
                    </Text>
                    <Text textAlign="center">{movie?.genre}</Text>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('MovieDetail', {idMovie: movie.id})
                      }
                      bgColor="#C539B4"
                      borderRadius="4"
                      justifyContent="center"
                      alignItems="center"
                      width="125"
                      height="30px"
                      mb="1">
                      <Text fontSize="lg" fontWeight="bold" color="white">
                        Details
                      </Text>
                    </Pressable>
                  </VStack>
                </Box>
              );
            })}
            {/* <FlatList
              // ListHeaderComponent={ <Text>hai</Text>}
              // ListFooterComponent={ <Text>hello</Text>}
              numColumns="2"
              data={ViewAll}
              renderItem={({item}) => {
                return (
                  <HStack>
                    <VStack
                      mt="5"
                      mr="2"
                      borderWidth="1"
                      borderColor="black"
                      borderStyle="solid"
                      borderRadius="10"
                      width="180">
                      <VStack alignItems="center" p="2" space="3">
                        <Image
                          source={{uri: item.picture}}
                          alt={item.title}
                          width="160px"
                          height="250px"
                          borderRadius="10"
                        />
                        <VStack alignItems="center" space="3">
                          <Text
                            fontSize="lg"
                            fontWeight="bold"
                            textAlign="center">
                            {item.title}
                          </Text>
                          <Text textAlign="center">{item.genre}</Text>
                          <Button
                            bgColor="#C539B4"
                            onPress={() =>
                              navigation.navigate('MovieDetail', {idMovie: data.id})
                            }>
                            <Text fontSize="lg" fontWeight="bold" color="white">
                              Details
                            </Text>
                          </Button>
                        </VStack>
                      </VStack>
                    </VStack>
                  </HStack>
                );
              }}
            />  */}
          </View>
          {/* PAGE */}
          <HStack justifyContent="space-around" mb="10">
            {page > 1 ? (
              <Button onPress={pagePrev} bgColor="#C539B4">
                <ArrowLeft color="white" width="100" />
              </Button>
            ) : (
              <Button onPress={pagePrev} bgColor="#aaaa" isDisabled={true}>
                <ArrowLeft color="white" width="100" />
              </Button>
            )}
            <Button
              bgColor="#C539B4"
              onPress={pageNext}
              isDisabled={ViewAll.length < 4}>
              <ArrowRight color="white" width="100" />
            </Button>
          </HStack>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
};

export default ViewAll;
