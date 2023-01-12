import {
  Text,
  View,
  VStack,
  HStack,
  Image,
  Box,
  Button,
  Input,
  Pressable,
  ScrollView,
} from 'native-base';
import React, {useEffect} from 'react';
import {Eye, EyeOff} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/reducers/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import http from '../helpers/http';

import lion from '../images/imgLionKing.png';
import user from '../images/user.png';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  //FETCHING PROFILE
  const [profile, setProfile] = React.useState({});
  const token = useSelector(state => state.auth.token);
  // const decode = jwt_decode(token);
  const fetchProfile = async () => {
    try {
      // console.log('coba lagi pak')
      const response = await http(token).get('/profile');
      // console.log('masuk ga')
      // console.log(response.data)
      setProfile(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };

  // console.log(token)
  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);
  // console.log(profile)
  return (
    <ScrollView>
      <Navbar />
      <VStack bg="#E5E5E5">
        <HStack
          justifyContent="space-around"
          bg="#C539B4"
          p="5"
          borderBottomRadius="20">
          <Pressable
            onPress={() => navigation.navigate('Profile')}
            bgColor="#C539B4">
            <Text
              color="white"
              fontWeight="bold"
              fontSize="lg"
              pb="2"
              borderBottomColor="white"
              borderBottomWidth="3">
              Details Account
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('History')}
            bgColor="#C539B4">
            <Text color="#AAAAAA" fontWeight="bold" fontSize="lg">
              Order History
            </Text>
          </Pressable>
        </HStack>
      </VStack>
      <VStack bg="#E5E5E5" px="3" py="5" space="5">
        <VStack bg="white" borderRadius="10" space="3">
          <Text fontSize="lg" p="5">
            INFO
          </Text>
          <VStack alignItems="center" space="3">
            <Box shadow="9">
              {profile?.picture ? (
                <Image
                  source={{uri: profile?.picture}}
                  alt={profile?.firstName}
                  width="100"
                  height="100"
                  borderRadius="full"
                  shadow="9"
                />
              ) : (
                <Image
                  source={user}
                  alt={profile?.firstName}
                  width="100"
                  height="100"
                  borderRadius="full"
                  shadow="9"
                />
              )}
            </Box>
            <Text fontSize="xl" fontWeight="bold">
              {profile?.firstName}  {profile?.lastName}
            </Text>
            <Text color="#4E4B66">Moviegoers</Text>
          </VStack>
          <Box borderWidth="1" borderColor="#DEDEDE"></Box>
          <Box alignItems="center" p="5">
            <Button
              width="50%"
              borderRadius="10"
              bgColor="#C539B4"
              onPress={() => dispatch(logout())}>
              <Text fontSize="lg" fontWeight="bold" color="white">
                Log out
              </Text>
            </Button>
          </Box>
        </VStack>
        <Text fontSize="2xl" fontWeight="bold">
          Account Settings
        </Text>
        <VStack bg="white" p="5" borderRadius="10" space="5">
          <VStack space="2">
            <Text fontSize="lg">Details Information</Text>
            <Box borderWidth="1" borderColor="#DEDEDE"></Box>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">Full Name</Text>
            <Input
              placeholder="Jonas El Rodriguez"
              borderColor="black"
              borderRadius="10"></Input>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">E-mail</Text>
            <Input
              placeholder="jonasrodrigu123@gmail.com"
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
        </VStack>
        <Button
          mb="10"
          borderRadius="10"
          fontWeight="bold"
          fontSize="3xl"
          bgColor="#C539B4">
          <Text fontSize="lg" fontWeight="bold" color="white">
            Update Changes
          </Text>
        </Button>

        <VStack bg="white" p="5" borderRadius="10" space="5">
          <VStack space="2">
            <Text fontSize="lg">Account and Privacy</Text>
            <Box borderWidth="1" borderColor="#DEDEDE"></Box>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">New Password</Text>
            <Box position="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                borderColor="black"
                placeholder="Write your new password"
                borderRadius="10"></Input>
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <Eye
                    color="black"
                    position="absolute"
                    style={{bottom: 10, right: 20}}
                  />
                ) : (
                  <EyeOff
                    color="black"
                    position="absolute"
                    style={{bottom: 10, right: 20}}
                  />
                )}
              </Pressable>
            </Box>
            <Text fontSize="lg">Confirm Password</Text>
            <Box position="relative">
              <Input
                type={showPassword2 ? 'text' : 'password'}
                borderColor="black"
                placeholder="Write your confirm password"
                borderRadius="10"></Input>
              <Pressable onPress={() => setShowPassword2(!showPassword2)}>
                {showPassword2 ? (
                  <Eye
                    color="black"
                    position="absolute"
                    style={{bottom: 10, right: 20}}
                  />
                ) : (
                  <EyeOff
                    color="black"
                    position="absolute"
                    style={{bottom: 10, right: 20}}
                  />
                )}
              </Pressable>
            </Box>
          </VStack>
        </VStack>

        <Button
          mb="10"
          borderRadius="10"
          fontWeight="bold"
          fontSize="3xl"
          bgColor="#C539B4">
          <Text fontSize="lg" fontWeight="bold" color="white">
            Update Changes
          </Text>
        </Button>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default Profile;
