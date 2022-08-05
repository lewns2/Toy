---
description: 차량 리스트 / 무한 캐로셀 / 상세 페이지
author: 김동현
---

### 실행 방법

**패키지 설치**

```bash
yarn install
```

**Client 실행**

```bash
yarn start
```

**json-server 실행**

```
json-server db.json --routes routes.json --port 8080
```

<br>

### 테스트 방안

1. jest와 msw 모킹을 통한 API 테스트
