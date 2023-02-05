## React Testing Library(이하 RTL)
Create React App(이하 CRA)으로 리액트 앱을 생성하면 기본적으로 테스팅할 때 React Testing Library를 사용하는 것을 볼 수 있습니다. 그럼 이 React Testing Library가 무엇일까요?

[공식문서](https://testing-library.com/docs/react-testing-library/intro/)

React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축됩니다.

DOM Testing Library란 Dom 노드를 테스트하기 위한 매우 가벼운 솔루션입니다.

CRA로 생성도니 프로젝트는 즉시 React Testing Library를 지원합니다. 그렇지 않은 경우 다음과 같이 npm을 통해 추가할 수 있습니다.

```bash
npm install --save-dev @testing-library/react
```

리액트 컴포넌트를 테스트하는 가벼운 솔루션!

RTL은 에어비앤비에서 만든 Enzyme을 대처하는 솔루션입니다.
Enzyme이 React 개발자에게 React 구성 요소의 내부를 테스트할 수 있는 유틸리티를 제공하는 동안 React Testing Library는 한 걸음 물러서서 "React 구성 요소를 테스트하여 React 구성 요소를 완전히 신뢰하는 방법"에 대해 질문합니다.

Enzyme - 구현 주도 테스트
React Testing Library - 행위 주도 테스트