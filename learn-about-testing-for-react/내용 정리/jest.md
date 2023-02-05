## Jest란 무엇 인가요?
FaceBook에 의해서 만들어진 테스팅 프레임 워크입니다.
최소한의 설정으로 동작하며 Test Case를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인해줍니다.
단위 테스트를 위해서 아용합니다.

test - 단위 테스트 폴더 (Unit Test) - 단위 테스트 파일 (<대상 이름>.test.js)
test - 통합 테스트 (Intergration Test) - 통합 테스트 (<대상 이름>.test.init.js)

### Jest가 Test 파일을 찾는 방법
1. {filename}.**test**.js
2. {filename}.**spec**.js
3. All files inside **"tests"** folders (폴더 이름을 tests라고 설정)


### Jest의 파일 구조와 사용법

describe - (과일)
- test(it) - 사과
    - expect <-> matcher
- test(it) - 바나나
- test(it) - 포도

describe : argument(name, fn) : 여러 관련 테스트를 그룹화하는 블록을 만듭니다.
test(it) : argument(name, fn, timeout) : 개별 테스트를 수행하는 곳, 각 테스트를 작은 문장처럼 설명합니다.
expect : expect 함수는 값을 테스트할 때마다 사용됩니다. 그리고 expect 함수는 혼자서는 거의 사용되지 않으며 matcher와 함께 사용됩니다.
matcher : 다른 방법으로 값을 테스트 하도록 "메처"를 사용합니다.

**예시**
```javascript
test('two plus two is four', () => {
    expect(2+2).toBe(4);
})

test('two plus two is now five', () => {
    expect(2+2).not.toBe(5);
})
```