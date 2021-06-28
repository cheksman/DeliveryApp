import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  GestureResponderEvent,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../helpers/constants';
import Button from './button';

type Props = {
  onItemPress: (event: GestureResponderEvent) => void;
  onCartPress: (event: GestureResponderEvent) => void;
  imageLink: ImageSourcePropType;
  title: string;
  subtitle?: string;
  onFavoritePress: (event: GestureResponderEvent) => void;
  price: string;
};

const SingleProduct: React.FC<Props> = ({
  onItemPress,
  imageLink,
  title,
  subtitle,
  onCartPress,
  onFavoritePress,
  price,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.col1} onPress={onItemPress}>
        <Image source={imageLink} style={styles.img} resizeMode="cover" />
      </TouchableOpacity>
      <View style={styles.col2}>
        <View style={styles.col2Comp}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.col2Comp}>
          <Text style={styles.subtitle}>
            <Text style={styles.price}>{price}</Text> &#8364; /{subtitle}
          </Text>
        </View>
        <View style={styles.butCont}>
          <View style={styles.favCont}>
            <Button height={35} onPress={onFavoritePress}>
              <Icon
                name="heart-outline"
                type="material-community"
                color="#D9D0E3"
              />
            </Button>
          </View>
          <View style={styles.cartCont}>
            <Button primary height={35} onPress={onCartPress}>
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
    height: SCREEN_HEIGHT * 0.13,
    marginBottom: 25,
  },
  col1: {
    borderRadius: 5,
    width: SCREEN_WIDTH * 0.4,
    height: '100%',
  },
  col2: {
    borderRadius: 5,
    width: SCREEN_WIDTH * 0.4,
    height: '100%',
    justifyContent: 'space-between',
  },
  butCont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  favCont: {
    width: '45%',
  },
  cartCont: {
    width: '45%',
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 12,
  },
  textContainer: {
    backgroundColor: '#FFF',
    padding: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  col2Comp: {
    height: '30%',
  },
});

export default SingleProduct;
