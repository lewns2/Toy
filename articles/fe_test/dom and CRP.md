## DOM 이란?

RTL은 DOM testing Library 위에 구축되며, DOM testing Library는 Dom 노드를 테스트하기 위한 매우 가벼운 솔루션이다.

DOM(Document Object Model) : 문서 객체 모델
정의 : DOM은 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스이다.

### 웹페이지 빌드 과정(Critical Rendering Path CRP)
브라우저가 서버에서 페이지에 대한 HTML 응답을 받고 화면에 표시하기 전에 여러 단계가 있습니다.
웹 브라우저가 HTML 문서를 읽고, 스타일 입히고, 뷰포트에 표시하는 과정입니다.

1. 문서를 읽어들여서 그것들을 파싱하고 어떤 내용을 페이지에 렌더링할 지 결정합니다.
2. 브라우저가 DOM과 CSSOM을 결합하는 곳이며, 이 프로세스는 화면에 보이는 모든 콘텐츠의 콘텐츠와 스타일 정보를 모두 포함하는 최종 렌더링 트리를 출력합니다. 즉, 화면에 표시되는 모든 노드의 콘텐츠 및 스타일 정보를 포함합니다.
3. 브라우저가 페이지에 표시되는 각 요소의 크기와 위치를 계산하는 단계입니다.
4. 페인트 단계에 도달하면 브라우저는 레이아웃 결과를 선택하고 픽셀을 화면에 페인트해야 합니다.

DOM
1. HTML 요소들의 구조화된 표현
2. DOM은 HTML이 브라우저의 렌더링 엔진에 의해 분석되고 분석이 모두 끝나고난 HTML 파일이 DOM입니다.
3. HTML은 화면에 보이고자 하는 모양과 구조를 문서로 만들어서 단순 텍스트로 구성되어있으며, DOM은 HTML 문서의 내용과 구조가 객체 모델로 변화되어 다양한 프로그램에서 사용될 수 있습니다. DOM은 객체 모델이기 때문에 자바스크립트로 컨트롤이 가능합니다.
4. HTML 문서가 유효하지 않게 작성됐을때는 브라우저가 올바르게 교정하주며, DOM은 자바스크립트에 의해 수정될 수 있습니다. 하지만 HTML은 자바스크립트로 수정되지 않습니다.