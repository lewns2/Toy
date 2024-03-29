> **데이터베이스 학습할 때에는 크게 여섯 가지 기본 개념을 배워야 합니다. 첫 번째는 데이터 관계를 설계하는 데이터 모델링, 두 번째는 데이터 관계가 부적절하게 설계된 것을 고치는 정규화, 세 번째는 데이터베이스와 소통하기 위한 선언적 언어인 SQL, 네 번째는 DBMS(Database Management System)에서 정보를 어떻게 유도하는지 배우는 관계 대수, 다섯 번째는 데이터를 빠르게 검색할 수 있도록 구조화된 인덱스
> , 여섯 번째는 다중 사용자 환경에서 동시성을 제어 하기 위한 잠금 메커니즘과 논리적 작업 단위를 설명하는 트랜잭션이 있습니다.**

## 데이터베이스란?

여러 사람에 의해 공유되어 사용될 목적으로 통합하여 관리되는 데이터의 집합을 말한다.

### 사용 이유

데이터베이스가 존재하기 이전에는 파일 시스템을 이용하여 데이터를 관리하였다. 데이터를 각각의 파일 단위로 저장하며 이를 처리하기 위한 독립적인 애플리케이션과 상호 연동이 되어야 한다. 이때 발생하는 문제점은 데이터 종속성, 중복성, 무결성이다.

**데이터 종속성**

응용 프로그램과 데이터 간의 상호 의존 관계를 말한다. 즉, 프로그램의 구조가 데이터의 구조에 영향을 받는 것을 의미한다. 데이터의 구조가 프로그램의 데이터 저장방식을 결정하고 반대로 프로그램의 데이터 저장방식에 따라 데이터의 저장방식이 바뀌는 것을 말한다.

**데이터 중복성**

파일 시스템은 프로그램마다 데이터 종속성 등으로 인해 공유가 안되는 경우가 많아 프로그램마다 같은 정보를 중복해서 저장하는 경우가 많다. 결과적으로 파일 시스템에서는 내용이 같으면서도 구조가 다른 데이터가 많이 존재하게 된다. 이와 같이 한 시스템 내에 내용이 같은 데이터가 중복되게 저장 관리되는 것을 데이터 중복성이라고 한다.

**데이터 무결성**

데이터베이스에 저장된 데이터의 일관성과 정확성을 지키는 것을 말한다.

데이터 중복이 발생되면 데이터를 관리하는 측면에서 분산된 데이터로 인해 모든 데이터들을 모두 수정해야한다.

데이터 정확성을 확보하기 어렵다.

### 목표

데이터베이스의 궁극적인 목표는 데이터 독립성이다.

데이터 독립성이란 데이터의 물리적, 논리적 구조 등이 변경되어도 응용 프로그램에 영향을 주지 않음을 의미한다.

### 데이터베이스의 개념

- 통합 데이터 : 데이터를 통합하는 개념으로, 각자 사용하던 데이터의 중복을 최소화하여 데이터 불일치 제거
- 저장 데이터 : 문서로 보관된 데이터가 아닌 컴퓨터 저장장치에 저장된 데이터
- 운영 데이터 : 조직의 목적을 위해 사용되는 데이터
- 공용 데이터 : 한 사람 또는 한 업무를 위해 사용되는 데이터가 아니라 공동으로 사용되는 데이터를 의미

### 데이터베이스의 특징

- 실시간 접근성 : 데이터베이스는 실시간으로 서비스된다. 사용자가 데이터를 요청하면 수 초 내에 결과를 제공
- 지속적 변화 : 데이터베이스에 저장된 내용은 한 순간의 상태이지만, 값은 시간에 따라 항상 바뀜
- 동시 공유 : 데이터베이스는 서로 다른 업무, 여러 사용자에게 동시에 공유
- 내용에 따른 참조 : 데이터베이스에 저장된 데이터는 물리적 위치가 아니라 값에 따라 참조
  - 우리는 어떤 데이터가 어느 주소에 저장되어있는지 몰라도 ‘OO’을 검색하면 원하는 값을 찾을 수 있다.

## DBMS(Database Management System) 란?

데이터베이스를 ‘데이터의 집합’이라고 정의한다면, 이런 데이터베이스를 관리하고 운영되는 소프트웨어를 DBMS라고 한다. 대표적으로 MySQL, 오라클, SQL 서버, MariaDB 등이 있다.

### DBMS의 종류

계층형, 망형, 관계형 등이 있다.

계층형

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f420379-6675-423b-9681-0c3c6e654282/Untitled.png)

처음 구성을 완료한 후에 이를 변경하기 상당히 까다롭다. 또, 다른 구성원을 찾아가는 것이 비효율적이다.

지금은 사용하지 않는 형태이다.

망형

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/577c0350-abae-4726-a6a1-7bd91a652ed0/Untitled.png)

계층형 DBMS의 문제를 개선하기 위해 등장했다. 하위에 있는 구성원끼리 연결된 구조이다. 하지만 이를 잘 활용하려면 프로그래머가 모든 구조를 이해해야만 프로그램 작성이 가능하다는 단점이 있어 지금은 거의 사용하지 않는 형태이다.

관계형(RDBMS)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6cdc43f4-2c38-47ca-b19e-8dde09fcc17a/Untitled.png)

대부분의 DBMS가 RDBMS 형태로 사용한다. RDBMS는 데이터베이스는 테이블이라는 최소 단위로 구성되며, 이 테이블은 하나 이상의 행과 열로 이루어져 있다.

### RDBMS vs NoSQL

RDBMS

- 장점 : 스키마에 맞춰 데이터를 관리하기 때문에 데이터의 정합성(일치)을 보장할 수 있다.
- 단점 : 시스템이 커질수록 쿼리가 복잡해지고 성능이 저하되며 Scale-out이 어렵다(Scale-up만 가능)
  - 일관된 데이터를 보장해야하는 RDBMS는 여러 데이터베이스로 분산되는 경우, 중복 발생 여부 등 데이터 정합성 보장이 어려워진다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7a82a7b9-6a73-49dc-a3a9-cd1328dad45b/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c1c40a1b-da6e-4b16-abac-f7c4e3227b91/Untitled.png)

NoSQL

**NoSQL**(Not Only SQL)은 RDBMS와 반대로 데이터간의 관계를 정의하지 않고, 스키마가 없어 좀 더 자유롭게 데이터를 관리할 수 있으며, 컬렉션이라는 형태로 데이터를 관리한다.

- **장점** : 스키마 없이 Key-Value 형태로 데이터를 관리해 자유롭게 데이터를 관리할 수 있다. 데이터 분산이 용이하여 성능 향상을 위한 scale-up 뿐만아닌 scale-out 또한 가능하다.
- **단점** : 데이터 중복이 발생할 수 있고, 중복된 데이터가 변경될 경우 수정을 모든 컬렉션에서 수행해야 한다. 스키마가 존재하지 않기에 명확한 데이터 구조를 보장하지 않아 데이터 구조 결정이 어려울 수 있다.

\***\*그렇다면 RDBMS와 NoSQL은 어느 경우에 적합한가요?\*\***

- **RDBMS**는 중복된 데이터가 없어(데이터 무결성) 변경이 용이하기 때문에 관계를 맺고 있는 데이터가 자주 변경이 이루어지는 시스템에 적합합니다.
  데이터 구조가 명확하고, 변경 될 여지가 없으며 스키마가 중요한 경우 사용하는 것이 좋습니다.
- **NoSQL**은 단점에서도 명확하듯 데이터 중복이 발생할 수 있으며 중복된 데이터가 변경될 시 모든 컬렉션에서 수정해야 하기 때문에 Update가 많이 이루어지지 않는 시스템에 좋으며, Scale-out이 가능하다는 장점을 활용해 막대한 데이터를 저장해야 해서 DB를 Scale-out 해야 되는 시스템에 적합합니다.
  정확한 데이터 구조를 알 수 없고 데이터가 변경/확장 될 수 있는 경우 사용하는 것이 좋습니다.

## 용어

---

| 파일 시스템    | 데이터베이스 모델링 | 관계형 데이터베이스         |
| -------------- | ------------------- | --------------------------- |
| 파일(File)     | 엔티티(Entity)      | 테이블(Table)               |
| 레코드(Record) | 튜플(tuple)         | 행(Row)                     |
| 키(Key)        | 식별자(Identifier)  | 기본키(Primary Key), Unique |
| 필드(Field)    | 속성(Attribute)     | 열(Column)                  |

### 테이블 관련 용어

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87d51537-1d70-4046-8ad8-1bde93765848/Untitled.png)

- 테이블(릴레이션) : 관계형 데이터베이스에서 정보를 구분하여 저장하는 기본 단위
- 행(레코드, 튜플) : 관계된 데이터의 묶음
- 열(필드, 속성) : 가장 작은 단위의 데이터를 의미
- 키(식별자) : 여러개의 집합체를 담고있는 관계형 데이터베이스에서 각각을 구분할 수 있는 논리적 개념
  - 유일성 : 하나의 릴레이션에서 모든 행은 서로 다른 키 값을 가져야 한다.
  - 최소성 : 꼭 필요한 최소한의 속성들로만 키를 구성해야 한다.

### Key의 종류

**Key**

- 특정 튜플을 식별할 때 사용되는 속성 혹은 속성의 집합
- 키가 되는 속성은 값이 반드시 달라야한다. → 튜플들을 구별하기 위함
- 키는 릴레이션 간의 관계를 맺는 데도 사용된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5df2af4-be57-4ea8-a4bc-70e1f80536c8/Untitled.png)

위의 릴레이션에서는 (고객번호, 도서번호) / (고객번호, 주문일자)와 같은 집합을 키로 사용할 수 있다.

**슈퍼키**

- 테이블의 행을 고유하게 식별할 수 있는 속성 또는 속성의 집합
  - 다시 말해, 튜플을 식별할 수만 있으면 모두 슈퍼키가 될 수 있다.
- 유일성을 만족하지만 최소성은 만족하지 않음

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e0e83890-fa71-4de1-99d5-240ef6c36ed5/Untitled.png)

이름, 주소는 동일한 값이 들어올 수 있으며, 핸드폰은 있을 수도 없을 수도 있다.

따라서 고객번호, 주민번호을 포함한 모든 속성의 집합이 슈퍼키가 될 수 있다.

(주민번호), (주민번호, 이름), (고객번호, 핸드폰) 등 여러 개가 슈퍼키가 될 수 있다.

**후보키**

- 릴레이션을 구성하는 속성들 중에서 튜플을 유일하게 식별하기 위해 사용하는 속성들의 부분집합.
- 즉, 기본키로 사용할 수 있는 속성들을 의미
- 모든 릴레이션에는 반드시 하나 이상의 후보키가 존재
- 유일성과 최소성을 만족시켜야함

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fbb3bbc5-c28d-4893-a467-cfdd8ecc469f/Untitled.png)

단일 속성으로는 튜플을 유일하게 식별하는 것이 불가능하므로 (고객번호, 도서번호)가 후보키가 된다.

**기본키**

- 후보키 중에서 선택한 대표로 삼는 키
- 한 릴레이션에서 특정 튜플을 유일하게 구별할 수 있는 속성
- null을 가질 수 없다.
- 동일한 값이 중복되어 저장될 수 없다

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86a4bc3f-3a27-4303-a323-895bbc7c25c9/Untitled.png)

**외래키**

- 어떤 릴레이션 간의 기본키를 참조하는 속성. 테이블들 간의 관계를 나타내기 위해 사용된다.
- 다른 릴레이션의 기본키를 그대로 참조하는 속성의 집합을 의미
- 외래키는 기본키가 아니기 때문에 null값을 가질 수 있다
