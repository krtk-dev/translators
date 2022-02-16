import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Translators} from '../constants/types';
import {STOREAGE_CARD_SEQUENCE_ID} from '../constants/values';

export type CardSequenceContextType = {
  cardSequence: Translators[];
  updateCardSequence: (data: Translators[]) => void;
};

export const CardSequenceContext = createContext<CardSequenceContextType>(
  {} as any,
);

const CardSequenceProvider: React.FC = ({children}) => {
  const [cardSequence, setCardSequence] = useState<Translators[]>([
    'google',
    'naver',
    'kakao',
  ]);

  useEffect(() => {
    // 최초 1회 데이터를 받아와 스테이트에 저장
    (async () => {
      const data = await AsyncStorage.getItem(STOREAGE_CARD_SEQUENCE_ID);
      if (!data) return;
      setCardSequence(JSON.parse(data));
    })();
  }, []);

  // 순셔 변경
  const updateCardSequence = useCallback(async (data: Translators[]) => {
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
