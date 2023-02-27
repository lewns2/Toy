var extendClass = (function () {
  // 1. 빈 함수 생성
  var Bridge = function () {};

  // 2. 하위 클래스 생성
  return function (SuperClass, SubClass, subMethods) {
    // 2.1 빈 함수를 거쳐 하위 클래스 생성
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    SubClass.prototype.consturctor = SubClass;

    // 2.2 하위 클래스에서 확장할 메서드 추가
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }

    // 2.3 객체 불변화
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})();
