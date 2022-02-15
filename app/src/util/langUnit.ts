export function initial2korean(init) {
  switch (init) {
    case 'kr':
      return '한국어';
    case 'en':
      return '영어';
    case 'jp':
      return '일본어';
    case 'cn':
      return '중국어';
    case 'vi':
      return '베트남어';
    case 'de':
      return '독일어';
    case 'es':
      return '스페인어';
    case 'fr':
      return '프랑스어';
    case 'it':
      return '이탈리아어';
    default:
      return '오류';
  }
}

export function kakaoLang2Naver(lang) {
  switch (lang) {
    case 'kr':
      return 'ko';
    case 'jp':
      return 'ja';
    case 'cn':
      return 'zh-CN';
    default:
      return lang;
  }
}
export function kakaoLang2Google(lang) {
  switch (lang) {
    case 'kr':
      return 'ko';
    case 'jp':
      return 'ja';
    case 'cn':
      return 'zh-CN';
    default:
      return lang;
  }
}

export function kakaoLang2TTS(lang) {
  switch (lang) {
    case 'kr':
      return 'ko-KR';
    case 'en':
      return 'en-IE';
    case 'jp':
      return 'ja-JP';
    case 'cn':
      return 'zh-CN';
    case 'vi':
      return 'vi-VI';
    case 'de':
      return 'de-DE';
    case 'es':
      return 'es-ES';
    case 'fr':
      return 'fr-FR';
    case 'it':
      return 'it-IT';
    default:
      return 'en-IE';
  }
}
