import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, TEXT_COLOR} from '../helpers/constants';

type Props = {
  imageLink: ImageSourcePropType;
  title: string;
  artist?: string;
};

const Anthem: React.FC<Props> = ({imageLink, title, artist}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.col1}>
        <Image source={imageLink} style={styles.img} resizeMode="cover" />
      </TouchableOpacity>
      <View style={styles.col2}>
        <View style={styles.col2Comp}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{artist}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: SCREEN_HEIGHT * 0.05,
    marginBottom: 25,
  },
  col1: {
    borderRadius: 5,
    width: '13%',
    height: '100%',
    marginRight: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  col2: {
    borderRadius: 5,
    width: '82%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: TEXT_COLOR,
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: TEXT_COLOR,

  },
  col2Comp: {
    height: '100%',
  },
});

export default Anthem;
