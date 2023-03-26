import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ProductId from '../screens/product/ProductId';
import CheckoutProduct from '../screens/product/CheckoutProduct';
import CategoriesScreen from '../screens/product/CategoriesScreen';
import CustomTabButtons from '../components/CustomTabButtons';
import FavoritesScreen from '../screens/product/FavoritesScreen';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartItemsCount = cartItems.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0,
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          tabBarButton: props => (
            <CustomTabButtons
              {...props}
              iconName="home"
              label="Inicio"
              onPress={() => navigation.navigate('Home')}
            />
          ),
        })}
      />

      <Tab.Screen
        name="ProductById"
        component={ProductId}
        options={{
          tabBarButton: (props: any) => null,
        }}
      />
      <Tab.Screen
        name="CheckoutProduct"
        component={CheckoutProduct}
        options={{
          tabBarButton: (props: any) => null,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({navigation}) => ({
          tabBarButton: props => (
            <CustomTabButtons
              {...props}
              iconName={'drag-variant'}
              label="Categorias"
              onPress={() => {
                navigation.navigate('Categories');
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({navigation}) => ({
          tabBarButton: props => (
            <CustomTabButtons
              {...props}
              iconName={'heart'}
              label="Favoritos"
              onPress={() => {
                navigation.navigate('Favorites');
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={ProductId}
        options={({navigation}) => ({
          tabBarButton: props => (
            <CustomTabButtons
              {...props}
              iconName={'cart'}
              label="Carrito"
              onPress={() => {
                navigation.openDrawer();
              }}
              badgeCount={cartItemsCount}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
