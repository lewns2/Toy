import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CarListPage from '../CarListPage';

describe('<CarListPage>', () => {
  // '/list'의 경로 렌더링 시, 제목(차량 리스트)이 올바르게 나타나는 지
  test('page title has correct text', async () => {
    render(<CarListPage />);
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('차량 리스트');
  });

  // 모든 차량 조회 시, 더보기 버튼이 사라지는지?
  test('more button disappear when see all products', async () => {
    render(<CarListPage />);

    const buttonElement = screen.getByTestId('more-button');
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(buttonElement).toHaveStyle({ display: 'none' });

      /* 잘못된 코드 : style 속성이 변경되었을 뿐, document에 그대로 존재하므로 */
      // expect(screen.queryByTestId('more-button')).not.toBeInTheDocument();
    });
  });
});
