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
import React, {Component} from 'react';
import Logo from '../images/logo.png';
import {AlignRight, Search} from 'react-native-feather';

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
            © 2023 Cinemnar. All Rights Reserved.
          </Text>
        </VStack>
      )}
    </>
  );
};

export default NavbarBeforeLogin;
