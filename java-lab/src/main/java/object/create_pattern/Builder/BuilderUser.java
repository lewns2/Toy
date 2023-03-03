package object.create_pattern.Builder;

// 빌더 패턴 : 점층적 생성자 패턴의 안정성 + 자바빈즈 패턴의 가독성
public class BuilderUser {
    private int tall;           // 필수
    private int weight;         // 필수
    private int age;            // 선택
    private int phoneNumber;    // 선택


    // static class Builder와 mapping 한다.
    public BuilderUser(Builder builder) {
        this.tall = builder.tall;
        this.weight = builder.weight;
        this.age = builder.age;
        this.phoneNumber = builder.phoneNumber;
    }

    public static class Builder {
        private int tall;
        private int weight;
        private int age;
        private int phoneNumber;

        // 필수값을 포함하는 생성자
        public Builder(int tall, int weight) {
            this.tall = tall;
            this.weight = weight;
        }

        // 선택 값들에 대한 내부 메서드 정의 : setter 역할
        public Builder age(int age) {
            this.age = age;
            return this;
        }

        public Builder phoneNumber(int phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        public BuilderUser build() {
            return new BuilderUser(this);
        }
    }

    public static void main(String[] args) {
        BuilderUser user = new Builder(200, 100)
                .age(30)
                .phoneNumber(9999999)
                .build();
    }

}
