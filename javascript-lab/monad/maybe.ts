class Maybe<T> {
  private value: T | null;

  constructor(value: T | null) {
    this.value = value;
  }

  map<U>(fn: (x: T) => U): Maybe<U> {
    return this.value === null
      ? new Maybe<U>(null)
      : new Maybe<U>(fn(this.value));
  }

  flatMap<U>(fn: (x: T) => Maybe<U>): Maybe<U> {
    return this.value === null ? new Maybe<U>(null) : fn(this.value);
  }
}

// 사용 예시
const maybeNum1 = new Maybe<number>(10);
const maybeNum2 = new Maybe<number>(null);

// map 사용 예시
const doubled1 = maybeNum1.map((x) => x * 2); // Just(20)
const doubled2 = maybeNum2.map((x) => x * 2); // Nothing

// flatMap 사용 예시
const maybeDoubled1 = maybeNum1.flatMap((x) => new Maybe(x * 2)); // Just(20)
const maybeDoubled2 = maybeNum2.flatMap((x) => new Maybe(x * 2)); // Nothing

console.log(doubled1); // Maybe { value: 20 }
console.log(maybeDoubled1); // Maybe { value: 20 }
