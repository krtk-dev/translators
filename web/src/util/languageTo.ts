import { Language } from '../constants/types';

export const korean = (language: Language) => {
  switch (language) {
    case 'kr':
      return '한국어';
    case 'en':
      return '영어';
    case 'jp':
      return '일본어';
    case 'cn':
      return '중국어';
    case 'vi':
      return '베트남어';
    case 'de':
      return '독일어';
    case 'es':
      return '스페인어';
    case 'fr':
      return '프랑스어';
    case 'it':
      return '이탈리아어';
    default:
      return '오류';
  }
};

export const kakaoLanguage = (language: Language) => language;
export const naverLanguage = (language: Language) => {
  switch (language) {
    case 'kr':
      return 'ko';
    case 'jp':
      return 'ja';
    case 'cn':
      return 'zh-CN';
    default:
      return language;
  }
};
export const googleLanguage = (language: Language) => {
  switch (language) {
    case 'kr':
      return 'ko';
    case 'jp':
      return 'ja';
    case 'cn':
      return 'zh-CN';
    default:
      return language;
  }
};
export const ttsLanguage = (language: Language) => {
  switch (language) {
    case 'kr':
      return 'ko-KR';
    case 'en':
      return 'en-IE';
    case 'jp':
      return 'ja-JP';
    case 'cn':
      return 'zh-CN';
    case 'vi':
      return 'vi-VI';
    case 'de':
      return 'de-DE';
    case 'es':
      return 'es-ES';
    case 'fr':
      return 'fr-FR';
    case 'it':
      return 'it-IT';
    default:
      return 'en-IE';
  }
};

export default {
  korean,
  ttsLanguage,
  googleLanguage,
  kakaoLanguage,
  naverLanguage,
};
