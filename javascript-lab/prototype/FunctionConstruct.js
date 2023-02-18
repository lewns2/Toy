var Member = function (name) {
  this.name = name;

  // prototype method
  Member.prototype.sayHi = function () {
    return "Hi";
  };

  // static method
  Member.sayHello = function () {
    return "Hello";
  };
};

A = new Member("aaaaaaa");

console.log(A.name); //  aaaaaaa
console.log(A.sayHi()); // Hi
console.log(A.sayHello()); // error
console.log(Member.sayHello()); // Hello
