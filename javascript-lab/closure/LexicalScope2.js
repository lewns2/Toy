/* 렉시컬 스코프 : 함수는 선언된 위치에 따라 상위 스코프를 결정한다. */
var x = 1;

function foo() {
  var x = 100;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
