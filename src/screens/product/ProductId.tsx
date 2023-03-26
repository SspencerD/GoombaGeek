import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
import {Colors, fonts, sizes, styles} from '../../assets/css/Styles';
import Header from '../../components/Header';
import {getDetailProduct} from '../../utils/Api/Amibo';
import {generateRandomPrice} from '../../utils/generatePrice';
import Flag from 'react-native-flags';
import {TouchableOpacity} from 'react-native';
import {currencyFormatter} from '../../utils/CurrencyFormatter';
import {TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../actions/cartActions';
import {RootState} from '../../reducers/rootReducers';
import AnimatedLottieView from 'lottie-react-native';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */

interface Props {
  productId: string;
  nameProduct: string;
}

const ProductId = (props: any) => {
  const {route, navigation} = props;
  const {paramId, productPrice} = route.params;
  const dispatch = useDispatch();

  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSell, setShowSell] = useState(false);
  const [quantityProduct, setQuantityProduct] = useState<number>(1);
  const [productCheck, setProductCheck] = useState({
    productId: '',
    productName: '',
    productImage: '',
    quantity: 0,
    price: 0,
  });

  useEffect(() => {
    getProduct();
  }, [paramId]);

  const getProduct = () => {
    setLoading(true);
    if (paramId) {
      getDetailProduct(paramId)
        .then((resp: any) => {
          if (resp.status === 200) {
            const data = resp.data;
            const result = data.amiibo;
            console.log('que trae aqui en result?', result);
            setGetData(result);
            setLoading(false);
            setProductCheck({
              ...productCheck,
              productId: result[0].tail,
              productName: result[0].character,
              productImage: result[0].image,
              price: productPrice,
            });
          }
        })
        .catch((err: any) => {
          console.error(err.message);
          setLoading(false);
        });
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart(
        productCheck.productId,
        productCheck.productName,
        productCheck.productImage,
        quantityProduct,
        productCheck.price,
      ),
    );
    navigation.openDrawer();
    setShowSell(false);
    setQuantityProduct(0);
    setTimeout(() => {
      navigation.closeDrawer();
    }, 3000);
  };

  const getType = (value: string) => {
    const type = new Map([
      ['Figure', 'Figura'],
      ['Band', 'Banda'],
      ['Yarn', 'Hilo'],
    ]);

    return type.get(value);
  };
  const getReleases = (value: string) => {
    const type = new Map([
      ['au', <Flag code="AU" size={24} />],
      ['jp', <Flag code="JP" size={24} />],
      ['eu', <Flag code="EU" size={24} />],
      ['na', <Flag code="US" size={24} />],
    ]);

    return type.get(value);
  };

  const ContainIntoProduct = ({item}: any) => {
    const mappedReleased = Object.fromEntries(
      Object.entries(item.release).map(([key, value]) => {
        return [[key], value];
      }),
    );
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 30,
        }}>
        <View style={styles.product_contentTypeGame}>
          <Text style={styles.product_contentTypeText}>
            {item.amiiboSeries}
          </Text>
        </View>
        <View style={styles.product_containImageInto}>
          <Image
            source={{
              uri: item.image,
            }}
            resizeMode="contain"
            style={styles.product_sizeImage}
          />
        </View>
        <View style={styles.product_contentID_Content}>
          <Text style={styles.product_contentID_text}>{item.tail}</Text>
        </View>
        <View style={styles.product_intoContainer}>
          <View style={styles.product_intoPriceContent}>
            <Text style={styles.product_optionsText}>Tipo:</Text>
            <Text
              style={[
                {...styles.product_optionsText},
                {
                  fontSize: 12,
                  marginLeft: 10,
                  color: Colors.primary,
                },
              ]}>
              {getType(item.type)}
            </Text>
          </View>
          <View style={[{...styles.product_intoPriceContent}]}>
            <Text style={styles.product_optionsText}>Precio:</Text>
            <Text
              style={[
                styles.product_optionsText,
                {
                  fontSize: 12,
                  marginLeft: 10,
                },
              ]}>
              {currencyFormatter(productPrice, '$')}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 350,
            paddingHorizontal: 25,
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            marginVertical: 30,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.product_optionsText}> Lanzamientos</Text>
          </View>
          {Object.entries(mappedReleased).map((item, key) => {
            return (
              <View
                key={key}
                style={{
                  padding: 5,
                  backgroundColor: Colors.gray3,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginLeft: 10,
                    padding: 5,
                  }}>
                  {item ? getReleases(item[0]) : 'cargando...'}
                </View>
                <View>
                  <Text
                    style={[
                      styles.product_optionsText,
                      {
                        fontSize: 12,
                        marginLeft: 10,
                      },
                    ]}>
                    {item ? item[1] : 'cargando...'}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  function ProductCard() {
    return (
      <View style={styles.product_containerProduct}>
        <View
          style={{
            marginVertical: '3%',
          }}>
          <View style={styles.product_contentTitle}>
            <Text style={styles.titleProduct}>
              {getData ? getData[0]?.name : 'cargando...'}
            </Text>
            <Text style={styles.subTitleProduct}>
              {getData ? getData[0]?.gameSeries : 'cargando...'}
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            data={getData}
            renderItem={ContainIntoProduct}
            keyExtractor={item => 'index' + item.tail}
            horizontal={true}
            bounces={true}
            bouncesZoom={true}
            alwaysBounceHorizontal={true}
            showsHorizontalScrollIndicator={true}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5%',
            backgroundColor: Colors.yellow1,
            borderWidth: 1,
            borderColor: Colors.yellow2,
            borderRadius: 20,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              borderRightWidth: 1,
              borderRightColor: Colors.yellow2,
            }}
            onPress={() => {
              setShowSell(true);
            }}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.primary,
                color: Colors.secondary,
                textAlign: 'center',
              }}>
              Agregar a carrito
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: '5%',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.primary,
                color: Colors.primary,
                textAlign: 'center',
              }}>
              Agregar a favoritos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function OpenSellModal() {
    return (
      <Modal visible={showSell} transparent={true} animationType={'slide'}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            zIndex: 100,
          }}
          activeOpacity={9}>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: 320,
              borderRadius: 45,
              backgroundColor: Colors.white,
              bottom: -50,
            }}>
            <View
              style={{
                marginTop: '5%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  {...styles.product_optionsText},
                  {
                    fontSize: 12,
                    marginLeft: 10,
                    color: Colors.yellow2,
                  },
                ]}>
                {' '}
                Estás a punto de comprar el siguiente articulo:
              </Text>
              <Text
                style={[
                  {...styles.product_optionsText},
                  {
                    fontSize: 15,
                    marginLeft: 10,
                    color: Colors.blue2,
                  },
                ]}>
                {productCheck.productName}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: '3%',
              }}>
              <Text
                style={[
                  {...styles.product_optionsText},
                  {
                    fontSize: 12,
                    marginLeft: 10,
                    color: Colors.red1,
                  },
                ]}>
                {' '}
                Añade la cantidad de esté articulo
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: '5%',
                alignItems: 'center',
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: Colors.secondary,
                  borderRadius: 35,
                  borderWidth: 1,
                  borderColor: Colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  if (quantityProduct <= 0) {
                    setQuantityProduct(0);
                  } else {
                    setQuantityProduct(quantityProduct - 1);
                  }
                }}>
                <Text
                  style={{
                    fontSize: sizes.md,
                    fontFamily: fonts.secondary,
                    textAlign: 'center',
                    color: Colors.primary,
                  }}>
                  {' '}
                  -{' '}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  borderRadius: 6,
                  borderWidth: 1,
                  width: 250,
                  backgroundColor: Colors.blue3,
                }}>
                <TextInput
                  placeholder="1"
                  value={String(quantityProduct)}
                  onChangeText={(e: any) => {
                    setQuantityProduct(e);
                  }}
                  keyboardType="numeric"
                  inputMode="numeric"
                  style={{
                    fontSize: sizes.sm,
                    fontFamily: fonts.primary,
                    textAlign: 'center',
                  }}
                />
              </View>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: Colors.secondary,
                  borderRadius: 35,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: Colors.primary,
                }}
                onPress={() => {
                  if (quantityProduct >= 0) {
                    setQuantityProduct(quantityProduct + 1);
                  }
                }}>
                <Text
                  style={{
                    fontSize: sizes.md,
                    fontFamily: fonts.secondary,
                    textAlign: 'center',
                    color: Colors.primary,
                  }}>
                  {' '}
                  +{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.yellow1,
                  borderWidth: 1.5,
                  borderColor: Colors.yellow2,
                  borderRadius: 16,
                  width: 150,
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: '3%',
                }}
                onPress={handleAddToCart}>
                <Text
                  style={{
                    fontSize: sizes.sm,
                    fontFamily: fonts.secondary,
                    fontWeight: '700',
                    color: Colors.blue2,
                  }}>
                  {' '}
                  Añadir Carrito
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.red,
                  borderWidth: 1.5,
                  borderColor: Colors.red1,
                  borderRadius: 16,
                  width: 150,
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: '3%',
                }}
                onPress={() => {
                  setShowSell(false);
                }}>
                <Text
                  style={{
                    fontSize: sizes.sm,
                    fontFamily: fonts.secondary,
                    fontWeight: '700',
                    color: Colors.white,
                  }}>
                  {' '}
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  return loading ? (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          marginLeft: 10,
        }}>
        <AnimatedLottieView
          source={require('../../assets/animations/tetris.json')}
          autoPlay
          loop
          style={{
            width: 350,
            aspectRatio: 1,
          }}
        />
      </View>
    </SafeAreaView>
  ) : (
    <ScrollView
      horizontal={false}
      style={styles.container}
      contentContainerStyle={{
        paddingHorizontal: '3%',
      }}>
      <Header
        arrowEnable={true}
        goBack={() => {
          navigation.goBack();
        }}
      />
      <ProductCard />
      {showSell ? OpenSellModal() : null}
    </ScrollView>
  );
};

export default ProductId;
