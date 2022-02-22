import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TranslateProvider from './context/TranslateContext';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import SupportPage from './pages/SupportPage';

const App = () => {
  return (
    <TranslateProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </TranslateProvider>
  );
};

export default App;
