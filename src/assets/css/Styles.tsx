import {StyleSheet} from 'react-native';

export const Colors = {
  black: 'rgba(0,0,0,0.02)',
  black1: '#101214',
  black2: '#1e2123',
  black3: '#222628',
  white: '#ffffff',
  white1: '#F2F3F5',
  gray1: '#F0F1F4',
  gray2: '#DADADA',
  gray3: '#DEDEDE',
  gray4: '#757575',
  gray5: '#969696',
  gray6: '#989898',
  gray7: '#E5E5E5',
  gray9: '#F0F1F4',
  gray10: '#F8F8F8',
  gray11: '#BABABA',
  gray12: '#E7E7E7',
  gray13: '#DFDFDF',
  gray14: '#D4D4D4',
  gray15: '#F4F4F4',
  transparent: 'transparent',
  dark1: '#5C5C5C',
  dark2: '#36384C',
  dark3: '#4C4C4C',
  dark4: '#757F8C',
  darkgray: '#898C95',
  green: '#96C562',
  green2: 'rgba(76, 175, 80, 0.1)',
  green3: '#16CC6A',
  orange: '#FF6701',
  orange1: '#F28E2A',
  orange2: '#FF8B04',
  orange3: '#FF3A30',
  orange4: 'rgba(255, 103,0, 0.3)',
  orange5: '#FE7010',
  yellow: '#FF9800',

  blue: '#06326B',
  blue2: '#335A8C',
  blue3: 'rgba(41, 96, 168, 0.1)',

  lightBlue: '#53BDFF',
  lightBlue1: '#007AFF',

  red: '#DA1414',
  red1: '#EA1D25',
  red2: 'rgba(244, 67, 54, 0.2)',
  purple: '#632B70',
};

export const sizes = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 36,
  xxl: 42,
};

export const fonts = {
  primary: 'NicoMoji-Regular',
  secondary: 'NanumPenScript-Regular',
};

export const styles = StyleSheet.create({
  //Global
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#102829f6',
    pagginHorizontal: '5%',
  },

  // HomeScreen
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    maringHorizontal: '5%',
  },
  headerContainerImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '5%',
  },
  headerContainerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
    marginTop: '5%',
  },
  headeContainerInput_ContentInput: {
    flex: 1.5,
    width: '100%',
    paddingLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headeContainerInput_ContentButton: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '5%',
    backgroundColor: 'red',
  },
});
