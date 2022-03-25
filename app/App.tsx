import {StatusBar, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigations';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HistoryProvider from './src/context/HistoryContext';
import CardSequenceProvider from './src/context/CardSequenceContext';
import TranslateProvider from './src/context/TranslateContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Sending `tts',
  '`new NativeEventEmitter()` was called',
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
          <TranslateProvider>
            <StatusBar
              barStyle="light-content"
              translucent
              animated
              backgroundColor="transparent"
            />
            <Navigation />
          </TranslateProvider>
        </CardSequenceProvider>
      </HistoryProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
