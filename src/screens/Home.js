import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import imgHomepage from '../images/imgHomepage.png';
import Spiderman from '../images/imgSpiderman.png';
import Tenet from '../images/imgTenet.png';
import LionKing from '../images/imgLionKing.png';
import JohnWick from '../images/imgJohnWick.png';
import {ScrollView} from 'react-native-gesture-handler';
import {ListItem} from '@rneui/base';

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
    title: 'Jhon Wickt',
    genre: 'Action, Thriller, Sci-Fi',
  },
];
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
        <View style={{backgroundColor: 'grey'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Now Showing</Text>
            <Text style={{fontSize: 17, color: 'blue'}}>View All</Text>
          </View>
          <ScrollView horizontal>
            {data.map(data => (
              <ListItem key={data.id}>
                <Image
                  source={data.picture}
                  style={{width: 100, height: 'auto'}}
                />
                <ListItem.Content>
                  <ListItem.Title>{data.title}</ListItem.Title>
                  <ListItem.Subtitle>{data.genre}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;
