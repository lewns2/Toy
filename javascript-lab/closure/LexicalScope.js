/* 중첩된 함수는 외부 범위에서 선언한 변수에도 접근할 수 있다. */
function foo() {
  var color = "blue";

  function bar() {
    console.log(color);
  }
  bar();
}
foo();
