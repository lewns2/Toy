package object.pattern.StaticFactoryMethod.Singleton;

// 정적 팩토리 메서드를 통한 싱글톤 구현
public class PersonTest {

    public PersonTest() {};

    private static final PersonTest person = new PersonTest();

    public static PersonTest getPerson() {
        return person;
    }

    public static void main(String[] args) {

        PersonTest A = PersonTest.getPerson();
        PersonTest B = PersonTest.getPerson();

        System.out.println(A);
        System.out.println(B);
    }
}
