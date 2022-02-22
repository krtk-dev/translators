import { render } from '@testing-library/react';
import HomePage from '.';
import {
  APPSTORE_URL,
  GITHUB_URL,
  PLAYSTORE_URL,
} from '../../constants/values';
import TranslateProvider from '../../context/TranslateContext';

describe('<HomePage />', () => {
  it('플레이스토어와 앱스토어 링크를 제공합니다.', async () => {
    const { container } = render(<HomePage />, {
      wrapper: ({ children }) => (
        <TranslateProvider>{children}</TranslateProvider>
      ),
    });
    expect(container.innerHTML).toContain(APPSTORE_URL);
    expect(container.innerHTML).toContain(PLAYSTORE_URL);
  });
  it('깃헙으로 통하는 링크를 제공합니다.', async () => {
    const { container } = render(<HomePage />, {
      wrapper: ({ children }) => (
        <TranslateProvider>{children}</TranslateProvider>
      ),
    });
    expect(container.innerHTML).toContain(GITHUB_URL);
  });
  it('번역결과를 보여줄 3가지 카드를 제공합니다.', async () => {
    const { container } = render(<HomePage />, {
      wrapper: ({ children }) => (
        <TranslateProvider>{children}</TranslateProvider>
      ),
    });
    expect(container.querySelectorAll('.translated-card')).toHaveLength(3);
  });
});
