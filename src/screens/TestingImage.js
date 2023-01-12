import {Text, View, Image} from 'native-base';
import React, {useState, useEffect} from 'react';
import http from '../helpers/http';

const TestingImage = () => {
  const [nowShowing, setNowShowing] = useState([]);
  useEffect(() => {
    const fetchNowShowing = async () => {
      try {
        const response = await http().get('/movies/nowShowing');
        setNowShowing(response?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNowShowing();
  }, []);
  console.log(nowShowing);
  return (
    <>
      <Text>ini testing</Text>
      {nowShowing?.map(data => (
        <Image
          key={data.id}
          source={{uri: data.picture}}
          alt={data.title}
          width="160px"
          height="250px"
        />
      ))}
      <Text>SPIDERMAN</Text>

      <Image
        source={{
          uri: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
        }}
        alt="picture"
        width="160px"
        height="250px"
      />
      <Text>BLACK PANTHER</Text>

      <Image
        source={{
          uri: 'https://media.21cineplex.com/webcontent/gallery/pictures/166573267866338_287x421.jpg',
        }}
        alt="picture"
        width="160px"
        height="250px"
      />
      <Text>SRI ASIH</Text>

      <Image
        source={{
          uri: 'https://media.21cineplex.com/webcontent/gallery/pictures/16679753364232_287x421.jpg',
        }}
        alt="picture"
        width="160px"
        height="250px"
      />
      <Text>AVATAR</Text>

      <Image
        source={{
          uri: 'https://media.21cineplex.com/webcontent/gallery/pictures/166937899876573_287x421.jpg',
        }}
        alt="picture"
        width="160px"
        height="250px"
      />
      <Text>CEK TOKO SEBELAH 2</Text>
      <Image
        source={{
          uri: 'https://media.21cineplex.com/webcontent/gallery/pictures/167021654186835_287x421.jpg',
        }}
        alt="picture"
        width="160px"
        height="250px"
      />
    </>
  );
};

export default TestingImage;
