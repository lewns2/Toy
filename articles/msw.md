## Jest와 MSW에 대하여

### MSW(Mock Service Worker)란?

MSW는 Mock Service Worker로 서비스 워커를 이용하여 API를 모킹하는 라이브러리입니다. <br>

> mocking(모킹) : 테스트하고자 하는 코드가 의존하는 함수나 클래스에 대해 가짜 객체를 만드는 기법

즉, 서비스 워커 API를 활용하여 네트워크 요청을 가로채 MSW에 전달하여 handler에 정의된 모의 응답을 받습니다.

## 도입하기

1. msw 설치
2. 핸들러 정의
3. 모킹 서버 생성
4. API 모킹 설정

## 느낀점

올바른 테스트 코드를 작성하는 것은 쉽지 않다.
예를 들어 갯수가 0인 경우, 참일 경우가 있다.
이때, 갯수를 올바르게 센 것이 아니라 잘못된 코드로 인해 아무것도 걸리지 않은 경우가 발생할 수 있다.
그래서 테스트 코드 작성 시, 의도적으로 테스트가 통과하지 못하는 코드를 작성한 뒤, 이후 올바른 코드를 작성하는 것이 좋다고 생각했다.

## Reference

- 콴다 팀블로그 - [MSW로 API 모킹하기](https://blog.mathpresso.com/msw%EB%A1%9C-api-%EB%AA%A8%ED%82%B9%ED%95%98%EA%B8%B0-2d8a803c3d5c)
- kakao FE 기술블로그 - [MSW 모킹 코드 재사용하기 feat. Storybook, Jest](https://fe-developers.kakaoent.com/2022/220317-integrate-msw-storybook-jest/)

https://github.com/socar-coding-interview/lewns2/commit/534fe5eb38e29362a846aafc3e92946a4b85089a#diff-f1995b7576ce098f06844c16df12561f4694c56c84869ec5180933e652f56862
