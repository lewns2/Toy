/* 전역 변수의 사용 */
var x = 10;

function addNum() {
  return ++x;
}

console.log(addNum()); // 11
console.log(addNum()); // 12
