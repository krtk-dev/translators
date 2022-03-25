import { LANGUAGES } from './values';

export type Translator = 'google' | 'papago' | 'kakao';
export type Language = typeof LANGUAGES[number];
