import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';

type Props = {
  label: string;
  iconName: string;
  iconType: string;
  color: string;
  bgColor: string;
  on?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};
const PillLabel: React.FC<Props> = ({
  label,
  iconName,
  iconType,
  color,
  bgColor,
  on,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles({color, bgColor}).container}
      onPress={onPress}>
      {on ? (
        <View style={styles({color, bgColor}).col1}>
          <Icon name={iconName} type={iconType} color={color} />
        </View>
      ) : null}
      <View style={styles({color, bgColor}).col2}>
        <Text style={styles({color, bgColor}).textStyles}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ({color, bgColor}: {color: string; bgColor: string}) =>
  StyleSheet.create({
    container: {
      borderRadius: 20,
      width: 'auto',
      height: 40,
      flexGrow: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor,
      margin: 3,
      paddingHorizontal: 20,
    },
    textStyles: {
      color: color,
    },
    col1: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    col2: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default PillLabel;
