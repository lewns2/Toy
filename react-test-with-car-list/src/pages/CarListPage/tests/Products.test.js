import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CarListPage from '../CarListPage';

describe('<Products>', () => {
  // 이미지 렌더링 테스트
  test('display product images from json-server', async () => {
    render(<CarListPage />);

    const productImage = await screen.findAllByRole('img', { name: /차량$/i });
    expect(productImage).toHaveLength(5);
  });

  // 더보기 클릭 시, 5개의 리스트가 추가되는지?
  test('add five products when click more button', async () => {
    render(<CarListPage />);

    const buttonElement = screen.getByTestId('more-button');
    fireEvent.click(buttonElement);
    const productImage = await screen.findAllByRole('img', { name: /차량$/i });
    expect(productImage).toHaveLength(10);
  });

  // 할인율 : 할인율이 '0'일 경우, 화면에 표시하지 않는다 => -0%로 표기된 경우가 있는 지 확인
  test('do not display when discountPercent is 0', async () => {
    render(<CarListPage />);

    const discountPercent = await (
      await screen.findAllByTestId('discountPercent-text')
    ).filter((node) => node.innerHTML.match(/-0%/));

    expect(discountPercent).toHaveLength(0);
  });

  // 거리 : 1000 이상은 천, 10000 이상은 만으로 변환 => 1000 이상의 숫자가 있는 지 확인
  test('digit of distance is lower than 1000', async () => {
    render(<CarListPage />);
    const distance = await screen.findAllByTestId('drivingDistance-text');
    const firstDistance = distance[0].innerHTML.replace(/[^0-9]/g, '');
    const secondDistance = distance[1].innerHTML.replace(/[^0-9]/g, '');
    const thirdDistance = distance[2].innerHTML.replace(/[^0-9]/g, '');
    const fourthDistance = distance[3].innerHTML.replace(/[^0-9]/g, '');
    const fifthDistance = distance[4].innerHTML.replace(/[^0-9]/g, '');
    expect(Number(firstDistance)).toBeLessThan(1000);
    expect(Number(secondDistance)).toBeLessThan(1000);
    expect(Number(thirdDistance)).toBeLessThan(1000);
    expect(Number(fourthDistance)).toBeLessThan(1000);
    expect(Number(fifthDistance)).toBeLessThan(1000);
  });

  // 가격 : 가격이 10의 자리 반올림, 콤마 이후의 올바른 값과 동일 여부
  test('price list has correct?', async () => {
    render(<CarListPage />);

    const price = await screen.findAllByTestId('price-text');
    expect(price[0]).toHaveTextContent('225,000원');
    expect(price[1]).toHaveTextContent('325,000원');
    expect(price[2]).toHaveTextContent('245,000원');
    expect(price[3]).toHaveTextContent('343,000원');
    expect(price[4]).toHaveTextContent('316,000원');
  });
});
