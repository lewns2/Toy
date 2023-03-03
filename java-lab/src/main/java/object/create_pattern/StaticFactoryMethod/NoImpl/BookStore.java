package object.create_pattern.StaticFactoryMethod.NoImpl;


import java.util.ArrayList;
import java.util.List;

public class BookStore {

    public List<BookSeller> res = new ArrayList<>();

    public static List<BookSeller> getSellers() {
        return new ArrayList<>();
    }

//    public static void main(String[] args) {
//        System.out.println(res);
//        System.out.println(BookStore.getSellers());
//    }


}
