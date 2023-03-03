package object.singleton.enum_type;

public enum Hello {
    INSTANCE;

    public static void main(String[] args) {
        Hello hello1 = Hello.INSTANCE;
        Hello hello2 = Hello.INSTANCE;

        System.out.println(hello1);  // INSTANCE
        System.out.println(hello2);  // INSTANCE

    }
}
