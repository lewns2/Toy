package spring.aop.before;

public class EventServiceImpl implements EventService{
    @Override
    public void createEvent() {
        System.out.println("Created an event");
    }

    @Override
    public void publishEvent() {
        System.out.println("Published an event");
    }

    @Override
    public void deleteEvent() {
        System.out.println("Deleted an event");
    }
}
