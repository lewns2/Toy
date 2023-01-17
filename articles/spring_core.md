## 스프링의 핵심 기술

1. IoC Container
   1.1. 컨테이너, 빈, 의존성
   1,2. 웹 애플리케이션과 싱글톤
   1.2. 빈 스코프
   1.3. 컴포넌트 스캔과 의존관계 주입
   1.3. Annotation-based 컨테이너 설정
   1.4. Java-based 컨테이너 설정
   1.5. Environment Abstraction
   1.6. BeanFactory or ApplicationContext?

2. Aspect Oriented Programming with Spring

### The IoC Container

1.1 컨테이너, 빈, 의존성

스프링 컨테이너 : 스프링 빈의 생명 주기를 관리하며(생성과 소멸), 의존 관계를 연결해주는 관리하는 공간

스프링 빈 : 스프링 컨테이너에 등록되고 관리되는 자바 객체(POJO)를 의미한다.

제어의 역전(IoC) : 인스턴스의 생성부터 소멸까지의 생명주기 관리를 개발자를 대신하여 말그대로 제어권을 위임한 것

의존성 주입(DI) : IoC를 실제 구현하는 방법으로, 의존 관계에 있는 컴포넌트들 간의 관계를 개발자 대신 스프링 컨테이너가 런타입에 찾아서 연결하는 것.

1. 컨테이너
   스프링 IoC 컨테이너는 `org.springframework.context.ApplicationContext` 인터페이스이다.
   컨테이너는 Bean의 인스턴스화와 구성, 조립을 담당한다.
   컨테이너는 설정(configuration) 메타데이터를 읽어 객체를 얻습니다.
   설정 메타데이터는 XML, Java 애노테이션, Java 코드를 통해 나타낸다.

![IoC](./image/iocContainer.png)

Configuration Metadata 구성 방법

- Annotation-based : 애노테이션을 통한 Bean 정의
- - @Required, @Autowired 등
- Java-based : XML 파일을 작성하는 대신, 자바 클래스를 통한 Bean 정의
- - @Configuration, @Bean, @Import, @DependsOn 등을 사용
