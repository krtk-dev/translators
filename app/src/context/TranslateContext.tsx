import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Keyboard, ScrollView} from 'react-native';
import InAppReview from 'react-native-in-app-review';
import {LanguageCode} from 'react-native-translator';
import Tts from 'react-native-tts';
import {History} from '../constants/types';
import languageTo from '../util/languageTo';
import {HistoryContext} from './HistoryContext';

export interface TranslatedData {
  google: string | null | Error;
  kakao: string | null | Error;
  papago: string | null | Error;
}

export type TranslateContextType = {
  scrollViewRef: React.RefObject<ScrollView>;
  text: string;
  onChangeText: (text: string) => void;
  fromLanguage: LanguageCode<'google'>;
  toLanguage: LanguageCode<'google'>;
  clear: () => void;
  reverseLanguage: () => void;
  updateFromLanguage: (language: LanguageCode<'google'>) => void;
  updateToLanguage: (language: LanguageCode<'google'>) => void;
  reverseTranslate: (text: string) => void;
  applyHistory: (history: History) => void;
};

export const TranslateContext = createContext<TranslateContextType>({} as any);

const TranslateProvider: React.FC = ({children}) => {
  const {addHistory} = useContext(HistoryContext);
  const scrollViewRef = useRef<ScrollView>(null); // 홈화면 스크롤뷰
  const [text, setText] = useState('');
  const [fromLanguage, setFromLanguage] =
    useState<LanguageCode<'google'>>('ko');
  const [toLanguage, setToLanguage] = useState<LanguageCode<'google'>>('en');

  const clear = useCallback(() => {
    // 초기화
    setText('');
  }, []);

  const reverseLanguage = useCallback(() => {
    // 원문과 번역할 언어를 서로 바꿈
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  }, [toLanguage, fromLanguage]);

  const reverseTranslate = useCallback(
    (_text: string) => {
      setText(_text); // text를 적용하고
      reverseLanguage(); // 언어도 바꿈
      scrollViewRef.current?.scrollTo({y: 0, animated: true});
      // setImmediate(translate); // translate시킴
    },
    [reverseLanguage, scrollViewRef],
  );

  const updateFromLanguage = useCallback(
    // 원문 언어 변경
    (language: LanguageCode<'google'>) => {
      if (toLanguage === language) setToLanguage(fromLanguage); // 같은 언어 끼리 번역 방지
      setFromLanguage(language);
    },
    [toLanguage, fromLanguage],
  );

  const updateToLanguage = useCallback(
    // 변역 할 언어 변경
    (language: LanguageCode<'google'>) => {
      if (fromLanguage === language) setFromLanguage(toLanguage); // 같은 언어 끼리 번역 방지
      setToLanguage(language);
      if (Math.random() < 0.05) InAppReview.RequestInAppReview(); // 20분의 1
    },
    [toLanguage, fromLanguage],
  );

  const applyHistory = useCallback((history: History) => {
    // 이전에 검색했던 기록을 다시 검색
    setToLanguage(history.toLanguage);
    setFromLanguage(history.fromLanguage);
    setText(history.text);
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  }, []);
  useEffect(() => {
    try {
      Tts.setDefaultLanguage(languageTo.ttsLanguage(toLanguage));
    } catch (error) {
      Tts.setDefaultLanguage('en-IE');
    }
  }, [toLanguage]);

  const contextValue = useMemo<TranslateContextType>(
    () => ({
      scrollViewRef,
      text,
      onChangeText: t => setText(t),
      clear,
      fromLanguage,
      toLanguage,
      reverseLanguage,
      reverseTranslate,
      updateFromLanguage,
      updateToLanguage,
      applyHistory,
    }),
    [
      scrollViewRef,
      text,
      setText,
      clear,
      fromLanguage,
      toLanguage,
      reverseLanguage,
      reverseTranslate,
      updateFromLanguage,
      updateToLanguage,
      applyHistory,
    ],
  );

  return (
    <TranslateContext.Provider value={contextValue}>
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
