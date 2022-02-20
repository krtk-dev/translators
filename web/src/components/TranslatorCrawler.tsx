import React, { useEffect, useState } from 'react';
import { Language } from '../constants/types';
import { TranslatedData } from '../context/TranslateContext';
import languageTo from '../util/languageTo';

interface TranslatorCrawlerProps {
  fromLanguage: Language;
  toLanguage: Language;
  text: string;
  onTranslated: (data: TranslatedData) => void;
}

const TranslatorCrawler: React.FC<TranslatorCrawlerProps> = props => {
  const { text, onTranslated, toLanguage } = props;

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer && clearTimeout(timer);
    if (!text) return;
    const _timer = setTimeout(() => {
      onTranslated({
        google: `번역완료!`,
        naver: `(${text})를(을) ${languageTo.korean(
          toLanguage,
        )}로 번역한 결과는`,
        kakao: '오른쪽 상단 앱스토어 버튼을 눌러, 앱애서 확인해주세요!',
      });
    }, 1000);
    setTimer(_timer);
  }, [text]);

  return null;
};

export default TranslatorCrawler;
