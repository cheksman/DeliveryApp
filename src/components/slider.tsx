import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../helpers/constants';
import Indicator from './indicator';

type Props = {
  onBackPress: (event: GestureResponderEvent) => void;
  onMorePress: (event: GestureResponderEvent) => void;
  imageLink: ImageSourcePropType;
  dataLength: number;
};

const Slider: React.FC<Props> = ({
  onBackPress,
  onMorePress,
  imageLink,
  dataLength,
}) => {
  return (
    <View style={styles.container1}>
      <ImageBackground
        style={styles.imgBg}
        source={imageLink}
        resizeMode="cover">
        <Indicator dataLength={dataLength} />
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.col1} onPress={onBackPress}>
            <Icon name="arrow-left" type="material-community" color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.col2} onPress={onMorePress}>
            <Icon
              name="dots-horizontal"
              type="material-community"
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container1: {
    borderRadius: 10,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.45,
    elevation: 1,
  },
  bottomView: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  col1: {
    width: '10%',
  },
  col2: {
    width: '10%',
  },
});

export default Slider;
