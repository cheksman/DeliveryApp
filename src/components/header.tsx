import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {SCREEN_WIDTH, SCREEN_HEIGHT, TEXT_COLOR} from '../helpers/constants';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title?: string;
  back?: boolean;
  off?: boolean;
  bgColor?: string;
};

const Header: React.FC<Props> = ({
  title,
  back,
  off,
  bgColor = 'transparent',
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles({bgColor}).container}>
      {back ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles({bgColor}).iconContainer}>
          <Icon
            name="chevron-left"
            type="material-community"
            size={30}
            color={TEXT_COLOR}
          />
        </TouchableOpacity>
      ) : null}

      {off ? null : (
        <View style={styles({bgColor}).headerTextContainer}>
          <Text style={styles({bgColor}).headerText}>{title}</Text>
        </View>
      )}
    </View>
  );
};

const styles = ({bgColor}: {bgColor: string}) =>
  StyleSheet.create({
    headerText: {
      fontSize: 24,
      fontWeight: '700',
      color: '#2D0C57',
      textAlign: 'center',
    },
    headerTextContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
    },
    container: {
      height: SCREEN_HEIGHT * 0.1,
      width: SCREEN_WIDTH,
      flexDirection: 'row',
      alignItems: 'flex-end',
      backgroundColor: bgColor,
    },
    iconContainer: {
      width: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bgColor,
      marginBottom: 5,
    },
  });

export default Header;
