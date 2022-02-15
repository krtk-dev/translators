import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigations';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <GestureHandlerRootView>
      <Navigation />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
