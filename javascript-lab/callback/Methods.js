/* 저바스크립트에서 콜백 함수를 사용하는 고차 함수 */

// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(res); // [2, 4, 6]

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function (item) {
  return item % 2;
});

console.log(res); // [1, 3];

// 콜백 함수를 사용하는 고차 함수 reduce
res = [3, 4, 5, 6].reduce(function (acc, cur) {
  return acc * cur; // f(f(f(3, 4), 5), 6)
});

console.log(res); // 360;
