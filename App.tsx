/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Button, Modal, SafeAreaView, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/components/CustomDrawer';
import TabNavigator from './src/navigation/TabNavigator';
import {getAllAmibos} from './src/utils/Api/Amibo';
import {styles} from './src/assets/css/Styles';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const [connected, setConnected] = React.useState(false);
  React.useEffect(() => {
    handleConnection();
  }, []);

  const handleConnection = () => {
    getAllAmibos()
      .then((resp: any) => {
        if (resp.status === 200) {
          setConnected(true);
        } else {
          setConnected(false);
        }
      })
      .catch((err: any) => {
        //some..
        console.error(err);
      });
  };

  function loaderApp() {
    return (
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Modal visible={true} transparent={true} animationType="fade">
          <View
            style={{
              marginTop: '15%',
              marginHorizontal: '6%',
              borderRadius: 24,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <View>
              <Text> Ups</Text>
            </View>
            <View>
              <Text>
                {' '}
                Hay problemas a la conexión de internet , por favor revisa tu
                conexión y vuelve a intentarlo
              </Text>
            </View>
            <View>
              <Button title="Reintentar"></Button>
              <Button title="Cancelar"></Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return !connected ? (
    loaderApp()
  ) : (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            drawerPosition: 'right',
          }}
          drawerContent={(props: any) => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Main" component={TabNavigator} />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
