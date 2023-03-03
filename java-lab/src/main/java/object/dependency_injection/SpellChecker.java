package object.dependency_injection;

import object.dependency_injection.domain.Lexion;

public class SpellChecker {

    private final Lexion dictionary;

    public SpellChecker(Lexion dictionary) {
        this.dictionary = dictionary;
    }

    public static boolean isValid(String word) {
        // TODO : 유효성 검사
        return true;
    }
}
