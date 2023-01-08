import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Logo from '../images/logo.png';
import {Image, Header} from '@rneui/themed';
import {AlignRight} from 'react-native-feather';

export class Navbar extends Component {
  render() {
    return (
      <Header
        containerStyle={{
          backgroundColor: 'blue',
        }}
        leftComponent={
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              //   paddingHorizontal: 30,
              paddingTop: 20,
            }}>
            CINEMNAR
          </Text>
        }
        rightComponent={
          <AlignRight
            size={50}
            color="#fff"
            style={{paddingHorizontal: 30, marginTop: 20}}
          />
        }
      />
    );
  }
}

export default Navbar;
