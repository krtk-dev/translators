import React, {createContext, useCallback, useMemo, useState} from 'react';
import InAppReview from 'react-native-in-app-review';
import {Language, TranslateError} from '../constants/types';

export type TranslateContextType = {
  text: string;
  onChangeText: (text: string) => void;
  fromLanguage: Language;
  toLanguage: Language;
  translatedText: {
    google: string | null | TranslateError;
    kakao: string | null | TranslateError;
    naver: string | null | TranslateError;
  };
  clear: () => void;
  translate: () => void;
  reverseLanguage: () => void;
  updateFromLanguage: (language: Language) => void;
  updateToLanguage: (language: Language) => void;
  reverseTranslate: (text: string) => void;
};

export const TranslateContext = createContext<TranslateContextType>({} as any);

const TranslateProvider: React.FC = ({children}) => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState({
    google: null,
    kakao: null,
    naver: null,
  });
  const [loading, setLoading] = useState(false);
  const [fromLanguage, setFromLanguage] = useState<Language>('kr');
  const [toLanguage, setToLanguage] = useState<Language>('en');

  const clear = useCallback(() => {
    // 초기화
    setText('');
    setTranslatedText({google: null, kakao: null, naver: null});
  }, []);

  const translate = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    setTranslatedText({google: null, kakao: null, naver: null});
    setLoading(false);
  }, [loading]);

  const reverseLanguage = useCallback(() => {
    // 원문과 번역할 언어를 서로 바꿈
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  }, [toLanguage, fromLanguage]);

  const reverseTranslate = useCallback(
    (_text: string) => {
      setText(_text); // text를 적용하고
      setImmediate(translate); // translate시킴
    },
    [translate],
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

  const contextValue = useMemo<TranslateContextType>(
    () => ({
      text,
      onChangeText: t => setText(t),
      clear,
      fromLanguage,
      toLanguage,
      translatedText,
      translate,
      reverseLanguage,
      reverseTranslate,
      updateFromLanguage,
      updateToLanguage,
    }),
    [
      clear,
      fromLanguage,
      reverseLanguage,
      reverseTranslate,
      text,
      toLanguage,
      translate,
      translatedText,
      updateFromLanguage,
      updateToLanguage,
    ],
  );

  return (
    <TranslateContext.Provider value={contextValue}>
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
