import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {History} from '../constants/types';
import {STOREAGE_HISTORYS_ID} from '../constants/values';

export type HistoryContextType = {
  historys: History[];
  removeHistory: (id: string) => void;
  addHistory: (data: Omit<History, 'id'>) => void;
};

export const HistoryContext = createContext<HistoryContextType>({} as any);

const HistoryProvider: React.FC = ({children}) => {
  const [historys, setHistorys] = useState<History[]>([]);

  useEffect(() => {
    // 최초 1회 데이터를 받아와 historys 스테이트에 저장
    (async () => {
      const data = await AsyncStorage.getItem(STOREAGE_HISTORYS_ID);
      if (!data) return;
      setHistorys(JSON.parse(data));
    })();
  }, []);

  useEffect(() => {
    // history가 바뀔때마다 storage와 동기화
    if (!historys) return;
    AsyncStorage.setItem(STOREAGE_HISTORYS_ID, JSON.stringify(historys));
  }, [historys]);

  // 삭제 액션
  const removeHistory = useCallback((id: string) => {
    setHistorys(prev => prev.filter(value => value.id !== id));
  }, []);
  // 추가 액션
  const addHistory = useCallback((data: Omit<History, 'id'>) => {
    const history: History = {
      id: Date.now().toString(), // 임의의 아이디 생성
      ...data,
    };
    setHistorys(prev => [history, ...prev.slice(0, 9)]);
  }, []);

  const contextValue = useMemo<HistoryContextType>(
    () => ({
      historys,
      removeHistory,
      addHistory,
    }),
    [historys, removeHistory, addHistory],
  );

  return (
    <HistoryContext.Provider value={contextValue}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
