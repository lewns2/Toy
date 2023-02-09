package object.pattern.StaticFactoryMethod.LazyImpl;

import java.util.ArrayList;
import java.util.List;

public class SoldBooksImpl implements SoldBooks{

    @Override
    public List<String> getBooks() {
        List<String> findBooks = new ArrayList<>();
        findBooks.add("A");
        findBooks.add("B");

        return findBooks;
    }
}
