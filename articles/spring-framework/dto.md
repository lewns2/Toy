# DTO에 대하여

## 목차

- DTO(Data Transefer Object)란?
- DTO를 사용하는 이유
- DTO의 사용 범위와 변환 위치에 대한 생각
- DTO 클래스를 만드는 다양한 방법
  - 생성자만으로 만들기
  - 빌더 패턴
  - 정적 팩토리 메서드 패턴

## DTO(Data Transefer Object)란?

계층 간 데이터 전송을 위해 도메인 모델(엔티티) 대신 사용되는 데이터 객체를 말한다.

클라이언트-서버 프로젝트
클라이언트-서버 프로젝트에서 데이터는 종종 클라이언트(프레젠테이션 계층)와 서버(도메인 계층)에 따라 다르게 구성된다. 이때, 서버는 데이터베이스 친화적이거나 성능이 뛰어난 방식으로 데이터를 저장하는 동시에, 클라이언트에 대해 사용자에게 필요한 데이터를 제공해야한다.

![layers](../image/layers.png)

클라이언트-서버에서 더 나아가 웹 어플리케이션 개발에 주로 사용되는 디자인 패턴인 MVC 패턴에서도 살펴보자.

MVC 패턴
MVC 패턴에서 비즈니스 처리 로직(Model)과 UI 영역(View)은 서로의 존재를 인지하지 못하고, Controller가 중간에서 Model과 View의 연결을 담당한다. Model과 View를 분리함으로써 서로의 의존성을 낮추고 독립적인 개발을 가능하게 한다. 여기서 Controller는 View와 Model의 데이터를 주고 받을 때, 마찬가지로 클라이언트-서버 프로젝트에서 나타나는 각각에 올바른 데이터를 제공해야 하는 일이 발생한다.

즉, 서버는 두 데이터 형식 간 변환할 방법이 필요하다.

DTO의 특징
DTO는 순수하게 데이터를 저장하고, 데이터에 대한 getter, setter 만을 가져야한다.
어떠한 비즈니스 로직을 가져서는 안되며, 저장, 검색, 직렬화, 역직렬화 로직만을 가져야 한다.

- 직렬화 : 객체를 Byte, Json, Xml 등의 형태로 변화하는 것을 말한다.
- 역직렬화 : 직렬화의 반대이다.

DTO는 크게 서버에서 받은 것(Request)와 서버에서 반환한 것(Response)로 구분할 수 있다.
이들은 Spring에 의해 자동으로 직렬화/역직렬화된다.(스프링 부트에서는 기본 탑재된 spring-boot-starter-web의 Jackson 라이브러리가 직렬화를 담당한다.)

예시)

```Java
public class CreateProductRequest {
    private String name;
    private Double price;
}

public class ProductResponse {
    private Long id;
    private String name;
    private Double price;
}

@PostMapping("/products")
public ResponseEntity<ProductResponse> createProduct(@RequestBody CreateProductRequest request) {
    /*
    ...
    */
}

```

## 도메인 대신 DTO를 사용하는 이유

DTO가 필요한 이유는 위의 정의와 특징에서 알 수 있듯이, 프레젠테이션 계층과 도메인 계층에서 요구하는 데이터의 양식이 다르기에 이를 위한 변환이 필요해서이다. 그럼 DTO를 쓰지 않으면 어떻게 될까?

만약, 클라이언트의 요청에 대한 응답으로 도메인 모델(엔티티)를 직접 반환한다고 생각해보자.
이때 예상 가능한 문제점들은 다음과 같다.

- 엔티티의 모든 속성이 외부에 노출된다.
  - 화면 출력에 필요한 데이터뿐 아니라, 불필요한 데이터까지 클라이언트가 보유한다.
  - 비즈니스 로직, 민감한 정보가 외부에 노출되는 보안문제와도 직결된다.
- View 계층에서 Model의 상태를 변경시킬 위험이 있다.
  - View에서 엔티티를 변경할 가능성으로 인해 도메인에 영향을 끼칠 수 있다.

정리하자면, 엔티티를 통한 요청/반환의 경우, 강한 결합으로 인해 View의 요구사항 변화에 대해 Model에 영향을 주게 된다. 따라서 DTO를 사용하면, 도메인 모델을 캡슐화할 수 있고, UI 화면에서 사용하는 데이터만 선택적으로 보낼 수 있게 된다.

## DTO의 사용 범위와 변환 위치에 대한 생각

토이 프로젝트를 하며, 여러 프로젝트 코드들을 보며 분석하던 중 DTO를 변환하는 위치와 이를 사용하는 범위가 달랐다. (검색해보니 이에 대한 의견도 분분한 것 같았다.) 의견들을 다음과 같이 분류할 수 있었다.

변환 위치 : Controller vs Service

Controller
서비스 레이어에 DTO가 들어오게 되면, 여러 종류의 컨트롤러에서 해당 서비스를 사용할 수 없다.

Service
DTO로 변환하는 것도 비즈니스 로직의 일부이니, 컨트롤러는 적합하지 않다.

사용 범위 : View - Controller vs View - Controller - Service

컨트롤러와 서비스 간 통신을 할 때, 컨트롤러와 뷰가 통신할 때 사용한 DTO를 그대로 사용하면 강한 의존이 발생한다.

- 서비스가 받고 싶은 포맷이 컨트롤러에 종속적이게 된다.

DTO 안에 toEntity 메서드, toDto 메서드를 만들어서 변환한다면 둘 중 하나가 바뀌어도 서로 수정해야 하고, 결과적으로 컨트롤러와 서비스와의 의존을 만들게 된다.

새로운 시각
컨트롤러 dto와 서비스 dto를 따로 만든다.
view - 컨트롤러 : dto
컨트롤러 - 서비스 : 서비스 dto
