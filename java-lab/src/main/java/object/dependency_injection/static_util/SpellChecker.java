package object.dependency_injection.static_util;


import object.dependency_injection.domain.KoreaDictionary;
import object.dependency_injection.domain.Lexion;

public class SpellChecker {

    private static final Lexion dictionary = new KoreaDictionary();

    private SpellChecker() {} // 객체 생성 방지

    public static boolean isValid(String word) {
        // TODO : 유효성 검사
        return true;
    }
}

/*
* 사용법 : SpellChecker.isValid("word");
* */