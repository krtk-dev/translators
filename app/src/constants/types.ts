import {LanguageCode} from 'react-native-translator';
import {LANGUAGES_CODES} from './values';

export interface History {
  id: string;
  fromLanguage: LanguageCode<'google'>;
  toLanguage: LanguageCode<'google'>;
  text: string;
}

export type TranslatorType = 'google' | 'papago' | 'kakao';
