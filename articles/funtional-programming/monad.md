# **모나드**

## 정의

모나드는 함수형 프로그래밍에서 일종의 컨테이너입니다. 값의 연산을 추상화하고, 순서대로 실행되어야 하는 일련의 연산을 추상화하기 위해 사용됩니다.

예를 들어, 값을 계산하기 위해 **`null`** 체크, 예외 처리, 로깅 등의 복잡한 과정이 필요할 때, 이러한 과정을 모나드로 추상화할 수 있습니다. 대표적인 모나드로는 **`Maybe`**, **`Either`**, **`IO`**, **`State`** 등이 있습니다.

## **모나드 예시**

### Maybe 모나드

아래는 **`Maybe`** 모나드를 사용한 예시 코드입니다.

Maybe 모나드는 값이 존재하지 않는 경우를 나타내기 위해 사용됩니다. 자바스크립트에서 Maybe 모나드를 구현하는 방법 중 하나는 다음과 같습니다.

```jsx
const Maybe = (value) => ({
  map: (fn) =>
    value === null || value === undefined ? Maybe(null) : Maybe(fn(value)),
  flatMap: (fn) =>
    value === null || value === undefined ? Maybe(null) : fn(value),
  get: () => value,
});

const data = {
  user: {
    name: "John",
    address: {
      city: "New York",
    },
  },
};

const maybeCity = Maybe(data)
  .map((d) => d.user)
  .map((user) => user.address)
  .map((address) => address.city);

console.log(maybeCity.get()); // 'New York'
```

위 코드에서 **`Maybe`** 함수는 값을 감싸는 모나드를 생성합니다.

- **`map`** 함수는 모나드의 값을 변환하고, 새로운 모나드를 반환합니다.
- **`flatMap`** 함수는 **`map`** 함수와 유사하지만, 새로운 모나드를 생성하지 않고, 값을 추출합니다.

위 코드에서는 **`data`** 객체를 **`Maybe`** 모나드로 감싸고, **`map`** 함수를 사용하여 **`user`**, **`address`**, **`city`** 값을 추출합니다. 이때 **`Maybe`** 모나드는 **`null`** 또는 **`undefined`**인 경우에는 값을 추출하지 않고, **`null`** 값을 반환합니다.

### Promise 모나드

Promise는 성공 또는 실패의 두 가지 결과를 갖는 계산 결과를 표현할 수 있는 모나드입니다.

이를 통해 비동기적으로 실행되는 코드를 좀 더 간결하게 작성할 수 있습니다.

아래는 실제 프론트엔드에서 사용할 수 있는 예제입니다.

다음은 서버에서 데이터를 가져와서 JSON 형태로 반환하는 API를 호출하는 코드입니다.

```jsx
function getDataFromApi() {
  return fetch("https://example.com/api/data").then((response) =>
    response.json()
  );
}
```

위 코드에서 **`fetch`** 메서드는 비동기적으로 데이터를 가져오기 때문에 **`then`** 메서드를 사용하여 Promise 체인을 구성해야 합니다. 이를 모나드를 사용하여 간결하게 작성할 수 있습니다.

```jsx
const fetchData = () =>
  new Promise((resolve) => {
    resolve(fetch("https://example.com/api/data"));
  }).then((response) => response.json());

fetchData().then((data) => console.log(data));
```

위 코드에서는 **`Promise`** 생성자를 사용하여 모나드를 생성하고, **`resolve`** 메서드를 사용하여 데이터를 반환합니다. 반환된 데이터는 **`then`** 메서드를 사용하여 JSON 형식으로 파싱됩니다. 이를 호출하는 코드에서는 **`fetchData()`** 함수를 호출하여 데이터를 가져올 수 있습니다.

이러한 방식으로 모나드를 사용하면 비동기 코드를 간결하고 명확하게 작성할 수 있습니다.
