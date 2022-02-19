import { Translator } from './types';

export const TRANSLATORS: Translator[] = ['google', 'naver', 'kakao'];
export const LANGUAGES = [
  'kr',
  'en',
  'jp',
  'cn',
  'vi',
  'de',
  'es',
  'fr',
  'it',
] as const;

export const PLAYSTORE_URL =
  'https://play.google.com/store/apps/details?id=com.koreanthinker.translators';
export const APPSTORE_URL = 'appstore';
export const GITHUB_URL = 'https://github.com/krtk-dev/translators';
