import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import {SECONDARY_COLOR} from '../helpers/constants';
import {Switch} from 'react-native-switch';

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  on?: boolean;
};

const SubCategory: React.FC<Props> = ({title, onPress, on}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {on ? (
        <View style={styles.col2}>
          <Switch
            value={isEnabled}
            onValueChange={val => setIsEnabled(val)}
            activeText="Yes"
            inActiveText="No"
            backgroundActive="#E2CBFF"
            backgroundInactive="#ddd"
            circleActiveColor="#fff"
            circleInActiveColor="#fff"
            circleBorderActiveColor="#fff"
            circleBorderInactiveColor="#fff"
            activeTextStyle={{color: SECONDARY_COLOR}}
            inactiveTextStyle={{color: SECONDARY_COLOR}}
          />
        </View>
      ) : (
        <TouchableOpacity style={styles.col2} onPress={onPress}>
          <Text style={styles.subtitle}>CHANGE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  col1: {
    width: '70%',
  },
  col2: {
    width: '30%',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 22,
    color: '#2D0C57',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    color: SECONDARY_COLOR,
    textAlign: 'right',
  },
});

export default SubCategory;
