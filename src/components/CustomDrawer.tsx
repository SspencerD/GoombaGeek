import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Button} from 'react-native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <Button
        title="Cerrar Drawer"
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
