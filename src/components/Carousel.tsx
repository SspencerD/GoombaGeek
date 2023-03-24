import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Colors, fonts, styles} from '../assets/css/Styles';

const Carousel = (props: any) => {
  const {item} = props;
  function generateRandomPrice() {
    const min = 100;
    const max = 10000;
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum * 10;
  }

  console.log('Que trae props?', props);

  const generateNewPrice = generateRandomPrice();

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        borderRadius: 20,
        borderColor: Colors.gray2,
      }}>
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: fonts.primary,
            fontSize: 25,
            fontWeight: '500',
            lineHeight: 21,
            color: Colors.dark2,
          }}>
          NOMBRE PRODUCTO
        </Text>
      </View>
      <View>
        <Image
          source={{uri: item.image}}
          resizeMode="center"
          style={{
            width: '100%',
            height: 450,
          }}
        />
      </View>
    </View>
  );
};

export default Carousel;
