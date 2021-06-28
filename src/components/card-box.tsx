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
  subtitle: string;
};

const CardBox: React.FC<Props> = ({onPress, imageLink, title, subtitle}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        style={styles.imgBg}
        imageStyle={styles.img}
        source={imageLink}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: '100%',
    // height: '80%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexGrow: 1,
  },
  img: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.25,
    elevation: 1,
    margin: 10,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#2D0C57',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    color: '#9586A8',
    lineHeight: 14,
  },
  textContainer: {
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 8,
    height: '30%',
  },
});

export default CardBox;
