import {LANGUAGES} from './values';

export interface History {
  id: string;
  from: string;
  to: string;
  content: string;
}

export type Translators = 'google' | 'naver' | 'kakao';
export type TranslateError = 'TranslateError';
export type Language = typeof LANGUAGES[number];
