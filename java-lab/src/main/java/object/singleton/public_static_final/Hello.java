package object.singleton.public_static_final;

public class Hello {
    public static final Hello INSTANCE = new Hello();

    private Hello() {
        // ...
    }

    public static void main(String[] args) {
        Hello hello1 = Hello.INSTANCE;
        Hello hello2 = Hello.INSTANCE;
        System.out.println(hello1);
        System.out.println(hello2);
    }
}
