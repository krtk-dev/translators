export interface History {
  id: string;
  from: string;
  to: string;
  content: string;
}

export type Translators = 'google' | 'naver' | 'kakao';
