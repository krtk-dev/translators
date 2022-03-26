import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {TranslatorType} from '../constants/types';
import {STOREAGE_CARD_SEQUENCE_ID} from '../constants/values';

export type CardSequenceContextType = {
  cardSequence: TranslatorType[];
  updateCardSequence: (data: TranslatorType[]) => void;
};

export const CardSequenceContext = createContext<CardSequenceContextType>(
  {} as any,
);

const CardSequenceProvider: React.FC = ({children}) => {
  const [cardSequence, setCardSequence] = useState<TranslatorType[]>([
    'google',
    'papago',
    'kakao',
  ]);

  useEffect(() => {
    // 최초 1회 데이터를 받아와 스테이트에 저장
    (async () => {
      const data = await AsyncStorage.getItem(STOREAGE_CARD_SEQUENCE_ID);
      if (!data) return;
      if (JSON.parse(data).includes('naver')) {
        // 2.1.0 버전으로 업그레이드하면서 naver -> papago로 바꿨음
        // 따라서 기존 유저들의 Local storage를 임의로 변경해줌
        await updateCardSequence(cardSequence);
        return;
      }
      setCardSequence(JSON.parse(data));
    })();
  }, []);

  // 순서 변경
  const updateCardSequence = useCallback(async (data: TranslatorType[]) => {
    setCardSequence(data);
    await AsyncStorage.setItem(STOREAGE_CARD_SEQUENCE_ID, JSON.stringify(data)); // storage동기화
  }, []);

  const contextValue = useMemo<CardSequenceContextType>(
    () => ({
      cardSequence,
      updateCardSequence,
    }),
    [cardSequence, updateCardSequence],
  );

  return (
    <CardSequenceContext.Provider value={contextValue}>
      {children}
    </CardSequenceContext.Provider>
  );
};

export default CardSequenceProvider;
