import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import TranslatorCrawler from '../components/TranslatorCrawler';
import { Language } from '../constants/types';

export interface TranslatedData {
  google: string;
  kakao: string;
  naver: string;
}

export type TranslateContextType = {
  text: string;
  onChangeText: (text: string) => void;
  fromLanguage: Language;
  toLanguage: Language;
  translatedData: TranslatedData;
  reverseLanguage: () => void;
  updateFromLanguage: (language: Language) => void;
  updateToLanguage: (language: Language) => void;
  reverseTranslate: (text: string) => void;
};

export const TranslateContext = createContext<TranslateContextType>(
  {} as TranslateContextType,
);

const TranslateProvider: React.FC = ({ children }) => {
  const [text, setText] = useState('');
  const [translatedData, setTranslatedData] = useState<TranslatedData>({
    google: '',
    kakao: '',
    naver: '',
  });
  const [fromLanguage, setFromLanguage] = useState<Language>('kr');
  const [toLanguage, setToLanguage] = useState<Language>('en');

  useEffect(() => {
    if (text) {
      setTranslatedData({
        google: '로딩중...',
        kakao: '로딩중...',
        naver: '로딩중...',
      });
    } else {
      setTranslatedData({
        google: '',
        kakao: '',
        naver: '',
      });
    }
  }, [text]);

  const reverseLanguage = useCallback(() => {
    // 원문과 번역할 언어를 서로 바꿈
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  }, [toLanguage, fromLanguage]);

  const reverseTranslate = useCallback(
    (_text: string) => {
      setText(_text); // text를 적용하고
      reverseLanguage(); // 언어도 바꿈
    },
    [reverseLanguage],
  );

  const updateFromLanguage = useCallback(
    // 원문 언어 변경
    (language: Language) => {
      if (toLanguage === language) setToLanguage(fromLanguage); // 같은 언어 끼리 번역 방지
      setFromLanguage(language);
    },
    [toLanguage, fromLanguage],
  );

  const updateToLanguage = useCallback(
    // 변역 할 언어 변경
    (language: Language) => {
      if (fromLanguage === language) setFromLanguage(toLanguage); // 같은 언어 끼리 번역 방지
      setToLanguage(language);
    },
    [toLanguage, fromLanguage],
  );

  const onTranslated = useCallback((data: TranslatedData) => {
    setTranslatedData(data);
  }, []);

  const contextValue = useMemo<TranslateContextType>(
    () => ({
      text,
      onChangeText: t => setText(t),
      fromLanguage,
      toLanguage,
      translatedText: translatedData,
      reverseLanguage,
      reverseTranslate,
      updateFromLanguage,
      updateToLanguage,
      translatedData,
    }),
    [
      fromLanguage,
      reverseLanguage,
      reverseTranslate,
      text,
      toLanguage,
      translatedData,
      updateFromLanguage,
      updateToLanguage,
    ],
  );

  return (
    <TranslateContext.Provider value={contextValue}>
      <TranslatorCrawler
        fromLanguage={fromLanguage}
        toLanguage={toLanguage}
        text={text}
        onTranslated={onTranslated}
      />
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
