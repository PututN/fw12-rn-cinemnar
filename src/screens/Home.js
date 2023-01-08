import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import imgHomepage from '../images/imgHomepage.png';

export class Home extends Component {
  render() {
    return (
      <View>
        <Navbar />
        <View
          style={{
            marginVertical: 40,
            marginHorizontal: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{fontSize: 18}}>Nearest Cinema, Newest Movie,</Text>
            <Text style={{fontSize: 30, color: 'blue'}}>Find out now!</Text>
          <Image
            source={imgHomepage}
            style={{aspectRatio: 2, height: '100%', resizeMode: 'center'}}
          />
        </View>
      </View>
    );
  }
}

export default Home;
