# DTO와 엔티티 간 데이터 변환 방법

## 들어가기 전

DTO 클래스라는 것이 특별한 게 아니라, <br>
요청 데이터와 엔티티 간 데이터 형식 맞추기, 엔티티와 응답 데이터 간 데이터 형식을 맞추기위한 클래스일 뿐이다. <br>
<br>
즉, 주어진 데이터를 통해 원하는 형식의 객체를 새로 생성하는 것일 뿐이다. <br>
DTO 클래스를 생성한다고 하였지만, 간단히 생각하면 그저 자바에서 객체를 생성하는 방법에 지나지 않는다. <br>
<br>

View에서 회원 등록을 위한 요청 API가 도착했다고 생각해보자. <br>
Spring의 Controller(혹은 Service)에서 할 일은 **요청 데이터를 엔티티로 변환하는 일**이다. <br>
그 후, 로직을 실행하고 응답값이 있는 경우 **엔티티를 DTO로 변환**해야한다.

<br>

## 생성자 함수와 Setter로 변환해보기

### 예시: 회원 요청 데이터를 DTO로 변환

```java
 // 회원 등록
    @PostMapping("/signup")
    public MemberResponse addMember(@RequestBody SignUpRequest request) {

        /* to Entitiy 로직 */
        Member member = new Member();
        member.setEmail(signUpRequest.getEmail());
        member.setPassword(signUpRequest.getPassword());

        /*
          회원 가입 로직
        */

        /* to Dto 로직 */
    }
```

요청 데이터를 엔티티로 변환하는 것은 간단하다. <br>
엔티티를 통해 새로운 객체를 생성한 뒤, 여기에 요청 데이터를 직접 넣어주는 방법이다. <br>
<br>
응답 데이터로 변환하는 것도 동일하다. <br>
생성자 함수를 통해 응답 데이터 객체를 생성한 뒤, 여기에 엔티티 값들을 직접 넣어주면 된다. <br>

<br>

## 정적 팩토리 메서드

정적 팩토리 메서드는 객체 생성 역할을 하는 클래스 메서드를 말한다. <br>

### 예시: 정적 팩토리 메서드를 사용한 엔티티를 DTO로 변환하는 객체 생성

```java
// 응답 데이터를 생성하는 클래스
public class MemberResponse {
    private Long memberId;

    // 생성자
    public MemberResponse(Long memberId) {
        this.memberId = memberId;
    }

    // 정적 팩토리 메서드 패턴
    public static MemberResponse from(Long id) {
        return new MemberResponse(id);
    }
}
```

서비스 로직에서 처리한 뒤, 응답해야할 데이터인 memberId를 가지고 직접 객체 생성해서 반환하는 모습을 볼 수 있다. <br>

### 예시: Controller에서 사용

```java
 // 회원 등록
    @PostMapping("/signup")
    public MemberResponse addMember(@RequestBody SignUpRequest request) {
        /* to Entitiy 로직 */
        /* 회원 가입 로직 */
        /* to Dto 로직 */
        return MemberResponse.from(id);
    }
```

위 코드와 같이 MemberResponse에 from 이라는 메서드를 통해 객체를 생성해 반환한다. <br>

정적 팩토리 메서드에는 아래와 같은 컨벤션이 존재한다.

- from : 하나의 매개 변수를 받아서 객체를 생성
- of : 여러개의 매개 변수를 받아서 객체를 생성
- valueOf: from과 of의 더 자세한 버전
- getInstance | instance : 인스턴스를 생성. 이전에 반환했던 것과 같을 수 있음.
- newInstance | create : 새로운 인스턴스를 생성
- get[OtherType] : 다른 타입의 인스턴스를 생성. 이전에 반환했던 것과 같을 수 있음.
- new[OtherType] : 다른 타입의 새로운 인스턴스를 생성.

<br>

## 빌더 패턴

먼저, 여기서는 추상 클래스 Builder를 만들지 않고, Lombok의 @Builder 어노테이션을 사용했다. <br>

### 예시: 회원 요청 데이터를 엔티티로 변환

```java
public class SignUpRequest {
    private String nickname;
    private String email;
    private String password;

    // 생성자
    public SignUpRequest() {}

    // 빌더 패턴
    public Member toEntity() {
        return Member.builder()
                .nickname(nickname)
                .email(email)
                .password(password)
                .build();
    }
}
```

요청 데이터로 닉네임, 이메일, 비밀번호가 들어오는 데 이를 toEntity() 메서드를 통해 엔티티로 변환하는 모습을 볼 수 있다. <br>
이를 사용하기 위해선 엔티티에 `@Builder` 어노테이션을 작성해야한다. <br>

```Java
@Builder // 빌더 패턴을 위함.
public Member(String nickname, String email, String password, Role role) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.role = role;
}
```

## Mapper 라이브러리

엔티티와 DTO 사이의 변환을 도와주는 매핑 라이브러리들이 있다. <br>
대표적으로 `model mapper`와 `mapstruct`가 있다. <br>
<br>
라이브러리이기 때문에, 사용을 위해선 당연히 dependencies에 추가해줘야 한다. <br>

```
dependencies {

    // ...

	// MapStruct
	implementation 'org.mapstruct:mapstruct:1.5.3.Final'
	annotationProcessor 'org.mapstruct:mapstruct-processor:1.5.3.Final'

    // ...
}
```

<br>

### 예시: mapstruct를 통한 DTO와 엔티티 데이터 변환

```java
@Mapper
public interface MemberMapper {

    MemberMapper INSTANCE = Mappers.getMapper(MemberMapper.class);

    // toDto
    MemberDto toMemberDto(Member member);

    // toEntity
    Member toMember(MemberDto memberDto);
}
```

 <br>

코드 실행 시, Mapper 인터페이스의 구현체가 자동으로 작성되어 실행된다. <br>

### 예시: 자동으로 작성된 구현체(사용자가 작성하지 않음)

```java
@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-30T01:17:07+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.13 (Azul Systems, Inc.)"
)
public class MemberMapperImpl implements MemberMapper {

    @Override
    public MemberDto toMemberDto(Member member) {
        if ( member == null ) {
            return null;
        }

        String email = null;

        email = member.getEmail();

        MemberDto memberDto = new MemberDto( email );

        return memberDto;
    }

    @Override
    public Member toMember(MemberDto memberDto) {
        if ( memberDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberDto.getEmail() );

        return member;
    }
}
```
