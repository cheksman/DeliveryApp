import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash';
import Categories from '../screens/categories';
import Products from '../screens/products';
import SingleProducts from '../screens/single-product';
import BottomTabNavigation from './bottom.tab';
import Payment from '../screens/payment';

export const SplashStack: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SingleProduct" component={SingleProducts} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export const ProductStack: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Categories" headerMode="none">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="ProductList" component={Products} />
    </Stack.Navigator>
  );
};
