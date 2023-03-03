package object.create_pattern.StaticFactoryMethod.LazyImpl;

import java.util.ArrayList;
import java.util.List;

public class BookStore {

    // 인터페이스 반환 => 인터페이스의 구현체를 반환
    public static List<SoldBooks> getSoldBooks() {
        return new ArrayList<>();
    }

}
