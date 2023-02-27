var extendClass = function (SuperClass, SubClass, subMethods) {
  // 1. Object.create를 통한 하위 클래스 생성
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;

  // 2. 하위 클래스에서 확장할 메서드 추가
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }

  // 3. 객체 불변화
  Object.freeze(SubClass.prototype);
  return SubClass;
};
