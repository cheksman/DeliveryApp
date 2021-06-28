import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashStack} from './stack';

const RootApp: React.FC = () => {
  return (
    <NavigationContainer>
      <SplashStack />
    </NavigationContainer>
  );
};

export default RootApp;
