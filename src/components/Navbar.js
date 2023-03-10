import {
  HStack,
  Text,
  View,
  Image,
  Pressable,
  VStack,
  Input,
  Box,
} from 'native-base';
import React from 'react';
import Logo from '../images/logo.png';
import {AlignRight, Search} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/reducers/auth';

const Navbar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <HStack
        justifyContent="space-between"
        bg="#C539B4"
        alignItems="center"
        px="5"
        py="5">
        <Text fontSize="lg" fontWeight="bold" color="white">
          CINEMNAR
        </Text>
        <Pressable onPress={() => setToggle(!toggle)}>
          <AlignRight size={50} color="#fff" />
        </Pressable>
      </HStack>
      {toggle && (
        <VStack
          position="absolute"
          top="20"
          px="5"
          py="5"
          zIndex="100"
          bg="white"
          width="100%"
          space="5"
          justifyContent="center">
          <HStack bg="white" width="100%" alignItems="center" space="2">
            <Box width="100%" mt="2">
              <Search
                size={50}
                color="#6E7191"
                style={{position: 'absolute', left: 10, top: 10}}
              />
              <Input flex="1" placeholder="Search..." pl="10"></Input>
            </Box>
          </HStack>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              Home
            </Text>
          </Pressable>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Pressable onPress={() => navigation.navigate('ViewAll')}>
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              List Movie
            </Text>
          </Pressable>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              Profile
            </Text>
          </Pressable>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Pressable onPress={() => dispatch(logout())}>
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              Logout
            </Text>
          </Pressable>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text color="#6E7191" textAlign="center">
            ?? 2023 Cinemnar. All Rights Reserved.
          </Text>
        </VStack>
      )}
    </>
  );
};

const NavbarAdmin = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <HStack
        justifyContent="space-between"
        bg="darkBlue.500"
        alignItems="center"
        px="5"
        py="5">
        <Text fontSize="lg" fontWeight="bold" color="white">
          CINEMNAR
        </Text>
        <Pressable onPress={() => setToggle(!toggle)}>
          <AlignRight size={50} color="#fff" />
        </Pressable>
      </HStack>
      {toggle && (
        <VStack
          position="absolute"
          top="20"
          px="5"
          py="5"
          zIndex="100"
          bg="white"
          width="100%"
          space="5"
          justifyContent="center">
          <HStack bg="white" width="100%" alignItems="center" space="2">
            <Box width="100%" mt="2">
              <Search
                size={50}
                color="#6E7191"
                style={{position: 'absolute', left: 10, top: 10}}
              />
              <Input flex="1" placeholder="Search..." pl="10"></Input>
            </Box>
          </HStack>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text fontWeight="bold" fontSize="lg" textAlign="center">
            Dashboard
          </Text>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text fontWeight="bold" fontSize="lg" textAlign="center">
            Manage Movie
          </Text>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text fontWeight="bold" fontSize="lg" textAlign="center">
            Manage Schedule
          </Text>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text fontWeight="bold" fontSize="lg" textAlign="center">
            Profile
          </Text>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text fontWeight="bold" fontSize="lg" textAlign="center">
            Logout
          </Text>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text color="#6E7191" textAlign="center">
            ?? 2023 Cinemnar. All Rights Reserved.
          </Text>
        </VStack>
      )}
    </>
  );
};

const NavbarBeforeLogin = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <HStack
        justifyContent="space-between"
        bg="darkBlue.500"
        alignItems="center"
        px="5"
        py="5">
        <Text fontSize="lg" fontWeight="bold" color="white">
          CINEMNAR
        </Text>
        <Pressable onPress={() => setToggle(!toggle)}>
          <AlignRight size={50} color="#fff" />
        </Pressable>
      </HStack>
      {toggle && (
        <VStack
          position="absolute"
          top="20"
          px="5"
          py="5"
          zIndex="100"
          bg="white"
          width="100%"
          space="5"
          justifyContent="center">
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text fontWeight="bold" fontSize="lg" textAlign="center">
            Home
          </Text>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text fontWeight="bold" fontSize="lg" textAlign="center">
            List Movie
          </Text>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text fontWeight="bold" fontSize="lg" textAlign="center">
            Sign In
          </Text>
          <Box borderColor="#DEDEDE" borderWidth="1" />
          <Text color="#6E7191" textAlign="center">
            ?? 2023 Cinemnar. All Rights Reserved.
          </Text>
        </VStack>
      )}
    </>
  );
};

export default Navbar;
