import {LANGUAGES} from './values';

export interface History {
  id: string;
  fromLanguage: Language;
  toLanguage: Language;
  text: string;
}

export type Translator = 'google' | 'papago' | 'kakao';
export type Language = typeof LANGUAGES[number];
