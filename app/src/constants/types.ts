import {LANGUAGES} from './values';

export interface History {
  id: string;
  fromLanguage: Language;
  toLanguage: Language;
  text: string;
}

export type Translators = 'google' | 'naver' | 'kakao';
export type TranslateError = 'TranslateError';
export type Language = typeof LANGUAGES[number];
