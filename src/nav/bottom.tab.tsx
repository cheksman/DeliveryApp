import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SECONDARY_COLOR, TEXT_COLOR} from '../helpers/constants';
import Checkout from '../screens/checkout';
import Profile from '../screens/profile';
import {Icon} from 'react-native-elements';
import {ProductStack} from './stack';
import {useSelector} from 'react-redux';
import {IAppState} from '../store/reducers/appState';

const BottomTabNavigation: React.FC = () => {
  const BottomTab = createMaterialBottomTabNavigator();
  const cart = useSelector(({shopState}: IAppState) => shopState.cart);
  return (
    <BottomTab.Navigator
      initialRouteName="Categories"
      backBehavior="order"
      labeled={false}
      activeColor={SECONDARY_COLOR}
      inactiveColor={TEXT_COLOR}
      barStyle={bottomTabStyles.barStyles}>
      <BottomTab.Screen
        name="Categories"
        component={ProductStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              type="material-community"
              color={color}
              name={focused ? 'view-grid' : 'view-grid-outline'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Checkout"
        component={Checkout}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View>
              {cart?.length ? (
                <View style={bottomTabStyles.count}>
                  <Text>{cart?.length.toString()}</Text>
                </View>
              ) : null}
              <Icon
                type="material-community"
                color={color}
                name={focused ? 'cart' : 'cart-outline'}
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              type="material-community"
              color={color}
              name={focused ? 'account' : 'account-outline'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const bottomTabStyles = StyleSheet.create({
  barStyles: {
    backgroundColor: '#fff',
    height: 60,
  },
  count: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#CBF265',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    left: 10,
    top: -10,
  },
});

export default BottomTabNavigation;
