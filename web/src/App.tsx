import React from 'react';
import TranslateProvider from './context/TranslateContext';
import HomePage from './pages/HomePage';
import 'x-frame-bypass';

const App = () => {
  return (
    <TranslateProvider>
      <HomePage />
    </TranslateProvider>
  );
};

export default App;
