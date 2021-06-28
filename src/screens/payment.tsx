import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import Header from '../components/header';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../helpers/constants';
import CardBg from '../assets/img/cardbg.png';
import {Input} from 'react-native-elements/dist/input/Input';
import Button from '../components/button';

const Payment: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Header back off />
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Credit/Debit Card</Text>
      </View>
      <ImageBackground
        source={CardBg}
        style={styles.cardbg}
        resizeMode="contain"
      />
      <View>
        <Text>Name on card</Text>
        <Input />
      </View>
      <View>
        <Text>Card number</Text>
        <Input rightIcon={} />
      </View>
      <View>
        <View>
          <Text>Expiry date</Text>
          <Input />
        </View>
        <View>
          <Text>CVC</Text>
          <Input />
        </View>
      </View>
      <View>
        <Button height={40} primary onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    fontFamily: 'Roboto',
    fontSize: 38,
    fontWeight: '700',
    color: '#2D0C57',
  },
  pageTitleContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  container: {
    backgroundColor: '#F6F5F5',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingBottom: 60,
  },
  cardbg: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.3,
  },
});

export default Payment;
