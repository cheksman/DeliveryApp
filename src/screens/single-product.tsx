import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, ImageBackground} from 'react-native';
import {
  PRIMARY_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TEXT_COLOR,
} from '../helpers/constants';
import Button from '../components/button';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {IProduct} from '../store/actions/shop/shop.d';
import {Icon} from 'react-native-elements';
import Header from '../components/header';
import {addToCart, addToWishlist} from '../store/actions/shop/shop';
import {useDispatch} from 'react-redux';

type Props = {
  route: RouteProp<{params: {product: IProduct}}, 'params'>;
};

const SingleProducts: React.FC<Props> = ({
  route: {
    params: {product},
  },
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={product.productImage}
        style={styles.imgBg}
        resizeMode="cover">
        <Header off back />
      </ImageBackground>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.title}>{product.productName}</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            <Text style={styles.price}>{product.price}</Text> &#8364; /
            {product.measure}
          </Text>
        </View>
        <Text style={styles.mainText}>
          ~ {product.unit} / {product.measure}
        </Text>
        <View>
          <Text style={styles.location}>{product.location}</Text>
        </View>
        <Text style={styles.subText}>{product.description}</Text>
        <View style={styles.butCont}>
          <View style={styles.favCont}>
            <Button
              height={40}
              onPress={() => {
                dispatch(addToWishlist([product]));
              }}>
              <Icon
                name="heart-outline"
                type="material-community"
                color="#D9D0E3"
              />
            </Button>
          </View>
          <View style={styles.cartCont}>
            <Button
              primary
              height={40}
              onPress={() => {
                dispatch(
                  addToCart([product], () => navigation.navigate('Categories')),
                );
              }}>
              <Icon
                name="cart-outline"
                type="material-community"
                color="#fff"
              />
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F5F5',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  logo: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.1,
  },
  image: {
    width: 70,
    height: 70,
  },
  imgBg: {
    height: SCREEN_HEIGHT * 0.4,
    width: SCREEN_WIDTH,
    zIndex: -1,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 34,
    color: '#2D0C57',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: TEXT_COLOR,
  },
  price: {
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#2D0C57',
  },
  mainText: {
    fontSize: 16,
    color: PRIMARY_COLOR,
    marginVertical: 10,
  },
  location: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#2D0C57',
  },
  subText: {
    fontSize: 16,
    color: TEXT_COLOR,
    marginTop: 10,
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
    paddingBottom: 40,
    flexGrow: 1,
  },
  butCont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  favCont: {
    width: '30%',
  },
  cartCont: {
    width: '60%',
  },
});

export default SingleProducts;
