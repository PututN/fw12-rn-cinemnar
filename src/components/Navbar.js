import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Logo from '../images/logo.png';
import {Image, Header} from '@rneui/themed';
import {AlignRight} from 'react-native-feather';

export class Navbar extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingVertical: 10,
          backgroundColor: 'blue',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            paddingVertical: 20,
          }}>
          CINEMNAR
        </Text>
        <AlignRight size={50} color="#fff" style={{paddingVertical: 20}} />
      </View>
    );
  }
}

export default Navbar;
