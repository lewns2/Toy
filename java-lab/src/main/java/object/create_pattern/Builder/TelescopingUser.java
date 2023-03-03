package object.create_pattern.Builder;

// 점층적 생성자 패턴 : 안정성
public class TelescopingUser {
    private int tall;           // 필수
    private int weight;         // 필수
    private int age;            // 선택
    private int phoneNumber;    // 선택


    public TelescopingUser(int tall, int weight) {
        this.tall = tall;
        this.weight = weight;
    }

    public TelescopingUser(int tall, int weight, int age) {
        this.tall = tall;
        this.weight = weight;
        this.age = age;
    }

    public TelescopingUser(int tall, int weight, int age, int phoneNumber) {
        this.tall = tall;
        this.weight = weight;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }

    public static void main(String[] args) {
        TelescopingUser telescopingUserA = new TelescopingUser(200, 100, 30, 99999999);
        TelescopingUser telescopingUserB = new TelescopingUser(190, 100, 20);
        TelescopingUser telescopingUserC = new TelescopingUser(180, 25);
    }
}
