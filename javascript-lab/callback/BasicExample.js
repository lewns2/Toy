/* 콜백 함수 예시 */

function add(x, y, print) {
  print(x + y);
}

function printResult(result) {
  console.log(result);
}

add(10, 20, printResult); // printResult 함수를 인자로 전달(함수 형태가 아니다!)
