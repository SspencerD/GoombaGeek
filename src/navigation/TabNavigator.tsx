import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import CategoriesScreen from '../screens/CategoriesScreen';
// import CartScreen from '../screens/CartScreen';
// import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
