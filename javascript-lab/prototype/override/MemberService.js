var Member = function (name) {
  this.name = name;

  Member.prototype.sayHi = function () {
    return "Hi";
  };

  Member.sayHello = function () {};
  Member.sayBye = function () {};
};

A = new Member("aaaaaaa");

console.log(A.name); //  aaaaaaa
console.log(A.sayHi()); // Hi

/* 오버라이딩을 통해 구현체 구현을 늦출 수 있다. */

// 오버라이딩
var MemberImpl = function (Member) {
  Member.sayHello = function () {
    return "Hello";
  };
};

MemberImpl(A);

// 오버라이딩
A.sayBye = function () {
  return "Bye";
};

console.log(A.sayHello()); // Hello

console.log(A.sayBye()); // Bye
