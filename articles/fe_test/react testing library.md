## React Testing Library(이하 RTL)

Create React App(이하 CRA)으로 리액트 앱을 생성하면 기본적으로 테스팅할 때 React Testing Library를 사용하는 것을 볼 수 있습니다. 그럼 이 React Testing Library가 무엇일까요?

[React Testing Library 공식문서](https://testing-library.com/docs/react-testing-library/intro/)

**React Testing Library**는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축됩니다. <br>
DOM Testing Library란 Dom 노드를 테스트하기 위한 솔루션입니다. <br>

CRA로 생성된 프로젝트는 즉시 React Testing Library를 사용할 수 있습니다. 만약, 그렇지 않은 경우 다음과 같이 npm을 통해 추가할 수 있습니다.

```bash
npm install --save-dev @testing-library/react
```

<br>

RTL은 에이비앤비에서 만든 Enzyme을 대처하기 위해 등장한 솔루션입니다. <br>

- Enzyme - 구현 주도 테스트
- React Testing Library - 행위 주도 테스트

<br>

## 기본적인 테스트의 흐름

1. Jest가 test 파일을 찾는 규칙에 따라 `App.test.js` 파일을 찾음.

Jest가 test파일을 찾는 규칙은 아래 글을 참고 <br>
[Jest란 무엇인가요?](https://github.com/lewns2/Toy/blob/master/articles/fe_test/jest.md)

<br

2. 테스트 코드 작성

간단하게 테스트 코드 살펴보기 <br>

예제) App 컴포넌트 렌더링 시, learn react란 문구가 존재하는 지 테스트

```javascript
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

<br>

2.1 test(it) 블록
개별 테스트를 수행하는 곳으로 테스트 제목과 테스트 코드를 작성합니다.

2.2 render 함수
DOM에 컴포넌트를 렌더링하는 함수입니다. 인자로 렌더링할 컴포넌트가 들어갑니다.

2.3 getByText 함수
쿼리를 통해 해당 문자열을 확인하는 쿼리 함수입니다.

[더많은 matcher 확인하러가기](https://github.com/testing-library/jest-dom)

<br>

## 쿼리 함수란?

쿼리는 페이지에서 요소를 찾기 위해 테스트 라이브러리가 제공하는 방법입니다. <br>
여러 유형의 쿼리(`get`, `find`, `query`)가 있습니다. 이들 간의 차이점은 요소가 발견되지 않으면 쿼리에서 오류가 발생하는 지 또는 Promise를 반환하고 다시 시도하는지 여부입니다. <br>
선택하는 페이지 콘텐츠에 따라 적절한 쿼리를 선택해야 합니다. <br>

[query에 관한 공식문서](https://testing-library.com/docs/queries/about/)

<br>

### get, find, query의 차이점

- `getBy...` : 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없거나 둘 이상의 일치가 발견되면 설명 **오류를 발생**시킵니다. => 둘 이상의 요소가 예상되는 경우 대신 getAllBy 사용

- `queryBy...` : 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없으면 **null을 반환**합니다. 이것은 존재하지 않는 요소를 어설션하는 데 유용합니다. 둘 이상의 일치 항목이 발견되면 오류를 발생합니다. => 확인된 경우 대신 queryAllBy 사용

- `findBy...` : 주어진 쿼리와 일치하는 요소가 발견되면 해결되는 **Promise를 반환**합니다. 요소가 발견되지 않거나 기본 제한 시간인 1000ms 후에 둘 이상의 요소가 발견되면 약속이 거부됩니다. => 둘 이상의 요소를 찾아야 하는 경우 findAllBy를 사용 (getBy + waitFor = findBy)

- `waitFor` : 일정 기간 동안 기다려야할 때 waitFor을 사용하여 기대가 통과할 때까지 대기
