## React Testing Library 주요 API

npm test
실행 이미지

Jest가 test 파일을 찾는 방법에 따라 App.test.js 파일을 찾음.

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

render 함수
DOM에 컴포넌트를 렌더링하는 함수
인자로 렌더링할 컴포넌트가 들어감
Return은 RTL에서 제공하는 쿼리 함수와 기타 유틸리티 함수를 담고 있는 객체를 리턴(Destructuring 문법으로 원하는 쿼리 함수만 얻어올 수 있다.)
=> 소스 코드가 복잡해지면 비추천! screen 객체를 사용하기 
왜냐하면 사용해야 할 쿼리가 많아질수록 코드가 복잡해질 수 있음.

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

위와 아래 코드는 동일한 기능을 함.
getByText는 쿼리 함수. 쿼리 함수를 이용하여 문자열을 확인
앱이 커지게 되면, 쿼리 함수를 여러개 사용하게 되므로 screen 객체를 사용하길 권장

[더많은 matcher 확인하러가기](https://github.com/testing-library/jest-dom)


## 쿼리 함수란?
쿼리는 페이지에서 요소를 찾기 위해 테스트 라이브러리가 제공하는 방법입니다.
여러 유형의 쿼리('get', 'find', 'query')가 있습니다. 이들 간의 차이점은 요소가 발견되지 않으면 쿼리에서 요류가 발생하는 지 또는 Promise를 반환하고 다시 시도하는지 여부입니다.
선택하는 페이지 콘텐츠에 따라 다른 쿼리가 다소 적절할 수 있습니다.

[공식문서](https://testing-library.com/docs/queries/about/)

### get, find, query의 차이점

getBy... : 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없거나 둘 이상의 일치가 발견되면 설명 **오류를 발생**시킵니다. (둘 이상의 요소가 예상되는 경우 대신 getAllBy 사용)

queryBy... : 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없으면 **null을 반환**합니다. 이것은 존재하지 않는 요소를 어설션하는 데 유용합니다. 둘 이상의 일치 항목이 발견되면 오류를 발생합니다. (확인된 경우 대신 queryAllBy 사용)

findBy...  : 주어진 쿼리와 일치하는 요소가 발견되면 해결되는 **Promise를 반환**합니다. 요소가 발견되지 않거나 기본 제한 시간인 1000ms 후에 둘 이상의 요소가 발견되면 약속이 거부됩니다. 둘 이상의 요소를 찾아야 하는 경우 findAllBy를 사용하십시오.
(getBy + waitFor = findBy)

- waitFor : 일정 기간 동안 기다려야할 때 waitFor을 사용하여 기대가 통과할 때까지 대기