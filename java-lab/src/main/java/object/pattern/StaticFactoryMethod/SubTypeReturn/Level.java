package object.pattern.StaticFactoryMethod.SubTypeReturn;

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
