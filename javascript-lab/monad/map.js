var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
  return num * 2;
});
var numberToString = numbers.map(function (num) {
  return num.toString();
});

console.log(typeof numbers, typeof numbers[0], numbers); // numbers는 그대로 [1, 4, 9]
// console.log(doubles); // doubles는 이제 [2, 8, 18]
console.log(typeof numberToString, typeof numberToString[0], numberToString); // [ '1', '4', '9' ]
