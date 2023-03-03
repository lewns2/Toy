package object.create_pattern.StaticFactoryMethod.Singleton;

// 생성자 방식
public class Person {

    String name;

    public Person() {};

    public static void main(String[] args) {
        Person A = new Person();
        Person B = new Person();

        System.out.println(A);
        System.out.println(B);
    }
}
