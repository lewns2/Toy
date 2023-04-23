## 작업환경 세팅

### 초기
```bash
docker pull mysql
```

```bash
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 --name mysql mysql
```

```bash
docker ps
```

### mysql 데이터베이스 생성
```bash
docker exec -it mysql bash
```

```bash
mysql -u root -p
```

```bash
create database stock_example;
```

```bash
use stock_example;
```


### 컨테이너 실행
```bash
docker start mysql
```

## 동시성 문제

해결 방법 <br>
하나의 쓰레드에 하나의 작업을 보장해야 한다.

### Synchronized로 해결하기 (자바의 동기화)
해당 메서드에 `synchronized` 키워드 사용하기 <br>

문제점 <br>
`synchronized`는 하나의 프로세스 안에서만 보장이 된다. 따라서 여러 대의 서버에서 데이터에 접근하는 경우, 여전히 문제가 발생한다.

### 데이터베이스 이용하기

1. Pessimistic Lock <br>
실제로 데이터에 Lock을 걸어서 데이터 정합성을 맞추는 방법이다. 단, 데드락이 걸릴 수 있기때문에 주의가 필요하다.

2. Optimistic Lock <br>
실제로 Lock을 이용하지 않고 버전을 이용함으로써 정합성을 맞추는 방법이다. <br>
데이터를 읽은 후, update 수행 시 현재 읽은 버전이 맞는지 확인하여 업데이트를 진행한다. 내가 읽은 버전에서 수정 사항이 발생한 경우, apllication에서 다시 읽은 후에 작업을 수행햐야한다.

3. Named Lock <br>
이름을 가진 metadata locking이다. <br>
이름을 가진 lock을 획득한 후 해제할 때까지 다른 세선은 이 lock을 획득할 수 없도록 만든다. transaction이 종료될 때 lock이 자동으로 해제되지 않으므로 별도의 명령어로 해제를 수행해주거나 선점시간이 끝나야 해제된다.