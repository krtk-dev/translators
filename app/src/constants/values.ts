import {Platform} from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const STOREAGE_HISTORYS_ID = '@HISTORYS';
export const STOREAGE_CARD_SEQUENCE_ID = '@CARD_SEQUENCE';

export const LANGUAGELIST = [
  'kr',
  'en',
  'jp',
  'cn',
  'vi',
  'de',
  'es',
  'fr',
  'it',
];
export const PLAYSTORE_URL =
  'https://play.google.com/store/apps/details?id=com.koreanthinker.translators';
export const RATE_UNIT = 30;
