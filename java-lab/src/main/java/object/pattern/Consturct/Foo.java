package object.pattern.Consturct;

public class Foo {

    String name;

    // 생성자
    public Foo(String name) {
        this.name = name;
    }

    // 생성자를 통한 인스턴스 생성
    public static void main(String[] args) {
        Foo foo = new Foo("dh");
    }
}

/*
인스턴스 생성 방법
* 1. 기본 생성자(인자가 없는)로 만들고 데이터 집어 넣기
* 2. 파라미터를 가지는 생성자로 만들기
*/