### 테스트 코드

기본 키 전략이 'IDENTITY'(AUTO_INCREMENT)일 때, 테스트 방법

문제 상황) 새롭게 추가된 레코드를 확인하기 위해서, 기본키를 알아야 한다. 하지만 기본키는 자동으로 1씩 올라가기 때문에 매번 데이터베이스를 직접 확인하며 코드를 작성하는 문제가 있다. 또, 매번 테스트 할 때마다 코드 상의 ID값을 수정해야한다.

해결 방안 생각해보기

[1] 실행하고자 하는 메서드(서비스 레이어 or 리포지터리 레이어)에 id값을 리턴하게 만들어 이를 받아 테스트한다.
[2] 테스트 시, 데이터를 추가한 뒤 이후 DB를 롤백한다.
[3] 테스트 전(or 후), 테스트 테이블을 리셋시킨다.

먼저, [1]의 방법은 서비스 상 필요하진 않지만, 오로지 테스트만을 위한 방법이다. 그러므로 적절한 방법인지에 대한 의문이 든다.

다음, [2]의 경우, DB를 롤백시키는 것은 좋지만 이와 무관하게 기본키 값은 계속해서 올라간다. (ROW만이 삭제되며, 기본키는 유지된다.) 그러므로 기본키를 초기화시킬 방안이 필요하다.

마지막으로, [3]의 경우, 가장 확실한 방법이나 리스크가 있기에 DB를 서비스 DB, 테스트 DB로 분리하여 운영해야한다. [2]와 마찬가지로 기본키를 초기화시켜야 한다.

더 나은 해결 방법이 있을 지 모르겠지만, 당장 테스트 코드 구현에 많은 시간을 쏟기엔 또다른 공부할 것이 많기에 [3]의 방법을 통해 테스트 코드를 작성하였다.

[3]의 방법은 다음과 같은 순서로 테스트를 진행한다.

1. 테스트 실행
2. 테스트 테이블 삭제
3. 기본키 초기화

여기서 2, 3의 과정은 테스트 전(@BeforeEach)이나 후(@AfterEach)에 실행된다.

2. 테스트 테이블 삭제
   Spring data JPA를 사용하는 경우 deleteAllInBatch(), deleteAll()을 통해 매핑된 테이블의 데이터를 쉽게 지울 수 있는 메서드를 제공한다.
   ex) `this.somethingRepository.deleteAll();` , `this.somethingRepository.deleteAllInBatch();`

애석하게도 그냥 JPA는 이를 제공하지 않는다. 그러므로 EntiityManger를 통해 직접 이를 작성해야한다.
작성한 코드는 다음과 같다.

```JAVA

@PersistenceContext
private EntityManager em;

public void clearRepository() {
    // 순서 중요
    this.em.createNativeQuery("DELETE FROM board").executeUpdate();
    this.em.createNativeQuery("DELETE FROM members").executeUpdate();
}

@Test
@Transactional
void 게시글_저장_테스트() throws Exception {
    // ...
}
```

EntityManager를 사용하므로 테스트에 `@Transactional` 애노테이션을 작성해야한다.
당연하지만 간과했던 부분은 연관관계가 있는 테이블들이기 때문에 하위테이블부터 순서대로 삭제해야한다.

3. 기본키 초기화

기본키 초기화 역시 마찬가지로 EntitiyManger를 통해 직접 쿼리를 작성하였다.

```Java
public void teardown() {
    this.em.createNativeQuery("ALTER TABLE board AUTO_INCREMENT=1").executeUpdate();
    this.em.createNativeQuery("ALTER TABLE members AUTO_INCREMENT=1").executeUpdate();
}
```

`@AfterEach`는 순서를 보장하지 않기때문에, 각각의 함수를 만들어두고 다음과 같이 작성하였다.

```Java
@AfterEach
public void afterEach() {
    clearRepository();
    teardown();
}
```

위와 같은 방법이 좋은 테스트 방법인지는 모르겠다. 또, DB를 분리하기 위한 작업이 필요해보인다. `@Before` 키워드와 datasource를 통해 테스트 전 테스트 DB를 세팅하는 방법을 찾아봐야겠다.

테스트 코드를 작성하며, 작성된 로직 상의 문제점을 발견할 수 있어 중요성을 다시끔 느꼈다.
"게시글 삭제 테스트()"를 진행하며 삭제 테스트에 대한 어려움을 느꼈는 데, 이는 아마 JPA를 다루는 데 미숙하기에 발생한 문제인 것 같다. 삭제 후 참조가 되는 문제에 대해서도 찾아봐야겠다.
