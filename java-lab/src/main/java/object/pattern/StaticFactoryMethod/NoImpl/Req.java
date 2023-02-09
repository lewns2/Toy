package object.pattern.StaticFactoryMethod.NoImpl;

import java.util.ArrayList;
import java.util.List;

public class Req {

    public static void main(String[] args) {

        List<BookSeller> res = new ArrayList<>();
        System.out.println(res);

        System.out.println(BookStore.getSellers());
    }
}
