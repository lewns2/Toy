# 생성자에 매개변수가 많다면 빌더를 고려하라

## 빌더 패턴이란?

빌더 패턴은 객체의 생성을 정의하는 클래스와 표현하는 방법을 정의하는 클래스를 별도로 분리한 패턴을 말한다. <br>
이를 통해 서로 다른 표현일지라도 생성할 수 있는 절차를 제공하는 패턴이다. <br>
<br>

정적 팩토리 메서드와 생성자 방식은 **"선택적 매개변수"**가 많을 때 적절하게 대응하기 어렵다는 단점이 있다. <br>
선택적 매개변수란 있어도, 없어도 되는 필드를 의미한다. <br>

## 선택적 매개변수를 대응하는 방법들

### 점층적 생성자 패턴 활용

필수 매개변수를 받는 생성자 1개, 선택 매개변수를 하나씩 늘려가며 모든 생성자를 만드는 패턴을 말한다. <br>
무식하지만 가장 확실한 방법이다. <br>

````Java
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

```Java
TelescopingUser telescopingUserA = new TelescopingUser(200, 100, 30, 99999999);
````

하지만, 매개 변수가 점차 늘어날수록 코드를 작성하는 것뿐 아니라 읽기 조차 어렵다는 단점이 존재한다. <br>
각각의 매개 변수의 값이 의미하는 바를 알아차리기 힘들뿐 아니라, 매번 갯수와 순서를 통해 주의 깊게보아 의미를 유추할 수 있다. <br>

<br>

### 자바빈즈 패턴 활용

자바빈즈 패턴은 단순한 Setter 패턴을 말한다. <br>
즉, 기본 생성자에 값들을 추가하는 방식으로 생성자를 생성한다. <br>

```Java
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
```

위 코드를 사용하면 클라이언트는 자신이 원하는 필드만을 골라 객체를 생성할 수 있다.<br>
또, 점층적 생성자 패턴이 가지는 가독성의 문제도 한결 좋아졌다. <br>

하지만 하나의 객체를 만들기 위해, 메서드를 여러번 호출해야하며 객체가 생성 전까지 일관성이 무너진 상태가 된다. <br>
이러한 패턴은 클래스를 불변으로 만들 수 없어 안정적이지 않다. <br>
즉, Setter가 가지는 모든 단점이 그대로 드러난다. <br>
JS 진영에는 `freeze` 메서드를 통해 이를 제공하지만 자바에서는 잘 사용하지 않는다고 한다. <br>

## 빌더 패턴

생성자 패턴의 안정성과 자바빈즈의 가독성의 장점을 합혀진 패턴이 바로 빌더 패턴이다. <br>

별도의 Builder 클래스를 만들어 필수 값에 대해서는 생성자를 통해, 선택적인 값들에 대해서는 메서드를 통해 값을 입력받은 후 build() 메서드를 통해 하나의 인스턴스를 리턴하는 방식이다. <br>

```Java
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
```

정적 클래스를 통해 Builder를 만들어 생성에 필요한 것(필수 매개변수, 선택적 매개변수)을 초기화한 뒤, 클래스와 매핑하여 객체를 생성한다. <br>
(보통은 직접 Builder를 만들지 않고, 롬복의 @Builder 어노테이션을 사용한다.) <br>

이를 통해 불변을 보장할 수 있고, 가독성도 훨씬 좋아진다. <br>
