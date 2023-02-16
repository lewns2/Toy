/* 클로저 : 전역 변수를 사용하지 않고 상태를 유지한다. */
function addNum() {
  var x = 10;

  function res() {
    return ++x;
  }
  return res;
}

var test = addNum();
console.log(test()); // 11
console.log(test()); // 12
