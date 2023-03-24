/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {StyleProps} from 'react-native-reanimated';
import {Colors} from '../assets/css/Styles';

type Props = React.ComponentProps<typeof TextInput> & {
  label: string;
  editable?: boolean;
  value: string | number;
  focusable?: boolean;
  errorText?: string | null;
  onBlur?: any;
  stylesProps?: StyleProps;
  keyboardType?: string;
  stylesContainer?: {};
  stylesLabel?: {};
  stylesInput?: {};
  onChangeText: any;
  onSubmitEditing?: () => void;
};

const TextInputMaterialUI: React.FC<Props> = props => {
  const {
    editable,
    stylesProps,
    focusable,
    stylesContainer,
    stylesLabel,
    stylesInput,
    label,
    onBlur,
    onEndEditing,
    value,
    onChangeText,
    onFocus,
    onSubmitEditing,
    errorText,
    keyboardType,
    ...restOfProps
  } = props;

  const [isFocused, setIsFocused] = useState(focusable);

  const focusAnim = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<TextInput>(null);

  let color = isFocused ? Colors.dark2 : Colors.dark2;

  if (errorText) {
    color = Colors.red;
  }

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  return (
    <View style={stylesContainer ? stylesContainer : stylesProps}>
      <TextInput
        style={{
          ...styles.MaterialUI_InputStyle,
          borderWidth: 1,
          borderColor: color,
          color: editable ? Colors.dark2 : Colors.gray4,
          ...stylesInput,
        }}
        keyboardType={keyboardType}
        editable={editable}
        value={value}
        ref={inputRef}
        {...restOfProps}
        onSubmitEditing={onSubmitEditing}
        onBlur={event => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onEndEditing={onEndEditing}
        onChangeText={onChangeText}
        onFocus={event => {
          setIsFocused(true);
          onFocus?.(event);
        }}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          inputRef.current?.focus();
        }}>
        <Animated.View
          style={
            stylesLabel
              ? [
                  {
                    transform: [
                      {
                        scale: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1.11, 0.8],
                        }),
                      },
                      {
                        translateY: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [23, -12],
                        }),
                      },
                      {
                        translateX: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [16, -12],
                        }),
                      },
                    ],
                    backgroundColor: isFocused
                      ? Colors.transparent
                      : Colors.transparent,
                    marginStart:
                      (isFocused && label.length <= 3) || label.length <= 5
                        ? 10
                        : (!isFocused && label.length <= 3) || label.length <= 5
                        ? 20
                        : 10,
                    bottom: isFocused ? 42 : 42,
                    marginLeft:
                      (isFocused && label.length <= 3) || label.length <= 5
                        ? 20
                        : (!isFocused && label.length <= 3) || label.length <= 5
                        ? 20
                        : 10,
                  },
                ]
              : [
                  styles.MaterialUI_LabelContainer,
                  {
                    transform: [
                      {
                        scale: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1.11, 0.8],
                        }),
                      },
                      {
                        translateY: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [26, 4],
                        }),
                      },
                      {
                        translateX: focusAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [2, -6],
                        }),
                      },
                    ],
                    backgroundColor: isFocused ? Colors.white : Colors.white,
                    marginStart: '3%',
                    marginEnd: '3%',
                    // paddingLeft: isFocused ? "2%" : null,
                    bottom: 42,
                  },
                ]
          }>
          <Text
            style={[
              styles.MaterialUI_Label,
              //   {
              //     color: isFocused ? Colors.dark2 : Colors.gray4,
              //     left: label.length >= 5 || label.length >= 3 ? 10 : null,
              //   },
            ]}>
            {label}
            {errorText ? '*' : ''}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {!!errorText && <Text style={styles.MaterialUI_Errors}>{errorText}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  //% MATERIAL UI STYLES
  MaterialUI_InputStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.dark2,
    borderColor: Colors.dark2,
    borderWidth: 2,
    borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    lineHeight: 23.85,
    fontSize: 14,
    backgroundColor: Colors.white,
    width: '100%',
    height: 50,
  },
  MaterialUI_IputIcon: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: Colors.dark2,
  },
  MaterialUI_LabelContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    zIndex: 1,
    elevation: 1,
    shadowColor: Colors.transparent,
    backgroundColor: Colors.white,
  },
  MaterialUI_Label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  MaterialUI_Errors: {
    marginTop: '5%',
    marginLeft: '6%',
    fontSize: 12,
    color: Colors.red,
    fontFamily: 'Poppins-Medium',
  },
});

export default TextInputMaterialUI;
