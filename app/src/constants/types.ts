import {LANGUAGES} from './values';

export interface History {
  id: string;
  fromLanguage: Language;
  toLanguage: Language;
  text: string;
}

export type Translator = 'google' | 'naver' | 'kakao';
export type Language = typeof LANGUAGES[number];