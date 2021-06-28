import React from 'react';
import {
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
  Text,
} from 'react-native';
import {PRIMARY_COLOR, TEXT_COLOR} from '../helpers/constants';

type Props = {
  primary?: boolean;
  text?: string;
  onPress: (event: GestureResponderEvent) => void;
  height: number;
};

const Button: React.FC<Props> = ({
  primary,
  children,
  height = 40,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={primary ? styles({height}).primary : styles({height}).white}
      onPress={onPress}>
      {text ? <Text style={styles({}).text}>{text}</Text> : children}
    </TouchableOpacity>
  );
};

const styles = ({height}: {height?: number}) =>
  StyleSheet.create({
    primary: {
      backgroundColor: PRIMARY_COLOR,
      color: '#fff',
      borderRadius: 5,
      elevation: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      width: '100%',
    },
    white: {
      backgroundColor: '#fff',
      color: TEXT_COLOR,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#D9D0E3',
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      // elevation: 1,
      width: '100%',
    },
    text: {
      color: '#fff',
    },
  });

export default Button;
