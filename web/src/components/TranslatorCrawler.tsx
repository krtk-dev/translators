import React from 'react';
import { Language } from '../constants/types';
import { TranslatedData } from '../context/TranslateContext';

interface TranslatorCrawlerProps {
  fromLanguage: Language;
  toLanguage: Language;
  text: string;
  onTranslated: (data: TranslatedData) => void;
}

const TranslatorCrawler: React.FC<TranslatorCrawlerProps> = () => {
  return null;
};

export default TranslatorCrawler;
