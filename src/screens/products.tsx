import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import SearchBox from '../components/search';
import Header from '../components/header';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SECONDARY_COLOR,
  TEXT_COLOR,
} from '../helpers/constants';
import Loader from '../components/loader';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsByCategory} from '../store/actions/shop/shop';
import {IAppState} from '../store/reducers/appState';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {ICategory} from '../store/actions/shop/shop.d';
import SingleProduct from '../components/product';
import {addToCart, addToWishlist} from '../store/actions/shop/shop';
import PillLabel from '../components/pill-label';

type Props = {
  route: RouteProp<{params: {categoryDetails: ICategory}}, 'params'>;
};

const Products: React.FC<Props> = ({
  route: {
    params: {categoryDetails},
  },
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tag, setTag] = useState<string>('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const products = useSelector(({shopState}: IAppState) => shopState.products);
  useEffect(() => {
    setLoading(true);
    dispatch(
      getProductsByCategory(categoryDetails.categoryId, () =>
        setLoading(false),
      ),
    );
  }, [categoryDetails.categoryId, dispatch]);

  return (
    <View style={styles.container}>
      <Header back off />
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>{categoryDetails.categoryName}</Text>
      </View>
      <SearchBox />
      <ScrollView horizontal>
        {categoryDetails.tags.map(t => (
          <PillLabel
            iconType="material-community"
            iconName="check"
            color={tag === t ? SECONDARY_COLOR : TEXT_COLOR}
            bgColor={tag === t ? '#E2CBFF' : '#fff'}
            label={t}
            on={tag === t ? true : false}
            onPress={() => setTag(t)}
          />
        ))}
      </ScrollView>

      {loading ? (
        <Loader />
      ) : (
        <FlatList
          numColumns={1}
          data={products}
          contentContainerStyle={styles.flatlist}
          renderItem={({item}) => (
            <SingleProduct
              onItemPress={() =>
                navigation.navigate('SingleProduct', {
                  product: item,
                })
              }
              imageLink={item.productImage}
              price={item.price}
              subtitle={item.measure}
              title={item.productName}
              onCartPress={() => {
                dispatch(addToCart([item], () => {}));
              }}
              onFavoritePress={() => {
                () => {
                  dispatch(addToWishlist([item]));
                };
              }}
            />
          )}
          keyExtractor={item => item.productId}
        />
      )}
    </View>
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
  mainContainer: {
    flexGrow: 1,
  },
  flatlist: {
    width: '100%',
  },
});

export default Products;
