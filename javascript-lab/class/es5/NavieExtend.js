var extendClass = function (SuperClass, SubClass, subMethods) {
  // 1. 상위 클래스 복제
  SubClass.prototype = new SuperClass();

  // 2. 불필요한 인스턴스 프로퍼티 제거
  for (var prop in SubClass.prototype) {
    if (SubClass.prototype.hasOwnProperty(prop)) {
      delete SubClass.prototype[prop];
    }
  }
  SubClass.prototype.consturctor = SubClass;

  // 3. 하위 클래스에서 확장할 메서드 추가
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }

  // 4. 객체 불변화
  Object.freeze(SubClass.prototype);
  return SubClass;
};
