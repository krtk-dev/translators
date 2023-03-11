import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import CardSequenceScreen from '../screens/CardSequenceScreen';
import CreditScreen from '../screens/CreditScreen';
import FullScreen, {FullScreenProps} from '../screens/FullScreen';
import HistoryScreen from '../screens/HistoryScreen';
import OssScreen from '../screens/OssScreen';
import HomeDrawerNavigation from './HomeDrawerNavigation';

export type RootStackParamList = {
  HomeDrawer: undefined;
  Full: FullScreenProps;
  CardSequence: undefined;
  Credit: undefined;
  History: undefined;
  Oss: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeDrawer"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <RootStack.Screen name="HomeDrawer" component={HomeDrawerNavigation} />
      <RootStack.Screen name="Full" component={FullScreen} />
      <RootStack.Screen name="CardSequence" component={CardSequenceScreen} />
      <RootStack.Screen name="Credit" component={CreditScreen} />
      <RootStack.Screen name="History" component={HistoryScreen} />
      <RootStack.Screen name="Oss" component={OssScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
