import {LanguageCode} from 'react-native-translator';

export const korean = (language: LanguageCode<'google'>) => {
  switch (language) {
    case 'ko':
      return '한국어';
    case 'en':
      return '영어';
    case 'ja':
      return '일본어';
    case 'zh-CN':
      return '중국어 간체';
    case 'zh-TW':
      return '중국어 번체';
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
    case 'ru':
      return '러시아어';
    case 'th':
      return '태국어';
    case 'id':
      return '인도네시아어';
    default:
      return '오류';
  }
};

export const ttsLanguage = (language: LanguageCode<'google'>) => {
  switch (language) {
    case 'ko':
      return 'ko-KR';
    case 'en':
      return 'en-IE';
    case 'ja':
      return 'ja-JP';
    case 'zh-CN':
      return 'zh-CN';
    case 'zh-TW':
      return 'zh-TW';
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
    case 'ru':
      return 'ru-RU';
    case 'th':
      return 'th-TH';
    case 'id':
      return 'id-ID';
    default:
      return 'en-IE';
  }
};

export default {
  korean,
  ttsLanguage,
};
