# 생성자 대신 정적 팩토리 메서드를 고려하라

## 정적 팩토리 메서드란?

정적 팩토리 메서드는 객체 생성 역할을 하는 클래스 메서드를 말한다. <br>
public 생성자를 사용해서 객체를 생성하는 전통적인 방법 대신, public static 메서드를 사용해서 해당 클래스의 인스턴스를 생성하는 방법이 있다. <br>

## 예시

```Java
public class Foo {

    String name;
    String address;

    // 생성자
    public Foo(String name) {
        this.name = name;
    }

    // 정적 팩토리 메서드
    public static Foo withNames(String name) {
        return new Foo(name);
    }


    public static void main(String[] args) {

        // 생성자 방식
        Foo foo = new Foo("dh");

        // 정적 팩토리 메서드를 통한 인스턴스 생성
        Foo foo = Foo.withNames("dh");
    }
}
```

예시만 보아서는, 굳이 메서드를 거쳐 생성자를 생성해야하는 지 의문이 든다. <br>
그럼, 이제 정적 팩토리 메서드의 장점들을 알아보자. <br>

## 장점

### 장점 1. 이름을 가질 수 있다.

생성자 방식은 생성되는 객체의 특성을 직관적으로 설명하지 않는다. <br>
반면, 위 예시에서 정적 팩토리메서는 withNames란 이름을 가져 생성자에 제공하는 파라미터를 알기 쉽도록 한다. <br>
<br>
또, 생성자는 똑같은 타입을 파라미터로 받는 생성자 두 개를 만들 수 없다. <br>

```Java
public class Foo {

    String name;
    String address;

    // 생성자
    public Foo(String name) {
        this.name = name;
    }

    // 불가능
    public Foo(String address) {
        this.address = address;
    }
}
```

<br>
위 코드는 불가능하다. <br>
하지만 정적 팩토리 메서드는 이름을 가지므로 동일한 파라미터를 가지는 생성자를 만들 수 있다. <br>

```Java
public class Foo {

    String name;
    String address;

    public Foo() {};

    // 생성자
    public Foo withNames(String name) {
        Foo foo = new Foo();
        foo.name = name;
        return foo;
    }

    // 불가능
    public Foo withAddress(String address) {
        Foo foo = new Foo();
        foo.address = address;
        return foo;
    }
}
```

<br>

### 장점 2. 호출될 때마다 인스턴스를 새로 생성하지 않아도 된다.

new 키워드를 사용하면, 객체는 무조건 새로 생성된다. <br>
만약, 자주 생성될 것 같다면 클래스 내부에 미리 생성해놓고 이를 가져다 쓰면 효율적일 것이다. <br>

```Java
// 생성자 방식
public class Person {

    String name;

    public Person() {};

    public static void main(String[] args) {
        Person A = new Person();
        Person B = new Person();

        System.out.println(A);  // object.pattern.StaticFactoryMethod.Person@1b0375b3
        System.out.println(B);  // object.pattern.StaticFactoryMethod.Person@2f7c7260
    }
}
```

<br>

```Java
// 정적 팩토리 메서드를 통한 싱글톤 구현
public class Person {

    public Person() {};

    private static final Person person = new Person();

    public static Person getPerson() {
        return person;
    }

    public static void main(String[] args) {

        Person A = Person.getPerson();  // object.pattern.StaticFactoryMethod.PersonTest@1b0375b3
        Person B = Person.getPerson();  // object.pattern.StaticFactoryMethod.PersonTest@1b0375b3

        System.out.println(A);
        System.out.println(B);
    }
}
```

<br>

### 장점 3. 반환 타입의 하위 타입 객체 반환 가능

반환 타입은 인터페이스로 지정해서 구현체를 노출시키지 않을 수 있다. <br>

<br>

```Java
public interface Car {
    ...
}
```

```Java
public class ElectricCar implements Car {

    public static Car create() {
        return new ElectricCar();
    }
}
```

<br>

### 장점 4. 입력 매개변수에 따라 다른 클래스의 객체를 반환할 수 있다.

```Java
public class Level {

    public static Level from(int score) {
        if(score < 50) return new Basic();
        else if(score < 80) return new Intermediate();
        else return new Advanced();
    }

    static class Basic extends Level {};
    static class Intermediate extends Level {};
    static class Advanced extends Level {};

    public static void main(String[] args) {
        Level level = Level.from(50);  // object.pattern.StaticFactoryMethod.Return.Intermediate@2f7c7260
        System.out.println(level);
    }
}
```

<br>

### 장점 5. 정적 팩토리 메서드를 작성하는 시점에 반환할 객체의 클래스가 존재하지 않아도 된다.

<br>

## 단점

<br>

### 단점 1. public 또는 protected 생성자 없이 static public 메서드만 제공하는 클래스는 상속할 수 없다.

`java.util.Collections`는 상속할 수 없다. <br>
상속보다 컴포지션을 사용하도록 유도하고 불변 타입으로 만들려면 이 제약을 지켜야 한다는 점에서 오히려 장점이 될 수 있기도 하다. <br>

<br>

### 단점 2. 프로그래머가 static 팩토리 메서드를 찾는게 어렵다.

생성자는 Javadoc이 자동으로 상단에 모아서 보여준다. 정적 팩토리 메서는 그렇지 않다. <br>
따라서 클래스나 인터페이스 문서 상단에 팩토리 메소드에 대한 문서를 제공하는 것이 좋다. <br>

<br>

## 네이밍 컨벤션

정적 팩토리 메서드에는 아래와 같은 컨벤션이 존재한다. <br>

- `from` : 하나의 매개 변수를 받아서 객체를 생성
- `of` : 여러개의 매개 변수를 받아서 객체를 생성
- `valueOf`: from과 of의 더 자세한 버전
- `getInstance | instance` : 인스턴스를 생성. 이전에 반환했던 것과 같을 수 있음.
- `newInstance | create` : 새로운 인스턴스를 생성
- `get[OtherType]` : 다른 타입의 인스턴스를 생성. 이전에 반환했던 것과 같을 수 있음.
- `new[OtherType]` : 다른 타입의 새로운 인스턴스를 생성.
