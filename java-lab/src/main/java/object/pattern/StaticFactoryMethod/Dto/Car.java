package object.pattern.StaticFactoryMethod.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Car {
    String name;
    int price;
    String maker;
}
