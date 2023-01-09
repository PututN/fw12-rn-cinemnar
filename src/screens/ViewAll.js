import {
  Text,
  View,
  NativeBaseProvider,
  Select,
  CheckIcon,
  Input,
  Image,
  Button,
} from 'native-base';
import React, {Component} from 'react';
import {ScrollView} from 'react-native'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlackWidow from '../images/imgBlackWidow.png';
import Witches from '../images/imgWitches.png';

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

export class ViewAll extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <Navbar />
        <View style={{backgroundColor: '#E5E5E5', marginBottom:30}}>
          <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
            <Text fontSize="xl" style={{fontWeight: 'bold'}}>
              List Movie
            </Text>
            {/* FILTER */}
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <View style={{width: '30%', marginRight: 10}}>
                <Select
                  variant="rounded"
                  accessibilityLabel="Sort"
                  placeholder="Sort"
                  _selectedItem={{
                    bg: 'teal.600',
                    endIcon: <CheckIcon size={5} />,
                  }}
                  mt="1">
                  <Select.Item label="A-Z" value="DESC" />
                  <Select.Item label="Z-A" value="ASC" />
                </Select>
              </View>
              <View style={{width: '60%'}}>
                <Input
                  variant="rounded"
                  placeholder="Search Movie Name..."
                  style={{width: '90%'}}
                />
              </View>
            </View>
            {/* MONTH */}
            <View style={{flexDirection: 'row'}}>
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
            {/* MOVIE VIEW ALL */}
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
              <ScrollView horizontal>
                {data.map(data => (
                  <View
                    key={data.id}
                    style={{
                      marginTop: 15,
                      borderColor: 'black',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      borderRadius: 10,
                      marginRight: 20,
                      paddingVertical: 15,
                      width: 200,
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                      }}>
                      <Image source={data.picture} alt={data.title} />
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
                        <Button size="md">Details</Button>
                      </NativeBaseProvider>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 15,
            }}>
            <Button style={{width: '10%'}}>1</Button>
            <Button style={{width: '10%', marginLeft: 7}}>2</Button>
            <Button style={{width: '10%', marginLeft: 7}}>3</Button>
            <Button style={{width: '10%', marginLeft: 7}}>4</Button>
          </View>
        </View>
        <Footer />
      </NativeBaseProvider>
    );
  }
}

export default ViewAll;
