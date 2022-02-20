import { render, screen, waitFor } from '@testing-library/react';
import React, { useState } from 'react';
import { TranslatedData } from '../context/TranslateContext';
import TranslatorCrawler from './TranslatorCrawler';
import userEvent from '@testing-library/user-event';

const TestComponent = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState<TranslatedData | null>(null);

  return (
    <div>
      <input
        role="input"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <span role="output">{translated ? JSON.stringify(translated) : ''}</span>
      <TranslatorCrawler
        text={text}
        fromLanguage="kr"
        toLanguage="en"
        onTranslated={data => setTranslated(data)}
      />
    </div>
  );
};

describe('<TranslatorCrawler />', () => {
  it('text를 입력하면 번역 결과를 반환합니다.', async () => {
    render(<TestComponent />);
    // 임의의 번역할 값 넣기
    const input = screen.getByRole('input');
    userEvent.type(input, 'test_text');
    // output이 생길때까지 기다림
    await waitFor(() =>
      expect(!!screen.getByRole('output').innerHTML).toBeTruthy(),
    );
    // output이 유요한지 확인
    const output = screen.getByRole('output');
    const translated = JSON.parse(output.innerHTML);
    expect(translated).toHaveProperty('google');
    expect(translated).toHaveProperty('naver');
    expect(translated).toHaveProperty('kakao');
  });
});
