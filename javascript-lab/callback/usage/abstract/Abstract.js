/* 로직의 추상화를 하고 싶은 경우 */

// 중복: N까지 for문을 도는 것
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// 분리 1: 모두 출력
var printAll = function (i) {
  console.log(i);
};

// 분리 2: 홀수만 출력
var printOdds = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, printAll); // 0 1 2 3 4
repeat(5, printOdds); // 1 3
