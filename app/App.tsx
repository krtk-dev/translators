import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigations';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HistoryProvider from './src/context/HistoryContext';
import CardSequenceProvider from './src/context/CardSequenceContex';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <SafeAreaProvider>
      <HistoryProvider>
        <CardSequenceProvider>
          <StatusBar barStyle="light-content" />
          <Navigation />
        </CardSequenceProvider>
      </HistoryProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
