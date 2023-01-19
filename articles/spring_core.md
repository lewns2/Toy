## 스프링의 핵심 기술

1. IoC Container
2. 의존 관계 주입 방법
3. 빈 스코프
4. Aspect Oriented Programming with Spring

### 1. The IoC Container

스프링은 스프링 컨테이너를 통해 겍체를 관리하고, 관리되는 객체를 빈(Bean)이라고 한다.

1.1 용어 정리

- 스프링 컨테이너 : 스프링 빈의 생명 주기를 관리하며(생성과 소멸), 의존 관계를 연결해주는 관리하는 공간을 말한다.

- 스프링 빈 : 스프링 컨테이너에 등록되고 관리되는 자바 객체(POJO)를 의미한다.

- 제어의 역전(IoC) : 인스턴스의 생성부터 소멸까지의 생명주기 관리를 개발자를 대신하는 것을 말한다. 용어 그대로 제어권을 위임한 것을 의미한다.

- 의존성 주입(DI) : IoC를 실제 구현하는 방법으로, 의존 관계에 있는 컴포넌트들 간의 관계를 개발자 대신 스프링 컨테이너가 런타임에 찾아서 연결하는 것을 말한다.

  1.2 스프링 컨테이너의 종류

  1.2.1 BeanFactory
  객체를 생성하고, 객체 사이의 런타임 의존관계를 맺어주는 역할을 하는 스프링 컨테이너의 최상위 인터페이스이다.

  1.2.2 ApplicationContext(`org.springframework.context.ApplicationContext`)
  BeanFactory를 포함한 여러 인터페이스들을 상속받은 인터페이스로, 일반적으로 스프링 컨테이너라고 하면 ApplicationContext를 의미한다.
  BeanFactory를 상속받은 것이니, 마찬가지로 객체를 생성하고, 객체 사이의 런타임 의존관계를 맺어주는 역할 뿐만 아니라 메시지 다국화, 환경변수 등 다양한 기능을 추가로 제공한다.

  1.3 스프링 컨테이너 생성 과정

![IoC](./image/iocContainer.png)

1. 스프링 컨테이너 생성
   - 비어있는 스프링 컨테이너가 생성된다.
2. 스프링 설정 파일을 기반으로 컨테이너에 스프링 빈이 등록된다.
   - 설정 메타데이터를 읽어 객체를 얻는다.
   - 설정 메타데이터는 XML, Java 애노테이션, Java 코드를 통해 나타낸다.
3. 스프링 빈 의존관계 설정
   - 설정 메타데이터를 토대로 스프링 빈의 의존관계를 주입(DI)한다.
   - 각각의 빈의 프로퍼티는 실제 정의 또는 다른 빈에 대한 참조이다.

Configuration Metadata 구성 방법

- XML-based : XML 파일 작성을 통한 Bean 정의
- Annotation-based : 애노테이션을 통한 Bean 정의
- - @Component, @Controller, @Service 등
- Java-based : XML 파일을 작성하는 대신, 자바 클래스를 통한 Bean 정의
- - @Configuration, @Bean, @Import, @DependsOn 등을 사용

### 2. 의존 관계 주입 방법

2.1 Constructor-based dependency injection

생성자 기반 DI는 각각의 의존성을 나타내는 여러 인수를 사용해서 생성자를 호출하는 컨테이너에 의해 수행된다.

생성자 주입 방법은 생성자를 이용해 의존 관계를 주입하는 것이다. 생성자 호출 시점에 1회 호출되는 것이 보장된다. 따라서 주입받은 객체가 변하지 않거나, 반드시 객체의 주입이 필요한 경우에 사용한다,.

예제

```Java
public class SimpleMovieLister {

    // the SimpleMovieLister has a dependency on a MovieFinder
    private final MovieFinder movieFinder;

    // a constructor so that the Spring container can inject a MovieFinder
    public SimpleMovieLister(MovieFinder movieFinder) {
        this.movieFinder = movieFinder;
    }

    // business logic that actually uses the injected MovieFinder is omitted...
}
```

2.2. Setter-based dependency injection

settet 기반 DI는 빈을 인스턴스화하기 위해 인수 없는 생성자 또는 인수 없는 정적 팩토리 메서들르 호출한 후, 빈에서 컨테이너 호출 메서드에 의해 수행된다.

수정자 주입 방법은 주입받는 객체가 변경될 가능성이 있는 경웨 사용한다.

예제

```Java
public class SimpleMovieLister {

    // the SimpleMovieLister has a dependency on the MovieFinder
    private MovieFinder movieFinder;

    // a setter method so that the Spring container can inject a MovieFinder
    public void setMovieFinder(MovieFinder movieFinder) {
        this.movieFinder = movieFinder;
    }

    // business logic that actually uses the injected MovieFinder is omitted...
}
```

2.3 Constructor-based or setter-based DI?
필수 의존성에 대해서는 생성자 기반를 사용하고, 선택 의존성에 대해서는 setter 메서드 혹은 configuration 매서드를 사용하는 것을 권장한다.

setter 메서드에서 @Autowired 애노테이션을 사용하면 속성을 필수 의존성으로 만들 수도 있다. 하지만 프로그래밍 방식으로 인수를 검증하는 생성자 주입이 더 좋다.

의존 관계 주입의 변경이 필요한 상황은 거의 없으므로 생성자 주입 방식을 사용하기를 권장한다. 또, 어플리케이션 컴포넌트를 변경 불가능한 객체로 구현하고 필수 의존성이 null이 아님을 보장하기 때문이다. 게다가 생성자 주입 방식은 항상 초기화된 상태로 코드를 반환한다.

setter 주입은 기본적으로 클래스 내에서 기본 값을 할당할 수 있는 선택 의존성에만 사용해야 한다. 그렇지 않으면 코드가 의존성을 사용하는 모든 곳에서 not-null 체크를 해야한다.

setter 주입의 한 가지 이점은 setter 메서드가 해당 클래스 개체를 나중에 재구성하거나 다시 주입할 수 있도록 만든다는 것이다.
JMX MBeans를 통한 관리는 setter 주입에 대한 활용 사례이다.

의존성 주입(DI)가 필요한 이유

1.
2.
3.

### 3. 빈 스코프

빈 스코프는 빈이 존재할 수 있는 범위를 말한다.

스프링 프레임워크는 6개의 스코프를 지원하며, 그 중 4개는 ApplicationContext를 사용하는 경우만 사용할 수 있다.

![beanScope](./image/beanScope.png)

- 싱글톤 : (Default) 스프링 컨테이너의 시작과 종료까지 유지되는 가장 넓은 스코프이다.

- 프로토타입 : 프로토타입 빈의 생성과 의존관계 주입까지만 관여하고 더는 관리하지 않는 매우 짧은 범위의 스코프이다.

- 웹 관련 스코프
- - request : 단일 HTTP 요청의 라이프사이클(요청이 들어오고 나갈때까지)까지 유지되는 스코프
- - session : HTTP 세션의 라이프사이클(웹 세션이 생성되고 종료될 때)까지 유지되는 스코프
- - application : ServletContext의 라이프사이클로 단일 빈 정의 범위를 지정한다.

- - websocket : WebSocket의 수명 주기로 단일 빈 정의 범위를 지정한다.
