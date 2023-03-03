package object.create_pattern.Builder;

// 자바빈즈 패턴 : 가독성
public class JavaBeansUser {
    private int tall;           // 필수
    private int weight;         // 필수
    private int age;            // 선택
    private int phoneNumber;    // 선택

    public JavaBeansUser() {};

    public void setTall(final int tall) { this.tall = tall; }

    public void setWeight(final int weight) { this.weight = weight; }

    public void setAge(final int age) { this.age = age; }

    public void setPhoneNumber(int phoneNumber) { this.phoneNumber = phoneNumber; }


    public static void main(String[] args) {
        JavaBeansUser user = new JavaBeansUser();
        user.setTall(200);
        user.setWeight(100);
        user.setAge(20);
    }
}
