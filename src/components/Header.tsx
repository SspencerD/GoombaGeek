import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, styles} from '../assets/css/Styles';

interface Props {
  sizeIcon?: number;
  arrowEnable?: boolean;
  imageSize?: number;
  ratioImage?: number;
  goBack?: () => void;
}
const Header = (props: Props) => {
  const {sizeIcon, arrowEnable, imageSize, goBack} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        height: 120,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '10%',
          marginLeft: '5%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {arrowEnable && (
          <TouchableWithoutFeedback onPress={goBack}>
            <Icon
              name="arrow-left"
              size={sizeIcon ?? 30}
              color={Colors.white}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
        }}>
        <Image
          source={require('../assets/img/Banner.png')}
          resizeMode="contain"
          style={{
            width: imageSize ?? 350,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
