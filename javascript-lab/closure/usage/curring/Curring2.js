const multiply = (a) => (b) => (c) => a * b * c;

var resA = multiply(3); // 실행 결과를 기억
var resB = resA(2); // 실행 결과를 기억
var resC = resB(4); // 모든 인자가 다 들어왔으므로 a*b*c가 리턴된다.

// 모든 인자가 들어와야 결과가 출력된다.
console.log(resA);
console.log(resB);
console.log(resC);
