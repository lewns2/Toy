/* 클로저 예시 */
var color = "red";

function foo() {
  var color = "blue";

  function bar() {
    console.log(color);
  }

  return bar; // 중첩 함수를 반환한다.
}

var baz = foo();
baz(); // blue를 출력한다.
