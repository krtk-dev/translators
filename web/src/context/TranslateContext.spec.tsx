import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { Language } from '../constants/types';
import TranslateProvider, { TranslateContext } from './TranslateContext';

describe('TranslateContext', () => {
  describe('onChangeText', () => {
    it('번역할 문자열을 수정할 수 있습니다.', () => {
      const TestComponent = () => {
        const { text, onChangeText } = useContext(TranslateContext);
        return (
          <input
            role="input"
            value={text}
            onChange={e => onChangeText(e.target.value)}
          />
        );
      };
      render(<TestComponent />, {
        wrapper: ({ children }) => (
          <TranslateProvider>{children}</TranslateProvider>
        ),
      });
      const input = screen.getByRole('input');
      userEvent.type(input, 'test_text');
      expect(input).toHaveValue('test_text');
    });
    it('번역한 문자열을 수정한후 자동으로 번역이 됩니다.', async () => {
      const TestComponent = () => {
        const { text, onChangeText, translatedData } =
          useContext(TranslateContext);
        return (
          <>
            <input
              role="input"
              value={text}
              onChange={e => onChangeText(e.target.value)}
            />
            <span role="output">
              {translatedData ? JSON.stringify(translatedData) : ''}
            </span>
          </>
        );
      };
      render(<TestComponent />, {
        wrapper: ({ children }) => (
          <TranslateProvider>{children}</TranslateProvider>
        ),
      });

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
  describe('reverseTranslate', () => {
    it('번역된 문자열을 언어를 서로바꿔 다시 번역합니다.', async () => {
      const TestComponent = () => {
        const {
          text,
          onChangeText,
          translatedData,
          reverseTranslate,
          fromLanguage,
          toLanguage,
        } = useContext(TranslateContext);
        return (
          <>
            <input
              role="input"
              value={text}
              onChange={e => onChangeText(e.target.value)}
            />
            <span role="output">
              {translatedData ? JSON.stringify(translatedData) : ''}
            </span>
            <span role="fromLanguage">{fromLanguage}</span>
            <span role="toLanguage">{toLanguage}</span>
            <button
              onClick={() => reverseTranslate(translatedData.google)}
              role="reverseTranslate"
            ></button>
          </>
        );
      };
      render(<TestComponent />, {
        wrapper: ({ children }) => (
          <TranslateProvider>{children}</TranslateProvider>
        ),
      });

      const prevFromLanguage = screen.getByRole('fromLanguage').innerHTML;
      const prevToLanguage = screen.getByRole('toLanguage').innerHTML;
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
      const prevGoogleTranslated = translated.google;
      // reverseTranslate 실행
      userEvent.click(screen.getByRole('reverseTranslate'));
      // 언어 변경 확인
      const newFromLanguage = screen.getByRole('fromLanguage').innerHTML;
      const newToLanguage = screen.getByRole('toLanguage').innerHTML;
      expect(prevFromLanguage).toBe(newToLanguage);
      expect(prevToLanguage).toBe(newFromLanguage);
      // 기존의 번역결과가 원문으로 적용됬는지 확인
      expect(screen.getByRole('input')).toHaveValue(prevGoogleTranslated);
    });
  });

  describe('updateFromLanguage', () => {
    it('원문의 언어를 수정할 수 있습니다.', () => {
      const toBeUpdateValue: Language = 'fr';
      const TestComponent = () => {
        const { updateFromLanguage, fromLanguage } =
          useContext(TranslateContext);
        return (
          <>
            <span role="fromLanguage">{fromLanguage}</span>
            <button
              onClick={() => updateFromLanguage(toBeUpdateValue)}
              role="updateFromLanguage"
            />
          </>
        );
      };
      render(<TestComponent />, {
        wrapper: ({ children }) => (
          <TranslateProvider>{children}</TranslateProvider>
        ),
      });
      userEvent.click(screen.getByRole('updateFromLanguage'));
      expect(screen.getByRole('fromLanguage').innerHTML).toBe(toBeUpdateValue);
    });
    it('원문의 언어를 번역할 언어로 바꿀 시 번역할 언어도 원문의 언어로 바뀝니다.', () => {
      const TestComponent = () => {
        const { updateFromLanguage, fromLanguage, toLanguage } =
          useContext(TranslateContext);
        return (
          <>
            <span role="fromLanguage">{fromLanguage}</span>
            <span role="toLanguage">{toLanguage}</span>
            <button
              onClick={() => updateFromLanguage(toLanguage)}
              role="updateFromLanguage"
            />
          </>
        );
      };
      render(<TestComponent />, {
        wrapper: ({ children }) => (
          <TranslateProvider>{children}</TranslateProvider>
        ),
      });
      const prevFromLanguage = screen.getByRole('fromLanguage').innerHTML;
      const prevToLanguage = screen.getByRole('toLanguage').innerHTML;
      userEvent.click(screen.getByRole('updateFromLanguage'));
      expect(screen.getByRole('fromLanguage').innerHTML).toBe(prevToLanguage);
      expect(screen.getByRole('toLanguage').innerHTML).toBe(prevFromLanguage);
    });
  });

  describe('updateToLanguage', () => {
    it('번역할 언어를 수정할 수 있습니다.', () => {
      const toBeUpdateValue: Language = 'fr';
      const TestComponent = () => {
        const { updateToLanguage, toLanguage } = useContext(TranslateContext);
        return (
          <>
            <span role="toLanguage">{toLanguage}</span>
            <button
              onClick={() => updateToLanguage(toBeUpdateValue)}
              role="updateToLanguage"
            />
          </>
        );
      };
      render(<TestComponent />, {
        wrapper: ({ children }) => (
          <TranslateProvider>{children}</TranslateProvider>
        ),
      });
      userEvent.click(screen.getByRole('updateToLanguage'));
      expect(screen.getByRole('toLanguage').innerHTML).toBe(toBeUpdateValue);
    });
    it('번역할 언어를 원문의 언어로 바꿀 시 원문의 언어도 번역할 언어로 바뀝니다.', () => {
      const TestComponent = () => {
        const { updateToLanguage, fromLanguage, toLanguage } =
          useContext(TranslateContext);
        return (
          <>
            <span role="fromLanguage">{fromLanguage}</span>
            <span role="toLanguage">{toLanguage}</span>
            <button
              onClick={() => updateToLanguage(fromLanguage)}
              role="updateToLanguage"
            />
          </>
        );
      };
      render(<TestComponent />, {
        wrapper: ({ children }) => (
          <TranslateProvider>{children}</TranslateProvider>
        ),
      });
      const prevFromLanguage = screen.getByRole('fromLanguage').innerHTML;
      const prevToLanguage = screen.getByRole('toLanguage').innerHTML;
      userEvent.click(screen.getByRole('updateToLanguage'));
      expect(screen.getByRole('fromLanguage').innerHTML).toBe(prevToLanguage);
      expect(screen.getByRole('toLanguage').innerHTML).toBe(prevFromLanguage);
    });
  });

  describe('reverseLanguage', () => {
    it('원문의 언어와 번역할 언어를 바꿀 수 있습니다.', () => {
      const TestComponent = () => {
        const { reverseLanguage, fromLanguage, toLanguage } =
          useContext(TranslateContext);
        return (
          <>
            <span role="fromLanguage">{fromLanguage}</span>
            <span role="toLanguage">{toLanguage}</span>
            <button onClick={() => reverseLanguage()} role="reverseLanguage" />
          </>
        );
      };
      render(<TestComponent />, {
        wrapper: ({ children }) => (
          <TranslateProvider>{children}</TranslateProvider>
        ),
      });
      const prevFromLanguage = screen.getByRole('fromLanguage').innerHTML;
      const prevToLanguage = screen.getByRole('toLanguage').innerHTML;
      userEvent.click(screen.getByRole('reverseLanguage'));
      expect(screen.getByRole('fromLanguage').innerHTML).toBe(prevToLanguage);
      expect(screen.getByRole('toLanguage').innerHTML).toBe(prevFromLanguage);
    });
  });
});
