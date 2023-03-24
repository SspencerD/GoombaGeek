/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {Colors, styles} from '../../assets/css/Styles';
import TextInputMaterialUI from '../../components/InputFieldMUI';
import {getAllAmibos} from '../../utils/Api/Amibo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';

interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: object;
  tail: string;
  type: string;
}

const HomeScreen = () => {
  const [getAllProducts, setGetAllProducts] = useState<Amiibo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [limitData, setLimitData] = useState(20);
  const [refreshList, setRefreshList] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    await getAllAmibos()
      .then((resp: any) => {
        if (resp.status === 200) {
          const data = resp.data;
          const result = data.amiibo;
          setGetAllProducts(result.slice(0, 20));
          setLoading(false);
        }
      })
      .catch((err: any) => {
        console.error('error al traer los productos', err.message);
      });
  };

  const Data: any = [
    {
      id: 1,
      title: 'Producto 1',
      image: 'https://picsum.photos/200/300',
      dato1: 'lorem ipsum dolor sit amet',
      dato2: 'lorem ipsum dolor sit amet',
      dato3: 'lorem ipsum dolor sit amet',
      dato4: 'lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      title: 'Producto 2',
      image: 'https://picsum.photos/200/300',
      dato1: 'lorem ipsum dolor sit amet',
      dato2: 'lorem ipsum dolor sit amet',
      dato3: 'lorem ipsum dolor sit amet',
      dato4: 'lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      title: 'Producto 3',
      image: 'https://picsum.photos/200/300',
      dato1: 'lorem ipsum dolor sit amet',
      dato2: 'lorem ipsum dolor sit amet',
      dato3: 'lorem ipsum dolor sit amet',
      dato4: 'lorem ipsum dolor sit amet',
    },
    {
      id: 4,
      title: 'Producto 4',
      image: 'https://picsum.photos/200/300',
      dato1: 'lorem ipsum dolor sit amet',
      dato2: 'lorem ipsum dolor sit amet',
      dato3: 'lorem ipsum dolor sit amet',
      dato4: 'lorem ipsum dolor sit amet',
    },
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  function Search() {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            marginLeft: '5%',
          }}>
          <TextInputMaterialUI
            value={searchQuery}
            label="Busca un articulo"
            onChangeText={(event: any) => {
              setSearchQuery(event);
            }}
          />
        </View>
        <View
          style={{
            flex: 0.1,
            marginHorizontal: '5%',
          }}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function Body() {
    return (
      <View
        style={{
          marginTop: '5%',
          backgroundColor: Colors.green2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={Data}
          extraData={limitData}
          renderItem={Carousel}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search />
      <Body />
    </SafeAreaView>
  );
};

export default HomeScreen;
