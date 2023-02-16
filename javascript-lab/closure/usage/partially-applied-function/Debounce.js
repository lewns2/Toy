const debounce = (eventName, func, wait) => {
  let timerId = null;

  return function (event) {
    let self = this;
    clearTimeout(timerId);
    timerId = setTimeout(func.bind(self, event), wait);
  };
};

var wheelHandler = function (e) {
  console.log("휠 처리");
};

/* 디바운싱 적용 X */
// document.body.addEventListener("mousewheel", (e) => {
//   moveHandler(e);
// });

/* 디바운싱 적용 O */
// document.body.addEventListener(
//   "mousewheel",
//   debounce("wheel", moveHandler, 500)
// );
