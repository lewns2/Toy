function multiply(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

var resA = multiply(3);
var resB = resA(2);
var resC = resB(4);

// 모든 인자가 들어와야 결과가 출력된다.
console.log(resA);
console.log(resB);
console.log(resC);
