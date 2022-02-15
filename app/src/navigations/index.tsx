import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import RootStackNavigation, {RootStackParamList} from './RootStackNavigation';

import React from 'react';
import {COLORS} from '../constants/styles';

export type NavigationParamList = RootStackParamList;

const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {...DefaultTheme.colors, background: COLORS.black},
      }}>
      <RootStackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
