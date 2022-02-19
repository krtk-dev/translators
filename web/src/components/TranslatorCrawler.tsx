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
  const { text, toLanguage, onTranslated } = props;

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer && clearTimeout(timer);
    if (!text) return;
    const _timer = setTimeout(() => {
      onTranslated({
        google: `"${text}"를(을)`,
        naver: ` ${languageTo.korean(toLanguage)}로 번역한 결과가 궁금하시면`,
        kakao: '오른쪽 상단 버튼을 통해 앱에서 찾아 보실 수 있습니다!',
      });
    }, 1000);
    setTimer(_timer);
  }, [text]);

  return null;
};

export default TranslatorCrawler;
