import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, styles} from '../assets/css/Styles';

interface Props {
  sizeIcon?: number;
  arrowEnable?: boolean;
  imageSize?: number;
  ratioImage?: number;
}
const Header = (props: Props) => {
  const {sizeIcon, arrowEnable, imageSize, ratioImage} = props;
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
          flex: 0.5,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        {arrowEnable && (
          <TouchableOpacity onPress={() => {}}>
            <Icon
              name="arrow-left"
              size={sizeIcon ?? 30}
              color={Colors.white}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '10%',
        }}>
        <Image
          source={require('../assets/img/Banner.png')}
          resizeMode="contain"
          style={{
            width: imageSize ?? 450,
            aspectRatio: ratioImage ?? 2,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
