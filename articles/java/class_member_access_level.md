# 클래스와 멤버의 접근 권한을 최소화하라

## 잘 설계된 컴포넌트는 무엇인가?

어설프게 설계된 컴포넌트와 잘 설계된 컴포넌트의 가장 큰 차이는 **정보은닉(캡슐화)**이다. 다시 말해, “클래스 내부 데이터와 내부 구현 정보를 외부 컴포넌트로부터 얼마나 잘 숨겼느냐”다.

잘 설계된 컴포넌트는 “구현”과 “API”를 깔끔하게 분리하여, 오직 API를 통해서만 다른 컴포넌트와 소통하며 서로의 내부 동작 방식에는 전혀 개의치 않는다.

<br>

### 정보 은닉(캡슐화)의 장점

- 시스템 개발 속도를 높인다.
  - 여러 컴포넌트를 병렬로 개발할 수 있기 때문이다.
- 시스템 관리 비용을 낮춘다.
  - 각 컴포넌트를 더 빨리 파악하여 디버깅할 수 있고, 다른 컴포넌트로 교체하는 부담도 적기 때문이다.
- 성능을 높여주지는 않으나, 성능 최적화에 도움을 준다.
  - 완성된 시스템을 프로파일링해 최적화할할 컴포넌트에 대해서만 최적화를 할 수 있기 때문이다.
- 소프트웨어 재사용성을 높인다.
  - 외부에 거의 의존하지 않고 독자적으로 동작할 수 있는 컴포넌트라면, 낯선 환경에서도 유용하게 쓰일 가능성이 크기 때문이다.
- 큰 시스템을 제작하는 난이도를 낮춰준다.
  - 시스템 전체가 아직 완성되지 않은 상태에서도 개별 컴포넌트의 동작을 검증할 수 있기 때문이다.

<br>

### 접근 제한자

정보 은닉의 핵심은 접근 제한자를 제대로 활용하는 것이다.

- `private` : 멤버를 선언한 톱레벨 클래스에서만 접근 가능
- `package-private` : 멤버가 소속된 패키지 안의 모든 클래스에서 접근 가능
  - 접근 제한자를 명시하지 않은 경우, 적용되는 패키지 접근 수준이다.
  - 단, 인터페이스의 멤버는 기본적으로 `public`이 적용된다.
- `protected` : 이 멤버를 선언한 클래스의 하위 클래스에서도 접근할 수 있다.
- `public` : 모든 곳에서 접근 가능

기본 원칙은 간단하다. **모든 클래스와 멤버의 접근성을 가능한 한 좁혀야 한다**. 즉, 소프트웨어 올바로 동작하는 한 항상 가장 낮은 접근 수준을 부여해야 한다는 뜻이다.

> 멤버: 속성을 표현하는 필드(field), 기능을 표현하는 메소드(method) 등

<br>

### 톱 레벨 클래스와 인터페이스

> 톱 레벨 : 가장 바깥이라는 의미

가능한 접근 수준은 `package-private`과 `public` 두 가지다.

`public`으로 선언하면 공개 API가 되며, `package-private`으로 선언하면 내부 구현(해당 패키지 내에서만 사용)이 된다. 그러므로 **패키지 외부에서 쓸 이유가 없다면 `package-private`으로 선언하자!**

**만약, 한 클래스에서만 사용하는 `package-private` 사용하는 경우**

클래스 안에 `private static`으로 중첩시키자. 톱 레벨에 위치한다는 건 같은 패키지의 모든 클래스가 접근할 수 있다는 의미이다. 이때 `private static`을 중첩시키면 바깥 클래스 하나에서만 접근할 수 있다.

```jsx
// AS-IS
public class A{
    private int a;
}
public class B{ // B가 A에서만 쓰이는 클래스라면?
    private int b;
}
```

```jsx
// TO-DO
public class A{
    private int a;

    private static class B{
        private int b;
    }
}
```

<br>

### 멤버

- 클래스의 공개 API를 제외한 모든 멤버는 `private`으로 만들자.
  - 같은 패키지의 다른 클래스가 접근해야 하는 멤버에 한하여 `private` 제한자를 제거해 `package-private`으로 풀어준다.
  - 다만, 상위 클래스의 메서드를 재정의할 때는 접근 수준을 상위 클래스보다 좁게 설정할 수 없다. (리스코프 치환 원칙을 지키기위해 필요하다.)
- `public` 클래스의 인스턴스 필드는 되도록 `public`이 아니어야 한다.
  - 불변을 보장하기 어렵다.
  - `public` 가변 필드를 갖는 클래스는 일반적으로 스레드 안전하지 않다.
  - 필드가 `final`이면서 불변 객체를 참조하더라도 내부 구현 변경 시, `public` 필드를 없애는 방식으로는 리팩터링할 수 없게 된다.
- 예외적으로 필요한 구성 요소로써 상수라면 `public static final` 필드로 공개해도 좋다.
  - 단, **기본 타입이나 불변 객체를 참조**해야 한다
  - `public static final` 배열 필드를 두거나 이를 반환하는 접근자 메서드는 두면 안된다.

<br>

## 정리

프로그램 요소의 접근성은 가능한 한 최소한으로 하라. 꼭 필요한 것만 골라 최소한의 **public API**를 설계하자.

`public` 클래스는 상수용 `public static final` 필드 외에는 어떠한 `public` 필드도 가져서는 안된다.
