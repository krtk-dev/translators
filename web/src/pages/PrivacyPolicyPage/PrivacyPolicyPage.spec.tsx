import { render } from '@testing-library/react';
import PrivacyPolicyPage from '.';

describe('<PrivacyPolicyPage />', () => {
  it('한글을 지원합니다.', async () => {
    const { container } = render(<PrivacyPolicyPage />);
    expect(container.innerHTML).toContain('개인정보처리방침');
    // expect(container.innerHTML).toContain('PrivacyPolicy');
  });
});
