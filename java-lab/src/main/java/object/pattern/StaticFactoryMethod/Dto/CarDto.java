package object.pattern.StaticFactoryMethod.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
@AllArgsConstructor
public class CarDto {
    private String name;

    public static CarDto toDto(Car car) {
        return new CarDto(car.getName());
    }
}
