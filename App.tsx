/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Alert, SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/components/CustomDrawer';
import TabNavigator from './src/navigation/TabNavigator';
import {styles} from './src/assets/css/Styles';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {getAllAmibos} from './src/utils/Api/Amibo';
import AnimatedLottieView from 'lottie-react-native';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    getConnection();
  }, []);

  const getConnection = () => {
    SetLoading(true);
    getAllAmibos().then((resp: any) => {
      if (resp.status === 200) {
        SetLoading(false);
      } else {
        SetLoading(false);
        Alert.alert(
          'Hay un problema en la conexion',
          ` hay un problema en la conexión por favor revisa tu conexión y vuelve a intentarlo, ${resp.status}`,
        );
      }
    });
  };

  return loading ? (
    <SafeAreaView style={styles.container}>
      <AnimatedLottieView
        source={require('./src/assets/animations/loading.json')}
        autoPlay
        loop
        style={{
          width: 450,
        }}
      />
    </SafeAreaView>
  ) : (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              drawerStyle: {
                width: '80%',
              },
              headerShown: false,
              drawerPosition: 'right',
            }}
            drawerContent={(props: any) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Main" component={TabNavigator} />
          </Drawer.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
