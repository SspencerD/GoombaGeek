import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {decreaseQty, increaseQty, removeFromCart} from '../actions/cartActions';
import {Colors, fonts} from '../assets/css/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {currencyFormatter} from '../utils/CurrencyFormatter';

const ItemsCart = (props: any) => {
  const {data} = props;

  const dispatch = useDispatch();

  const handleRemoveFormCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId: string) => {
    dispatch(increaseQty(productId));
  };

  const handleDecreaseQuantity = (productId: string) => {
    dispatch(decreaseQty(productId));
  };

  return data.map((item: any) => (
    <View
      key={item.productId}
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: Colors.yellow2,
        elevation: 6,
        height: 160,
        borderRadius: 16,
        backgroundColor: Colors.yellow1,
        marginVertical: '2%',
      }}>
      <View
        style={{
          backgroundColor: Colors.gray9,
          width: 100,
          height: 100,
          borderRadius: 15,
          marginLeft: '3%',
          marginTop: '3%',
          borderWidth: 1,
          borderColor: Colors.yellow2,
          elevation: 5,
        }}>
        <Image
          source={{uri: item.imageProduct}}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
      <View
        style={{
          width: 200,
          marginRight: 3,
          flexDirection: 'column',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              fontFamily: fonts.primary,
              color: Colors.primary,
              textAlign: 'center',
              marginLeft: 10,
            }}>
            {item.nameProduct}
          </Text>
          <TouchableOpacity
            style={{
              marginRight: '3%',
              width: 35,
              height: 35,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: Colors.primary,
              alignItems: 'center',
              backgroundColor: Colors.secondary,
              elevation: 4,
              marginTop: 10,
            }}
            onPress={() => {
              handleRemoveFormCart(item.productId);
            }}>
            <Icon name="basket-remove" size={25} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '500',
              fontFamily: fonts.primary,
              color: Colors.primary,
              textAlign: 'center',
              marginHorizontal: 10,
            }}>
            Cantidad:
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '500',
              fontFamily: fonts.primary,
              color: Colors.secondary,
              textAlign: 'center',
            }}>
            {item.quantity}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '500',
              fontFamily: fonts.primary,
              color: Colors.primary,
              textAlign: 'center',
              marginHorizontal: 10,
            }}>
            Precio:
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '500',
              fontFamily: fonts.primary,
              color: Colors.secondary,
              textAlign: 'center',
            }}>
            {currencyFormatter(item.price * item.quantity, '$')}
          </Text>
        </View>
        <View
          style={{
            marginTop: '8%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              marginRight: '3%',
              width: 35,
              height: 35,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: Colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.secondary,
              elevation: 4,
              marginTop: 10,
            }}
            onPress={() => {
              handleDecreaseQuantity(item.productId);
            }}>
            <Text> - </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: Colors.white,
              borderWidth: 1,
              borderRadius: 9,
              width: 35,
              height: 35,
              marginVertical: '3%',
              alignItems: 'center',
            }}>
            <TextInput
              value={String(item.quantity)}
              editable={false}
              placeholder="0"
              style={{
                fontSize: 12,
                fontFamily: fonts.primary,
                textAlign: 'center',
                marginTop: 1,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              marginRight: '3%',
              width: 35,
              height: 35,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: Colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.secondary,
              elevation: 4,
              marginTop: 10,
            }}
            onPress={() => {
              handleIncreaseQuantity(item.productId);
            }}>
            <Text> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ));
};

export default ItemsCart;
