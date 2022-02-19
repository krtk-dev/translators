import React from 'react';
import TranslateProvider from './context/TranslateContext';
import HomePage from './pages/HomePage';
import { Theme, ThemeProvider } from '@emotion/react';

const theme: Theme = {
  colors: {
    white: '#FFF',
    black: '#000',
    red: '#E44034',
    naver: '#34A855',
    kakao: '#FABC05',
    google: '#1A73E8',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TranslateProvider>
        <HomePage />
      </TranslateProvider>
    </ThemeProvider>
  );
};

export default App;
