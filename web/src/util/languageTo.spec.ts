import { LANGUAGES } from '../constants/values';
import languageTo from './languageTo';

describe('util/languageTo', () => {
  it('korean', () => {
    const koreans = LANGUAGES.map(language => languageTo.korean(language));
    expect(koreans.every(v => !!v && v !== '오류')).toBeTruthy();
  });
  it('ttsLanguage', () => {
    const ttsLanguage = LANGUAGES.map(language =>
      languageTo.ttsLanguage(language),
    );
    expect(ttsLanguage.every(v => !!v)).toBeTruthy();
  });
  it('kakaoLanguage', () => {
    const kakaoLanguage = LANGUAGES.map(language =>
      languageTo.kakaoLanguage(language),
    );
    expect(kakaoLanguage.every(v => !!v)).toBeTruthy();
  });
  it('naverLanguage', () => {
    const naverLanguage = LANGUAGES.map(language =>
      languageTo.naverLanguage(language),
    );
    expect(naverLanguage.every(v => !!v)).toBeTruthy();
  });
  it('googleLanguage', () => {
    const googleLanguage = LANGUAGES.map(language =>
      languageTo.googleLanguage(language),
    );
    expect(googleLanguage.every(v => !!v)).toBeTruthy();
  });
});
