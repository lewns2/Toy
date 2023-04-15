package spring.aop.after;

import org.springframework.stereotype.Component;

@Component
public class SimpleEventService implements EventService{

    @Loggable
    @Override
    public void createEvent() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("created");
    }

    @Loggable
    @Override
    public void publishEvent() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("publish");
    }

    @Override
    public void deleteEvent() {
        System.out.println("deleted");
    }
}
