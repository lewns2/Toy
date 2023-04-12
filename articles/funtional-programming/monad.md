# 모나드란 무엇인가?

## 들어가면서

**모나드 in 나무위키**

> **모나드는 수학의 [범주론](https://namu.wiki/w/%EB%B2%94%EC%A3%BC%EB%A1%A0) (Category theory)에서 사용되는 개념을 가져와 사용하는 것이다. 사실 하스켈을 배우던 사람 중 상당수가 모나드를 수학적으로 이해하려다 멘붕 후 접는다고 봐도 될 정도로 개념적 이해까지의 난이도가 높다. 하지만, 애시당초 수학의 모나드와는 미묘하게 다른데다 실제 사용례 위주로만 습득해서만 써도 별 문제 없으며 쉽게 쓰라고 do 같은 문법도 지원해주므로 수학적인 개념이 이해가 안 간다고 그다지 난감해 할 것은 없다.**

**모나드 in ChatGPT**

> **모나드는 함수형 프로그래밍에서 중요한 개념 중 하나입니다. 모나드는 값을 감싸고 그 값을 다루기 위한 일련의 규칙과 함수를 정의하는 디자인 패턴입니다.**
>
> **모나드는 값에 대한 계산을 추적하는데 사용됩니다. 모나드는 값이 존재하는 상태를 추적하고 값이 있는 상태에서만 계산이 가능하도록 보장합니다. 이는 프로그램에서 에러를 방지하고 예측 가능한 동작을 보장하는 데 도움이 됩니다.**
>
> **모나드는 일련의 규칙을 따르기 때문에 값이 추적되는 것을 보장합니다. 이러한 규칙은 일반적으로 값의 추적을 위한 인터페이스를 제공합니다. 대표적인 모나드로는 Maybe 모나드, List 모나드, IO 모나드 등이 있습니다.**
>
> **Maybe 모나드는 값이 존재할 수도 있고, 존재하지 않을 수도 있는 경우에 사용됩니다. List 모나드는 값의 리스트를 다루는데 사용되며, IO 모나드는 입력 및 출력과 관련된 작업을 다룹니다.**
>
> **모나드를 사용하면 값의 추적과 관련된 문제를 해결할 수 있습니다. 이를 통해 코드의 안정성과 예측 가능성을 높일 수 있습니다.**

**“모나드 예시를 보여줘” in ChatGPT**

> 아래는 **`Maybe`** 모나드를 사용한 예시 코드입니다.
>
> ```jsx
> const Maybe = (value) => ({
>   map: (fn) =>
>     value === null || value === undefined ? Maybe(null) : Maybe(fn(value)),
>   flatMap: (fn) =>
>     value === null || value === undefined ? Maybe(null) : fn(value),
>   get: () => value,
> });
>
> const data = {
>   user: {
>     name: "John",
>     address: {
>       city: "New York",
>     },
>   },
> };
>
> const maybeCity = Maybe(data)
>   .map((d) => d.user)
>   .map((user) => user.address)
>   .map((address) => address.city);
>
> console.log(maybeCity.get()); // 'New York'
> ```
>
> 위 코드에서 **`Maybe`** 함수는 값을 감싸는 모나드를 생성합니다.
>
> - **`map`** 함수는 모나드의 값을 변환하고, 새로운 모나드를 반환합니다.
> - **`flatMap`** 함수는 **`map`** 함수와 유사하지만, 새로운 모나드를 생성하지 않고, 값을 추출합니다.
>
> 위 코드에서는 **`data`** 객체를 **`Maybe`** 모나드로 감싸고, **`map`** 함수를 사용하여 **`user`**, **`address`**, **`city`** 값을 추출합니다. 이때 **`Maybe`** 모나드는 **`null`** 또는 **`undefined`**인 경우에는 값을 추출하지 않고, **`null`** 값을 반환합니다.

## map(), flatmap() 메서드

## map()

**In Java**

```java
List<String> alpha = Arrays.asList("a", "b", "c","d");
List<String> collect = alpha.stream()
												.map(String::toUpperCase)
												.collect(Collectors.toList());
```

**In JavaScript**

```java
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);  // [[2], [4], [6], [8]]
```

**아 map은 for문을 옆으로 쓰는거구나!**

## flatMap()

```java
let arr1 = [1, 2, 3, 4];

arr1.flatMap(x => [x * 2]); // [2, 4, 6, 8]
```

**아 map인데 이름처럼 flat하게 만들어 주는 구나!**

### **라고 이해하는 순간, 고통의 시작**

## 모나드는 언제 필요한가?

### 비동기 연산 처리

**예시) Ajax를 통한 비동기 요청**

```java
function getData() {
	var tableData;
	$.get('https://domain.com/customers/1', function(response) {
		tableData = response;
	})
	return tableData;
}
```

Ajax를 통한 비동기 요청은 콜백 지옥을 야기한다.

- 콜백 지옥 : 콜백 함수를 익명 함수로 전달하는 과정에서 또 다시 콜백 안에 함수 호출이 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/574a8436-3af2-43e9-aa28-dddc01aa30be/Untitled.png)

비동기를 제어하는 방법(콜백 지옥 탈출)으로 **Promise**를 사용하거나, **async/await** 문법을 사용하는 방법이 있다. 이때 **Promise**가 모나드의 일종이다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c820f05b-af43-4b3a-8a14-2fe9a4d9af62/Untitled.png)

- **pending** – 초기 상태이고 비동기 작업이 아직 완료되지 않았으며 결과를 알 수 없습니다.
- **fulfilled** – 작업이 성공적으로 완료됨
- **rejected** – 작업이 실패함.

### Null 처리

```java
Cart cart = response.getCart();
if(cart != null) {
	Product product = cart getProduct();
	if(product != null) {
		System out println product getName());
	}
}
```

자바에서 Null 처리를 위한 **Optional** 클래스도 일종의 모나드이다.

```java
Optional.ofNullable(response.getCart()).ifPresent(c -> {
	Optional.ofNullable(c.getProduct()).ifPresent(p -> System.out.println(p.getName()))
})
```

## 모나드 정의

### Monad란?

- 값을 담는 컨테이너의 일종
- `Functor`를 기반으로 구현되어었음.
- `flatMap()` 메소드를 제공
- `Monad Laws`를 만족시키는 구현체

### Functor란?

```java
interface Functor<T> {
	<R>Functor<R> map(Function<T, R> f);
}
```

1. 함수를 인자로 받는 map 메서드 하나만 가짐
2. 타입 인자 <T>를 가짐
3. 전달인자인 함수 f는 <T> 타입 값을 받아 <R> 타입 값을 반환하는 함수
4. Functor는 map 함수를 거쳐 <R> 타입의 Functor를 반환

### map()의 진정한 의미

컬렉션을 순회하는 것이 아닌, <T> 타입의 Functor를 <R> 타입의 Functor로 바꾸는 기능

**In JavaScript**

```jsx
var numbers = [1, 4, 9];
var numberToString = numbers.map(function (num) {
  return num.toString();
});

console.log(typeof numbers, typeof numbers[0], numbers);
console.log(typeof numberToString, typeof numberToString[0], numberToString);

// object number [ 1, 4, 9 ]
// object string [ '1', '4', '9' ]
```

**In TypeScript**

```tsx
var nums: Array<string> = ["1", "4", "9"];
var collect: Array<number> = nums.map((numStr) => parseInt(numStr));

console.log(nums); // [ '1', '4', '9' ]
console.log(collect); // [ 1, 4, 9 ]
```

`Array<string>` → map(`(numStr) => parseInt(numStr)`) → `Array<number>`

그럼 값을 꺼낼 수도 없고, 할 수 있는 일이라고는 map() 메서드로 값을 변경하는 것 뿐인, 군더더기 같은 Functor를 왜 쓰는 걸까?

### \* Functor를 이용하면, 일반적으로 모델링할 수 없는 상황을 모델링할 수 있다.

**Ex1) 값이 없는 케이스 :** Optional

Functor - 값이 없는 케이스

```tsx
Optional<String> optionStr = Optional(null);
Optional<Integer> optionInt = optionStr.map(Integer::parseInt);
```

Functor - 값이 있는 케이스

```tsx
Optional<String> optionStr = Optional("1");
Optional<Integer> optionInt = optionStr.map(Integer::parseInt);
```

사용하는 쪽에서 null check가 불필요하다. null인 경우, 그냥 로직이 실행되지 않는다.

또한 반환 타입이 항상 Optional로 감싸진 형태이다. 즉, 타입 안정성을 유지하면서 인코딩할 수 있다.

**Ex2) 값이 미래에 준비될 것으로 예상되는 케이스 :** Promise

```tsx
Promise<Customer> customer = // ....
Promise<byte[]> bytes = customer.map(Customer::getAddress) // return Promise<Address>
								.map(Address::street) // return Promise<String>
								.map((String s) -> s.substring(0, 3)) // return Promise<String>
								.map(String::toLowerCase) // return Promise<String>
								.map(String::getBytes); // return Promise<byte[]>
```

- 비동기를 동기로 동작하는 것처럼 작성하는 형태가 된다.
- 각각의 모든 반환 타입이 Promise 이다. ⇒ 비동기 연산들의 합성이 가능하다.

```tsx
const getUserById = (id: string): Promise<User> => {
  return fetch(`/api/users/${id}`).then((res) => res.json());
};

const getUserAddress = (user: User): Promise<Address> => {
  return fetch(`/api/addresses/${user.addressId}`).then((res) => res.json());
};

const userId = "123";
const userAddressPromise = getUserById(userId).then((user) =>
  getUserAddress(user)
);
```

## 모나드는 Functor에 flatMap()을 추가한 것

### Functor의 문제점

Functor가 다시 Functor에 감싸져 있으면, 함수의 합성과 체이닝을 저해한다.

모나드에서 **`flatMap`**은 중첩된 모나드를 평면화(flat)하여 다룰 수 있게 해주는 메소드입니다. 이를테면, **`flatMap`**을 사용하지 않는 경우, 중첩된 모나드에서 값을 추출하려면 중첩된 구조를 일일이 풀어줘야 합니다. 이

는 코드를 복잡하게 만들 수 있습니다.

예를 들어, 아래 코드는 **`Maybe`** 모나드에 값을 적용한 후, 추출한 값을 다시 **`Maybe`** 모나드에 전달하여 중첩된 구조를 만듭니다.

```tsx
const maybeNum = new Maybe<number>(10);

const maybeDoubled = maybeNum.map((x) => x * 2); // Just(20)
const maybeDoubledAndWrapped = maybeDoubled.map((x) => new Maybe<number>(x)); // Just(Just(20))
```

**`maybeDoubled`**는 값이 20인 **`Just`** 모나드를 반환하고, **`maybeDoubledAndWrapped`**는 중첩된 구조를 가진 **`Just`** 모나드를 반환합니다.

하지만 이 코드는 중첩된 구조를 일일이 풀어줘야 하는 불편함이 있습니다. 이때 **`flatMap`**을 사용하면 중첩된 모나드를 쉽게 다룰 수 있습니다. 아래 코드는 **`flatMap`**을 사용하여 같은 결과를 얻습니다.

```tsx
const maybeDoubledAndWrapped = maybeNum.flatMap(
  (x) => new Maybe<number>(x * 2)
); // Just(20)
```

## flatMap()

```tsx
interface Monad<T, M extends Monad<?, ?>> extends Functor<T,M> {
	M flagMap(Function<T,M> f);
}
```

함수 f가 M의 반환하면 M을 반환해라. (타입이 아닌)

**In JavaScript**

```tsx
let arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in","","California"]
```

**Functor**

```java
interface Functor<T> {
	<R>Functor<R> map(Function<T, R> f);
}
```

Functor와 비교하면, 타입의 반환 여부에서 큰 차이를 보인다.

```tsx
const Maybe = (value) => ({
  map: (fn) =>
    value === null || value === undefined ? Maybe(null) : Maybe(fn(value)),
  flatMap: (fn) =>
    value === null || value === undefined ? Maybe(null) : fn(value),
  get: () => value,
});
```

다시 위의 Maybe 모나드를 살펴보면,

map은 빈 값(null, undefined)인 경우, `Maybe(fn(value))`를 반환하지만, flatMap은 `fn(value)`를 반환한다.

## 의의

- 값이 없는 상황이나, 값이 미래에 이용가능해질 상황 등 일반적으로 할 수 없는 여러 상황을 모델링할 수 있다.
- 비동기 로직을 동기 로직을 구현하는 것과 동일한 형태로 구현하면서도, 함수의 합성 및 완전한 non-blocking pipeline을 구현할 수 있다.

### 참고

- [https://www.youtube.com/watch?v=jI4aMyqvpfQ](https://www.youtube.com/watch?v=jI4aMyqvpfQ)
- ChatGPT
