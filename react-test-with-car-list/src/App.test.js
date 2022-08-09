import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('<App /> 렌더링 시, /list 로 렌더링 되는가?', async () => {
    render(<App />);

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('차량 리스트');
  });
});
