class Person {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  sayHi(text) {
    return "Hi " + text;
  }

  // 정적 메서드
  static sayHello() {
    console.log("HELLO");
  }
}

var A = new Person("DH");

console.log("A의 __proto__ = ", A.__proto__);
console.log("A의 prototype = ", A.prototype);

console.log("Person의 __proto__ = ", Person.__proto__);
console.log("Person의 prototpye = ", Person.prototype);
