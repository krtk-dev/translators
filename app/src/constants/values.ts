import {Platform} from 'react-native';
import {LanguageCode} from 'react-native-translator';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const STOREAGE_HISTORYS_ID = '@HISTORYS';
export const STOREAGE_CARD_SEQUENCE_ID = '@CARD_SEQUENCE';

// From google language code
// https://github.com/KoreanThinker/react-native-translator#support-languages
export const LANGUAGES_CODES: LanguageCode<'google'>[] = [
  'ko',
  'en',
  'ja',
  'zh-CN',
  'zh-TW',
  'vi',
  'de',
  'es',
  'fr',
  'it',
  'ru',
  'th',
  'id',
];
export const PLAYSTORE_URL =
  'https://play.google.com/store/apps/details?id=com.koreanthinker.translators';
export const RATE_UNIT = 30;
