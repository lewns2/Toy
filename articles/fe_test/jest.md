## Jest란 무엇 인가요?

FaceBook에 의해서 만들어진 테스팅 프레임 워크입니다. <br>
최소한의 설정으로 동작하며 Test Case를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인해줍니다. <br>
주로 단위 테스트를 위해서 이용합니다. <br>

<br>

### 테스트 분류

test - 단위 테스트 폴더 (Unit Test) - 단위 테스트 파일 (<대상 이름>.test.js) <br>
test - 통합 테스트 폴더 (Intergration Test) - 통합 테스트 (<대상 이름>.test.init.js) <br>

<br>

### Jest가 Test 파일을 찾는 방법

1. {filename}.**test**.js
2. {filename}.**spec**.js
3. All files inside **"tests"** folders (폴더 이름을 tests라고 설정)

<br>

### Jest의 파일 구조와 사용법

**파일 구조 추상적으로 나타내기**

예제) 과일들을 테스트한다.

```javaScript
describe - (과일)

- test(it) - 사과
  - expect <-> matcher
- test(it) - 바나나
  - expect <-> matcher
- test(it) - 포도
  - expect <-> matcher
```

- describe : argument(name, fn) : 여러 관련 테스트를 그룹화하는 블록을 만듭니다. <br>
- test(it) : argument(name, fn, timeout) : 개별 테스트를 수행하는 곳, 각 테스트를 작은 문장처럼 설명합니다. <br>
- expect : expect 함수는 값을 테스트할 때마다 사용됩니다. 그리고 expect 함수는 혼자서는 거의 사용되지 않으며 matcher와 함께 사용됩니다. <br>
- matcher : 다른 방법으로 값을 테스트 하도록 "메처"를 사용합니다. <br>

**사용 예시**

```javascript
describe("더하기 테스트", () => {
  test("two plus two is four", () => {
    expect(2 + 2).toBe(4);
  });

  test("two plus two is now five", () => {
    expect(2 + 2).not.toBe(5);
  });
});
```
