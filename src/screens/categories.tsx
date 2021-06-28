import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CardBox from '../components/card-box';
import SearchBox from '../components/search';
import Header from '../components/header';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../helpers/constants';
import Loader from '../components/loader';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories} from '../store/actions/shop/shop';
import {IAppState} from '../store/reducers/appState';
import {useNavigation} from '@react-navigation/native';

const Categories: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const categories = useSelector(
    ({shopState}: IAppState) => shopState.categories,
  );
  useEffect(() => {
    setLoading(true);
    dispatch(getAllCategories(() => setLoading(false)));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header back off />
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Categories</Text>
      </View>
      <SearchBox />
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          numColumns={2}
          data={categories}
          contentContainerStyle={styles.flatlist}
          renderItem={({item}) => (
            <CardBox
              imageLink={item.categoryImage}
              title={item.categoryName}
              subtitle={'(' + item.productsNumber.toString() + ')'}
              onPress={() =>
                navigation.navigate('ProductList', {
                  categoryDetails: item,
                })
              }
            />
          )}
          keyExtractor={item => item.categoryId}
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
  flatlist: {
    width: '100%',
    alignItems: 'center',
    flexGrow: 1,
  },
});

export default Categories;
