package object.create_pattern.StaticFactoryMethod;

public class Foo {

    String name;
    String address;

    // 생성자
    public Foo(String name) {
        this.name = name;
    }

    // 정적 팩토리 메서드
    // 1. 이름을 가진다.
    public static Foo withNames(String name) {
        return new Foo(name);   // 객체를 생성하고 반환하기 위해 생성자가 필요하다.
    }


    public Foo() {}

    // 2. 똑같은 타입을 파라미터로 받는 객체를 만들 수 있다. (생성자는 불가능하다.)
    public static Foo withAddress(String address) {
        Foo foo = new Foo();
        foo.address = address;
        return foo;
    }

    // 정적 팩토리 메서드를 통한 인스턴스 생성
    public static void main(String[] args) {
        Foo foo = Foo.withNames("dh");
        Foo foo2 = Foo.withAddress("Busan");
    }
}
