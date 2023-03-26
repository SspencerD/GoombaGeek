import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reducers/rootReducers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors, fonts, sizes} from '../assets/css/Styles';
import {currencyFormatter} from '../utils/CurrencyFormatter';
import {checkout} from '../actions/cartActions';
import ItemsCart from './ItemsCart';
const CustomDrawer = (props: DrawerContentComponentProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    const orderNumber = Math.floor(Math.random() * 100000);
    const iva = calculateTotalPrice() * 0.19;
    const total = calculateTotalPrice() + iva;

    dispatch(checkout(orderNumber, iva, total, cartItems));
    props.navigation.navigate('CheckoutProduct');
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  console.log('Que llego en cartItems?', cartItems);

  return (
    <>
      <DrawerContentScrollView
        {...props}
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: 15,
            marginTop: 15,
          }}>
          <Icon size={30} name="close" />
        </TouchableOpacity>
        <View
          style={{
            marginVertical: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text
            style={{
              fontFamily: fonts.primary,
              fontSize: sizes.md,
              color: Colors.blue2,
            }}>
            Carrito
          </Text>
        </View>
        <View>
          {cartItems.length > 0 ? (
            <ItemsCart data={cartItems} />
          ) : (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: fonts.secondary,
                  fontSize: sizes.sm,
                }}>
                Aun no hay productos en el carrito
              </Text>
            </View>
          )}
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          flex: 0.4,
          backgroundColor: Colors.blue3,
          justifyContent: 'flex-end',
          paddingTop: '5%',
          borderRadius: 6,
          borderWidth: 1,
          paddingHorizontal: '3%',
        }}>
        <View>
          <Text
            style={{
              fontFamily: fonts.primary,
              fontSize: sizes.sm,
              color: Colors.blue2,
            }}>
            Sub-Total
          </Text>
          <Text
            style={{
              fontFamily: fonts.primary,
              fontSize: sizes.md,
              color: Colors.secondary,
            }}>
            {currencyFormatter(calculateTotalPrice(), '$')}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fonts.primary,
              fontSize: sizes.sm,
              color: Colors.blue2,
            }}>
            IVA (19%)
          </Text>
          <Text
            style={{
              fontFamily: fonts.primary,
              fontSize: sizes.md,
              color: Colors.secondary,
            }}>
            {currencyFormatter(calculateTotalPrice() * 0.19, '$')}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fonts.primary,
              fontSize: sizes.sm,
              color: Colors.blue2,
            }}>
            TOTAL:
          </Text>
          <Text
            style={{
              fontFamily: fonts.primary,
              fontSize: sizes.md,
              color: Colors.yellow2,
            }}>
            {currencyFormatter(calculateTotalPrice() * 1.19, '$')}
          </Text>
        </View>
        <TouchableOpacity
          disabled={cartItems.length > 0 ? false : true}
          style={{
            width: '100%',
            height: 49,
            backgroundColor:
              cartItems.length > 0 ? Colors.yellow1 : Colors.gray4,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleCheckout}>
          <Text
            style={{
              fontFamily: fonts.primary,
              fontSize: sizes.sm,
              color: Colors.dark2,
            }}>
            Realizar Compra
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CustomDrawer;
