## API 설계하기

API의 흐름

1. 요청(Request)
2. Validation
3. Translation
4. 비즈니스 로직

요청 이후, API(System에 의해 구현)의 시작이다.

**요청 데이터에 대한 검증(Validation)**

서버에서 필요로 하는 기본값(@NotEmpty)이 있는 지, 정해진 타입이 맞는 지 등 검증을 한다.

```Java

@PostMapping("/api/v1/members")
public CreateMemberRes saveMember(@RequestBody @Valid MemberDto memberDto) {
    // something...
}

```

**DTO: Translation**
검증이 끝난 데이터는 보통 "translation" 단계를 거친다. 이는 내부 비즈니스 로직을 드라이브하는 데 필요한 핵심 엔티티로 변환하는 단계를 말한다.

API에 맞는 별도의 객체 DTO 클래스를 통해 request를 받는다. 달리 말하면 API에 엔티티가 직접 노출되면 안된다. (엔티티를 직접 매핑하지 않는다.)

엔티티를 직접 노출하게 된다면(@RequestBody에 직접 매핑한 것을 말함.), 다음과 같은 어려움이 있다.

1. 엔티티가 변경되면 API 스펙 자체가 변경된다.
2. 하나의 엔티티에 각 API를 위한 모든 요구사항을 담기 힘들다.
3. API 검증을 위한 로직이 엔티티에 직접 들어간다.

즉, 엔티티는 여러 곳에서 사용되는 데, 요청과 1:1로 연결된 셈이다.

**비즈니스 로직**
translation된 결과는 비즈니스 로직으로 전달된다.
이 비즈니스 로직은 원하는 바를 달성하기 위해 다른 컴포넌트와 인터랙션을 한다.

통상 그렇게 할 때, DI(Dependency Injection)란 기법을 통해 컴포넌트의 호출을 처리하게 된다.
