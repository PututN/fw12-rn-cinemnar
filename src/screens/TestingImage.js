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
      <FlatList
        // numColumns="2"
        data={ViewAll}
        ListHeaderComponent={<Navbar />}
        ListFooterComponent={<Footer />}
        ListEmptyComponent
        renderItem={({item}) => {
          return (
            <>
              <HStack key={item.id}>
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
                      <Text fontSize="lg" fontWeight="bold" textAlign="center">
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
            </>
          );
        }}
      />
    </>
  );
};

export default ViewAll;
