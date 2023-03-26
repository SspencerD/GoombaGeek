import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Colors, fonts, styles} from '../assets/css/Styles';
import {currencyFormatter} from '../utils/CurrencyFormatter';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {generateRandomPrice} from '../utils/generatePrice';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
const Carousel = (props: any) => {
  const {item, navigation} = props;
  const {item: prod} = item;

  const generateNewPrice = generateRandomPrice();

  const getType = (value: string) => {
    const type = new Map([
      ['Figure', 'Figura'],
      ['Band', 'Banda'],
      ['Yarn', 'Hilo'],
    ]);

    return type.get(value);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductById', {
          paramId: prod.name,
          productPrice: generateNewPrice,
        });
      }}
      style={styles.product_containerProduct}>
      <View style={styles.product_contentTitle}>
        <Text style={styles.titleProduct}>{prod.name}</Text>
      </View>
      <View style={styles.product_containImage}>
        <Image
          source={{uri: prod.image}}
          resizeMode="contain"
          style={styles.product_sizeImage}
        />
        <View style={styles.product_contentPrice}>
          <Text style={styles.product_price}>Precio:</Text>
          <Text style={styles.product_price}>
            {currencyFormatter(generateNewPrice, '$')}
          </Text>
        </View>
        <View style={styles.product_optionsContent}>
          <Text style={styles.product_optionsText}>Juego:</Text>
          <Text style={styles.product_optionsText_Value}>
            {prod.gameSeries}
          </Text>
        </View>
        <View style={styles.product_optionsContent}>
          <Text style={styles.product_optionsText}>Categoria:</Text>
          <Text style={styles.product_optionsText_Value}>
            {prod.amiiboSeries}
          </Text>
        </View>
        <View style={styles.product_optionsContent}>
          <Text style={styles.product_optionsText}>Tipo:</Text>
          <Text style={styles.product_optionsText_Value}>
            {getType(prod.type)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Carousel;
