/* 어쩌다 보니 순수 함수 */

var x = 10;

// x의 변화에 관여하지 않는다.
function addNum(num) {
  return ++num;
}
// ES6
// var addNum = (num) => ++num;

console.log(addNum(x)); // 11
console.log(addNum(x)); // 11

// 12를 만들기 위해서는
console.log(addNum(addNum(x))); // 12
