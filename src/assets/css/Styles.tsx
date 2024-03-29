import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#173f33f6',
  secondary: '#09ffb5f6',
  therdthy: '#6bffd2f6',
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
  green3: '#16CC6A',
  yellow: '#FF9800',
  yellow1: '#f1ce6d',
  yellow2: '#d3a21c',

  blue: '#06326B',
  blue2: '#335A8C',
  blue3: 'rgba(41, 96, 168, 0.1)',
  red: '#DA1414',
  red1: '#EA1D25',
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
    backgroundColor: Colors.primary,
    pagginHorizontal: '8%',
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
  product_containerProduct: {
    backgroundColor: Colors.white1,
    borderRadius: 25,
    borderColor: Colors.gray2,
    borderWidth: 2,
    marginRight: 50,
    marginLeft: 20,
    width: 350,
    marginBottom: '10%',
    shadowColor: Colors.dark2,
    shadowRadius: 10,
  },
  product_containImage: {
    width: '100%',
    marginTop: '3%',
    paddingBottom: '5%',
    paddingHorizontal: '4%',
  },
  product_containImageInto: {
    width: 350,
    marginTop: 12,
    paddingBottom: 10,
    paddingHorizontal: 8,
  },
  product_sizeImage: {
    width: '100%',
    height: 350,
  },
  product_contentTitle: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '5%',
  },
  product_contentTypeGame: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: Colors.blue3,
    padding: 10,
    borderRadius: 20,
    borderColor: Colors.gray1,
    borderWidth: 2,
    marginLeft: 5,
  },
  product_contentTypeText: {
    fontFamily: fonts.secondary,
    fontSize: 21,
    fontWeight: '600',
    lineHeight: 21,
    color: Colors.primary,
  },
  product_contentID_Content: {
    width: '90%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray3,
    padding: 6,
    backgroundColor: Colors.gray7,
    shadowColor: Colors.dark2,
  },
  product_contentID_text: {
    textAlign: 'center',
    fontSize: sizes.sm,
    fontFamily: fonts.primary,
  },
  product_contentTitleInto: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: '5%',
  },
  titleProduct: {
    fontFamily: fonts.primary,
    fontSize: 21,
    fontWeight: '500',
    lineHeight: 21,
    color: Colors.dark2,
  },
  subTitleProduct: {
    fontFamily: fonts.primary,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21,
    color: Colors.primary,
  },
  product_contentPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: '3%',
    marginTop: '4%',
  },
  product_price: {
    fontFamily: fonts.primary,
    color: Colors.secondary,
    fontSize: 21,
    fontWeight: '500',
    lineHeight: 21.04,
    marginLeft: '4%',
  },
  product_optionsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '3%',
    width: '100%',
  },
  product_optionsText: {
    textAlign: 'left',
    fontFamily: fonts.primary,
    fontSize: 16,
    color: Colors.blue2,
    fontWeight: '600',
  },
  product_optionsText_Value: {
    textAlign: 'left',
    fontFamily: fonts.secondary,
    fontSize: 18,
    color: Colors.primary,
    fontWeight: '600',
  },
  //Producto interno
  product_intoContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  product_intoPriceContent: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.yellow1,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.yellow2,
    padding: 10,
  },
});
