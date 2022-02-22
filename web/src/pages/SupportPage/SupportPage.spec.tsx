import { render } from '@testing-library/react';
import SupportPage from '.';

describe('<SupportPage />', () => {
  it('이메일로 연결합니다.', async () => {
    const { container } = render(<SupportPage />);
    const aTag = container.querySelector('a');
    expect(aTag?.innerHTML).toBe('coderhyun476@gmail.com');
    expect(aTag?.href).toBe('mailto:coderhyun476@gmail.com');
  });
});
