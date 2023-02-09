package object.pattern.StaticFactoryMethod.Dto;

public class Client {

    public static void main(String[] args) {

        Car car = new Car("캐스퍼", 0, "현대");

        CarDto carDto = CarDto.toDto(car);

        System.out.println(carDto);
    }
}
