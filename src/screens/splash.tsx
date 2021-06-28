import React from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, TEXT_COLOR} from '../helpers/constants';
import BgImage from '../assets/img/BG.png';
import Logo from '../assets/img/LOGO.png';
import CubeIcon from '../assets/img/Icon.png';
import Button from '../components/button';
import {useNavigation} from '@react-navigation/native';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.imgBg} resizeMode="cover">
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
      </ImageBackground>
      <View style={styles.innerContainer}>
        <Image source={CubeIcon} style={styles.image} resizeMode="cover" />

        <Text style={styles.mainText}>Non-Contact Deliveries</Text>
        <Text style={styles.subText}>
          When placing an order, select the option "contactless delivery" and
          the courier will your order at the door.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            height={40}
            primary
            text="ORDER NOW"
            onPress={() => navigation.navigate('BottomTab')}
          />
        </View>
        <TouchableOpacity
          style={styles.dismissContainer}
          onPress={() => navigation.navigate('BottomTab')}>
          <Text style={styles.dismiss}>DISMISS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A259FF',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  logo: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.1,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 40,
  },
  image: {
    width: 70,
    height: 70,
  },
  imgBg: {
    height: SCREEN_HEIGHT * 0.7,
    width: SCREEN_WIDTH,
    zIndex: -1,
  },
  mainText: {
    fontWeight: '700',
    fontSize: 38,
    color: '#2D0C57',
    textAlign: 'center',
    marginTop: 40,
  },
  subText: {
    fontSize: 14,
    color: TEXT_COLOR,
    textAlign: 'center',
    marginTop: 40,
  },
  innerContainer: {
    height: SCREEN_HEIGHT * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: '#F6F5F5',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dismiss: {
    color: TEXT_COLOR,
  },
  dismissContainer: {
    height: 40,
    marginTop: 20,
  },
});

export default Splash;
