import { LANGUAGES } from './values';

export type Translator = 'google' | 'naver' | 'kakao';
export type Language = typeof LANGUAGES[number];
