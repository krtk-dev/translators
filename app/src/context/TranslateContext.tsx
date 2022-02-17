import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import {ScrollView} from 'react-native';
import InAppReview from 'react-native-in-app-review';
import {History, Language, TranslateError} from '../constants/types';
import {HistoryContext} from './HistoryContext';

export type TranslateContextType = {
  scrollViewRef: React.RefObject<ScrollView>;
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
  applyHistory: (history: History) => void;
};

export const TranslateContext = createContext<TranslateContextType>({} as any);

const TranslateProvider: React.FC = ({children}) => {
  const {addHistory} = useContext(HistoryContext);

  const scrollViewRef = useRef<ScrollView>(null); // 홈화면 스크롤뷰
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
    if (loading) return; // 로딩중이면 실행안함
    if (!text) return; // 빈글은 번역안함
    setLoading(true);
    // 검색기록에 추가
    addHistory({text, fromLanguage, toLanguage});

    setTranslatedText({google: null, kakao: null, naver: null});
    // 번역후 리뷰 요청
    setLoading(false);
  }, [addHistory, fromLanguage, loading, text, toLanguage]);

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

  const applyHistory = useCallback((history: History) => {
    // 이전에 검색했던 기록을 다시 검색
    setToLanguage(history.toLanguage);
    setFromLanguage(history.fromLanguage);
    setText(history.text);
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  }, []);

  const contextValue = useMemo<TranslateContextType>(
    () => ({
      scrollViewRef,
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
      applyHistory,
    }),
    [
      scrollViewRef,
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
