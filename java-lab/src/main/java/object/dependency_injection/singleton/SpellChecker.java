package object.dependency_injection.singleton;

import object.dependency_injection.domain.KoreaDictionary;
import object.dependency_injection.domain.Lexion;

public class SpellChecker {

    private final Lexion dictionary = new KoreaDictionary();

    private SpellChecker() {};

    public static SpellChecker INSTANCE = new SpellChecker();

    public static boolean isValid(String word) {
        // TODO : 유효성 검사
        return true;
    }
}

/*
 * 사용법 : SpellChecker.INSTANCE.isValid("word");
 * */