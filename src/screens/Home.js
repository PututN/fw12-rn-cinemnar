import {View, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import imgHomepage from '../images/imgHomepage.png';
import Spiderman from '../images/imgSpiderman.png';
import Tenet from '../images/imgTenet.png';
import LionKing from '../images/imgLionKing.png';
import JohnWick from '../images/imgJohnWick.png';
import {Button, Text, Input, NativeBaseProvider} from 'native-base';
import Footer from '../components/Footer';

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
export class Home extends Component {
  render() {
    return (
      <NativeBaseProvider>
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
            style={{width: '100%', resizeMode: 'cover'}}
            // style={{width: 100, height: 40}}
          />
        </View>
        {/* NOW SHOWING */}
        <View style={{backgroundColor: '#D6D8E7'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 30,
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Now Showing</Text>
            <Text style={{fontSize: 17, color: 'blue'}}>View All</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 30,
              paddingHorizontal: 30,
            }}>
            <ScrollView horizontal>
              {data.map(data => (
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
                    paddingVertical: 5,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                    }}>
                    <Image source={data.picture} />
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
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        {/* UPCOMING MOVIE */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Upcoming Movies
          </Text>
          <Text style={{fontSize: 17, color: 'blue'}}>View All</Text>
        </View>
        {/* MONTH */}
        <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
          <ScrollView horizontal>
            {month.map(month => (
              <View
                key={month.id}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginRight: 10,
                }}>
                <Text style={{fontWeight: '800'}}>{month.time}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 30,
            paddingHorizontal: 30,
          }}>
          <ScrollView horizontal>
            {data.map(data => (
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
                  <Image source={data.picture} />
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
        </View>
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
            <Text style={{color: '#6E7191', textAlign:"center"}}>
              By joining you as a Tickitz member, we will always send you the
              latest updates via email .
            </Text>
          </View>
        </NativeBaseProvider>
        <Footer />
      </NativeBaseProvider>
    );
  }
}

export default Home;
