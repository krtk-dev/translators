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
import Tts from 'react-native-tts';
import TranslatorCrawler from '../components/TranslatorCrawler';
import {History, Language} from '../constants/types';
import languageTo from '../util/languageTo';
import {HistoryContext} from './HistoryContext';

export interface TranslatedData {
  google: string | null | Error;
  kakao: string | null | Error;
  naver: string | null | Error;
}

export type TranslateContextType = {
  scrollViewRef: React.RefObject<ScrollView>;
  text: string;
  onChangeText: (text: string) => void;
  loading: boolean;
  fromLanguage: Language;
  toLanguage: Language;
  translatedData: TranslatedData;
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
  const [translatedData, setTranslatedData] = useState<TranslatedData>({
    google: null,
    kakao: null,
    naver: null,
  });
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fromLanguage, setFromLanguage] = useState<Language>('kr');
  const [toLanguage, setToLanguage] = useState<Language>('en');

  const clear = useCallback(() => {
    // 초기화
    setText('');
    setTranslatedData({google: null, kakao: null, naver: null});
  }, []);

  const translate = useCallback(async () => {
    //------------- 실행 조건에 부합하는지 확인 -------------//
    if (loading) return; // 로딩중이면 실행안함
    if (!text) return; // 빈글은 번역안함
    //------------- 실행 전 -------------//
    Keyboard.dismiss(); // 키보드 닫기
    addHistory({text, fromLanguage, toLanguage}); // 검색기록에 추가
    setTranslatedData({google: null, kakao: null, naver: null}); // 초기화
    setCount(prev => prev + 1); // 리뷰용 카운트
    //------------- 실행 요청 -------------//
    setLoading(true); // 로딩 시작
  }, [addHistory, fromLanguage, loading, text, toLanguage, count]);

  const onTranslated = useCallback(
    (data: TranslatedData) => {
      //------------- 실행 후 -------------//
      setLoading(false); // 로딩 끝
      setTranslatedData(data);
      if (count !== 0 && count % 10 === 0) InAppReview.RequestInAppReview();
    },
    [count],
  );

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
    [translate, reverseLanguage, scrollViewRef],
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

  useEffect(() => {
    Tts.setDefaultLanguage(languageTo.ttsLanguage(toLanguage));
  }, [toLanguage]);

  const contextValue = useMemo<TranslateContextType>(
    () => ({
      scrollViewRef,
      text,
      onChangeText: t => setText(t),
      loading,
      clear,
      fromLanguage,
      toLanguage,
      translatedText: translatedData,
      translate,
      reverseLanguage,
      reverseTranslate,
      updateFromLanguage,
      updateToLanguage,
      applyHistory,
      translatedData,
    }),
    [
      scrollViewRef,
      clear,
      fromLanguage,
      loading,
      reverseLanguage,
      reverseTranslate,
      text,
      toLanguage,
      translate,
      translatedData,
      updateFromLanguage,
      updateToLanguage,
      applyHistory,
    ],
  );

  return (
    <TranslateContext.Provider value={contextValue}>
      <TranslatorCrawler
        fromLanguage={fromLanguage}
        toLanguage={toLanguage}
        loading={loading}
        text={text}
        onTranslated={onTranslated}
      />
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
