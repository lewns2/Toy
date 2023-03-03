package object.singleton.static_factory;

public class Hello {
    private static final Hello INSTANCE = new Hello();

    private Hello() {
        // ...
    }

    public static Hello getInstance() {
        return INSTANCE;
    }

    public static void main(String[] args) {
        Hello hello1 = Hello.getInstance();
        Hello hello2 = Hello.getInstance();
        System.out.println(hello1);
        System.out.println(hello2);
    }
}
