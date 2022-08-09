import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import CarListPage from '../CarListPage';

import { rest } from 'msw';
import { server } from '../../../mocks/server';

describe('Modal Integration test', () => {
  // 차량 리스트 영역 클릭 시, 모달 창이 뜬다.
  test('open the modal when click carList area', async () => {
    render(<CarListPage />);
    const carListArea = await screen.findAllByTestId('car-list-area');
    fireEvent.click(carListArea[0]);

    expect(screen.getByTestId('modal-container')).toBeInTheDocument();
  });
  // 모달 창에 Loading 메시지가 보이고, 데이터 로딩이 끝나면 차량 상세 정보를 불러온다.
  test('loading message in modal then display car detail info', async () => {
    render(<CarListPage />);

    const carListArea = await screen.findAllByTestId('car-list-area');
    fireEvent.click(carListArea[0]);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    // screen.debug();
    expect(screen.getByText('제조사: 현대자동차')).toBeInTheDocument();
    expect(screen.getByText('분류: 준중형')).toBeInTheDocument();
    expect(screen.getByText('연료: 휘발유')).toBeInTheDocument();
    expect(screen.getByText('변속방식: 자동')).toBeInTheDocument();
    expect(screen.getByText('승차정원: 5')).toBeInTheDocument();
  });
  // x 버튼을 클릭하면 모달 창이 닫힌다.
  test('close modal when click close button', async () => {
    render(<CarListPage />);
    const carListArea = await screen.findAllByTestId('car-list-area');

    fireEvent.click(carListArea[0]);

    fireEvent.click(screen.getByTestId('close-modal-button'));

    expect(screen.queryByTestId('modal-container')).toHaveStyle('display: none');

    // style을 바꿔주는 형태이기에 사라지지 않는다.
    // expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();
  });

  // 데이터를 불러오는 것에 실패하면 Error라는 글자가 보인다.
  test('display error when fail api response', async () => {
    server.use(
      rest.get('http://localhost:8080/carClasses/1', (req, res, ctx) => res(ctx.status(500))),
    );
    render(<CarListPage />);

    const carListArea = await screen.findAllByTestId('car-list-area');
    fireEvent.click(carListArea[0]);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(screen.getByText('Error...')).toBeInTheDocument();
  });
});
