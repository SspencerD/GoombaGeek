/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/components/CustomDrawer';
import TabNavigator from './src/navigation/TabNavigator';
import {styles} from './src/assets/css/Styles';
import {Provider} from 'react-redux';
import store from './src/store/store';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
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
