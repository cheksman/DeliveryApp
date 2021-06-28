/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/store/store';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import RootApp from './src/nav/rootapp';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SECONDARY_COLOR,
} from './src/helpers/constants';
import SplashBg from './src/assets/img/SplashBg.jpg';

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={
          <ImageBackground
            source={SplashBg}
            style={styles.imageBackgroundStyles}>
            <View style={styles.activityContainer}>
              <ActivityIndicator size={40} color={SECONDARY_COLOR} />
            </View>
          </ImageBackground>
        }>
        <RootApp />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  imageBackgroundStyles: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  activityContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
