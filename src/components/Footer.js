import {
  View,
  Text,
  Image,
  NativeBaseProvider,
  HStack,
  VStack,
  Pressable,
} from 'native-base';
import React, {Component} from 'react';
import Logo from '../images/logo.png';
import {Instagram, Youtube, Twitter, Facebook} from 'react-native-feather';
import imgCineOne from '../images/imgCineOne.png';
import imgEbv from '../images/imgEbv.png';
import imgHiflix from '../images/imgHiflix.png';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <VStack p="5">
        <Image source={Logo} size={150} alt="logo" style={{marginBottom: 20}} />
        <Text fontSize="sm" style={{maxWidth: '55%'}}>
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </Text>
        <Text
          fontSize="xl"
          style={{fontWeight: 'bold', marginBottom: 20, marginTop: 50}}>
          Explore
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Text style={{marginRight: 80}} fontSize="lg">
              Home
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ViewAll')}>
            <Text fontSize="lg">List Movie</Text>
          </Pressable>
        </View>
        <Text
          fontSize="xl"
          style={{fontWeight: 'bold', marginBottom: 20, marginTop: 50}}>
          Our Sponsor
        </Text>
        <HStack alignItems="center" space="5">
          <Image
            source={imgCineOne}
            alt="Sponsor"
            width="100"
            resizeMode="contain"
          />
          <Image
            source={imgEbv}
            alt="Sponsor"
            width="100"
            resizeMode="contain"
          />
          <Image
            source={imgHiflix}
            alt="Sponsor"
            width="100"
            resizeMode="contain"
            //   style={{resizeMode: 'contain'}}
          />
        </HStack>
        <Text
          fontSize="xl"
          style={{fontWeight: 'bold', marginBottom: 20, marginTop: 50}}>
          Explore
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Facebook size={50} color="#6E7191" style={{marginRight: 40}} />
          <Instagram size={50} color="#6E7191" style={{marginRight: 40}} />
          <Twitter size={50} color="#6E7191" style={{marginRight: 40}} />
          <Youtube size={50} color="#6E7191" style={{marginRight: 40}} />
        </View>
        <Text style={{color: '#6E7191', marginTop: 50}}>
          ?? 2023 Cinemnar. All Rights Reserved.
        </Text>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Footer;
