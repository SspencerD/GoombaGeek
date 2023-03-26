import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, sizes} from '../assets/css/Styles';

interface CustomTabButtonProps {
  iconName: string;
  label: string;
  onPress: () => void;
  badgeCount?: number;
}

const CustomTabButtons = (props: CustomTabButtonProps) => {
  const {iconName, label, onPress, badgeCount} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '6%',
      }}>
      <Icon name={iconName} size={25} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            top: -5,
            right: -10,
            backgroundColor: 'red',
            borderRadius: 10,
            width: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 12}}>{badgeCount}</Text>
        </View>
      )}
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomTabButtons;
