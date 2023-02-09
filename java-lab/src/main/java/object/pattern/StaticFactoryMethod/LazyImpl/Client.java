package object.pattern.StaticFactoryMethod.LazyImpl;

import java.util.List;


public class Client {

    public static void main(String[] args) {
        List<SoldBooks> res =  BookStore.getSoldBooks();

        // 구현 전
        System.out.println(res);  // []

        // 구현 후, 인터페이스에 구현체 주입
        SoldBooks soldBooks = new SoldBooksImpl();
        res.add(soldBooks);

        System.out.println(res.get(0));  // object.pattern.StaticFactoryMethod.LazyImpl.SoldBooksImpl@27f674d
        System.out.println(res.get(0).getBooks());  // [A, B]
    }
}
