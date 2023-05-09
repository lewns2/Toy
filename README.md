---
author: 김동현
---

## 목차

1.  [프론트엔드 테스트](#프론트엔드에서의-테스트) <br>
2.  [Spring과 객체 지향 프로그래밍](#spring) <br>
3.  [JavaScript와 함수형 프로그래밍](#javascript와-힘수형-프로그래밍) <br>
4.  [Java](#java) <br>
5.  [자료구조와 알고리즘](#자료구조와-알고리즘)
6.  [데이터베이스](#데이터베이스)<br>

## 프론트엔드 테스트

- ### Test

  - [어플리케이션을 테스트하는 이유](https://github.com/lewns2/Toy/blob/master/articles/fe_test/why%20do%20we%20have%20to%20test.md)
  - [React Testing Library와 테스트 흐름 알아보기](https://github.com/lewns2/Toy/blob/master/articles/fe_test/react%20testing%20library.md)
  - [DOM과 웹페이지 빌드 과정(Critical Rendering Path CRP) 알아보기](https://github.com/lewns2/Toy/blob/master/articles/fe_test/dom%20and%20CRP.md)
  - [Jest 알아보기](https://github.com/lewns2/Toy/blob/master/articles/fe_test/jest.md)
  - [테스트 주도 개발(TDD)](https://github.com/lewns2/Toy/blob/master/articles/fe_test/TDD.md)

- ### 프로젝트
  - [react-test-with-car-list](https://github.com/lewns2/Toy/tree/master/react-test-with-car-list)
  - [learn-about-testing-for-react](https://github.com/lewns2/Toy/tree/master/learn-about-testing-for-react)

## Spring

- ### 스프링의 삼각형

  - DI/IOC
  - [AOP(Aspect-Oriented Programming)](https://github.com/lewns2/Toy/blob/master/articles/java/aop.md)
  - PSA

- ### API

  - [전반적인 API 설계 흐름 살펴보기](https://github.com/lewns2/Toy/blob/master/articles/spring-framework/api.md)

- ### OOP

  - [스프링과 객체 지향, 객체 지향 설계 5원칙](https://github.com/lewns2/Toy/blob/master/articles/spring-framework/oop.md)

- ### JPA

  - [영속성 관리](https://github.com/lewns2/Toy/blob/master/articles/jpa/jpa_persist.md)

- ### DTO

  - [DTO 개념, 사용 범위, 변환 위치](https://github.com/lewns2/Toy/blob/master/articles/spring-framework/dto.md)
  - [DTO와 엔티티 간 데이터 변환 방법 - 생성자, 빌더 패턴, 정적 팩토리 메서드, Mapper](https://github.com/lewns2/Toy/blob/master/articles/spring-framework/create_dto.md)

- ### IoC

  - [의존성 주입(DI)와 IoC 컨테이너](https://github.com/lewns2/Toy/blob/master/articles/spring-framework/spring_core_IoC.md)

- ### Trouble Shooting

  - [Auto Increment 테스트](https://github.com/lewns2/Toy/blob/master/articles/spring-framework/auto_increment_test.md)

- ### 프로젝트
  - [spring-core](https://github.com/lewns2/Toy/tree/master/spring-core)

## JavaScript와 힘수형 프로그래밍

- ### JavaScript

  - [함수](https://github.com/lewns2/Toy/blob/master/articles/javascript/05.%20%ED%95%A8%EC%88%98.md)
  - [실행 컨텍스트](https://github.com/lewns2/Toy/blob/master/articles/javascript/08.%20%EC%8B%A4%ED%96%89%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8.md)
  - [콜백 함수](https://github.com/lewns2/Toy/blob/master/articles/javascript/10.%20%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98.md)
  - [프로토타입](https://github.com/lewns2/Toy/blob/master/articles/javascript/12.%20%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85.md)
  - [자바스크립트의 메모리 누수](https://github.com/lewns2/Toy/blob/master/articles/javascript/13.%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%88%84%EC%88%98.md)

- ### 모던 자바스크립트 Deep Dive

  - [01~02. 프로그래밍, 자바스크립트란?](https://github.com/lewns2/Toy/blob/master/articles/javascript/deep-dive/01~02.%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%2C%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%9E%80%3F.md)
  - [04~05. 변수, 표현식과 문](https://github.com/lewns2/Toy/blob/master/articles/javascript/deep-dive/04~05.%20%EB%B3%80%EC%88%98%2C%20%ED%91%9C%ED%98%84%EC%8B%9D%EA%B3%BC%20%EB%AC%B8.md)
  - [06~07. 데이터 타입, 연산자](https://github.com/lewns2/Toy/blob/master/articles/javascript/deep-dive/06~07.%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%ED%83%80%EC%9E%85%2C%20%EC%97%B0%EC%82%B0%EC%9E%90.md)
  - [08~09. 제어문, 타입 변환과 단축 평가](https://github.com/lewns2/Toy/blob/master/articles/javascript/deep-dive/08~09.%20%EC%A0%9C%EC%96%B4%EB%AC%B8%2C%20%ED%83%80%EC%9E%85%20%EB%B3%80%ED%99%98%EA%B3%BC%20%EB%8B%A8%EC%B6%95%20%ED%8F%89%EA%B0%80.md)
  - [10~11. 객체 리터럴, 원시 값과 객체의 비교](https://github.com/lewns2/Toy/blob/master/articles/javascript/deep-dive/10~11.%20%EA%B0%9D%EC%B2%B4%20%EB%A6%AC%ED%84%B0%EB%9F%B4%2C%20%EC%9B%90%EC%8B%9C%20%EA%B0%92%EA%B3%BC%20%EA%B0%9D%EC%B2%B4%EC%9D%98%20%EB%B9%84%EA%B5%90.md)
  - [12. 함수](https://github.com/lewns2/Toy/blob/master/articles/javascript/deep-dive/12.%20%ED%95%A8%EC%88%98.md)
  - [13~14. 스코프, 전역 변수의 문제점 ](https://github.com/lewns2/Toy/blob/master/articles/javascript/deep-dive/13~14.%20%EC%8A%A4%EC%BD%94%ED%94%84%2C%20%EC%A0%84%EC%97%AD%20%EB%B3%80%EC%88%98%EC%9D%98%20%EB%AC%B8%EC%A0%9C%EC%A0%90.md)

- ### Funtional Programming

  - [함수형 프로그래밍 개요](https://github.com/lewns2/Toy/blob/master/articles/funtional-programming/fp.md)
  - [클로저](https://github.com/lewns2/Toy/blob/master/articles/javascript/11.%20%ED%81%B4%EB%A1%9C%EC%A0%80.md)
  - 커링함수와 부분 적용 함수
  - [모나드](https://github.com/lewns2/Toy/blob/master/articles/funtional-programming/monad.md)

- ### 예제 코드 모음
  - [javascript-lab](https://github.com/lewns2/Toy/tree/master/javascript-lab)

## Java

- ### 자바

  - [자바 훑어보기](https://github.com/lewns2/Toy/blob/master/articles/java/basic.md)
  - [서블릿](https://github.com/lewns2/Toy/blob/master/articles/java/servlet.md)
  - [자바 리플렉션]()

- ### 이펙티브 자바

  - 객체의 생성

    - [정적 팩토리 메서드 패턴](https://github.com/lewns2/Toy/blob/master/articles/java/static_factory_method.md)
    - [빌더 패턴](https://github.com/lewns2/Toy/blob/master/articles/java/builder.md)

  - 클래스와 인터페이스
    - [클래스와 멤버의 접근 권한 최소화하라](https://github.com/lewns2/Toy/blob/master/articles/java/class_member_access_level.md)

- ### 예제 코드 모음
  - [java-lab](https://github.com/lewns2/Toy/tree/master/java-lab)

## 데이터베이스

- [정규화](https://github.com/lewns2/Toy/blob/master/articles/database/normalization.md)
- [트랜잭션](https://github.com/lewns2/Toy/blob/master/articles/database/%1Ctransaction.md)
- [트랜잭션 격리 수준](https://github.com/lewns2/Toy/blob/master/articles/database/transaction-isoliation-level.md)
- [인덱스](https://github.com/lewns2/Toy/blob/master/articles/database/index.md)
