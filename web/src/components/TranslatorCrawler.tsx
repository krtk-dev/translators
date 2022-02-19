import React, { useEffect, useState } from 'react';
import { Language } from '../constants/types';
import { TranslatedData } from '../context/TranslateContext';

interface TranslatorCrawlerProps {
  fromLanguage: Language;
  toLanguage: Language;
  text: string;
  onTranslated: (data: TranslatedData) => void;
}

const TranslatorCrawler: React.FC<TranslatorCrawlerProps> = props => {
  const { text, onTranslated } = props;

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer && clearTimeout(timer);
    if (!text) return;
    const _timer = setTimeout(() => {
      onTranslated({
        google: `번역완료!`,
        naver: `오른쪽 상단 버튼을 눌러`,
        kakao: '결과를 확인해주세요!',
      });
    }, 1000);
    setTimer(_timer);
  }, [text]);

  return null;
};

export default TranslatorCrawler;
