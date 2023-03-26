import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors, fonts, styles} from '../../assets/css/Styles';
import Header from '../../components/Header';
import {currencyFormatter} from '../../utils/CurrencyFormatter';

const CheckoutProduct = (props: any) => {
  const {navigation} = props;
  const checkout = useSelector((state: any) => state.cart.checkoutResult);

  const handleFinished = () => {
    Alert.alert('Su compra a finalizado con exito!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header arrowEnable={true} />
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingHorizontal: '5%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.white,
            borderRadius: 20,
            borderWidth: 1,
            paddingHorizontal: '3%',
            paddingVertical: '3%',

            elevation: 5,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '3%',
            }}>
            <Text
              style={{
                fontFamily: fonts.primary,
                fontSize: 16,
                color: Colors.blue,
              }}>
              Los detalles de tu compra
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: fonts.primary,
                fontSize: 16,
                color: Colors.blue,
              }}>
              Numero de Orden:
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 16,
                color: Colors.therdthy,
              }}>
              {checkout.orderNumber}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: fonts.primary,
                fontSize: 16,
                color: Colors.blue,
              }}>
              Items comprados:
            </Text>
            <View
              style={{
                marginVertical: '8%',
              }}>
              {checkout.items.map((item: any) => {
                return (
                  <>
                    <View
                      key={item.productId}
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginVertical: '2%',
                        marginHorizontal: '2%',
                      }}>
                      <ScrollView>
                        <Image
                          source={{
                            uri: item.imageProduct,
                          }}
                          style={{
                            width: 80,
                            height: 80,
                            borderRadius: 6,
                          }}
                          resizeMode="contain"
                        />
                      </ScrollView>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: fonts.primary,
                          fontSize: 16,
                          color: Colors.blue,
                        }}>
                        Nombre del producto
                      </Text>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 16,
                          color: Colors.therdthy,
                        }}>
                        {item.nameProduct}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: fonts.primary,
                          fontSize: 16,
                          color: Colors.blue,
                        }}>
                        Cantidad
                      </Text>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 16,
                          color: Colors.therdthy,
                        }}>
                        {item.quantity}
                      </Text>
                    </View>
                  </>
                );
              })}
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: fonts.primary,
                fontSize: 16,
                color: Colors.blue,
              }}>
              SubTotal:
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 16,
                color: Colors.therdthy,
              }}>
              {currencyFormatter(checkout.total - checkout.iva, '$')}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: fonts.primary,
                fontSize: 16,
                color: Colors.blue,
              }}>
              Iva:
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 16,
                color: Colors.therdthy,
              }}>
              {' '}
              {currencyFormatter(checkout.iva, '$')}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: fonts.primary,
                fontSize: 16,
                color: Colors.blue,
              }}>
              Total:
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 16,
                color: Colors.therdthy,
              }}>
              {currencyFormatter(checkout.total, '$')}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
            handleFinished();
          }}
          style={{
            backgroundColor: Colors.yellow1,
            marginTop: '5%',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontFamily: fonts.primary,
              fontSize: 16,
              color: Colors.primary,
            }}>
            Finalizar venta
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutProduct;
