/* 순차적 실행을 보장하고 싶은 경우 */

function printOne(afterPrintOne) {
  console.log("1");
  afterPrintOne();
}

function printTwo() {
  console.log("2");
}

printOne(printTwo); // 함수를 인자로 넘긴다.
