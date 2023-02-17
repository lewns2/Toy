/* 익명 함수를 통한 콜백 함수 예시 */

function add(x, y, print) {
  print(x + y);
}

add(10, 20, (result) => {
  console.log(result);
});
