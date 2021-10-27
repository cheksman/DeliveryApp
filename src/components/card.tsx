import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  GestureResponderEvent,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../helpers/constants';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  imageLink: ImageSourcePropType;
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  icon: React.FC;
};

const Card: React.FC<Props> = ({
  onPress,
  imageLink,
  title,
  subtitle1,
  subtitle2,
  icon: Icon,
}) => {
  return (
    <TouchableOpacity style={styles.container1} onPress={onPress}>
      <ImageBackground
        style={styles.imgBg}
        imageStyle={styles.img}
        source={imageLink}
        resizeMode="cover"
      />
      <View style={styles.container2}>
        <View style={styles.col1}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle1}</Text>
          <Text style={styles.subtitle}>{subtitle2}</Text>
        </View>
        <View style={styles.col2}>
          <Icon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexGrow: 1,
  },
  img: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container1: {
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.5,
    elevation: 2,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 30,
    color: '#2D0C57',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    color: '#9586A8',
    lineHeight: 18,
  },
  container2: {
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    height: '20%',
  },
  col1: {
    width: '90%',
  },
  col2: {
    width: '10%',
  },
});

export default Card;
