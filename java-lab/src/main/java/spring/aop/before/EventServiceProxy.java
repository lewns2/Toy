package spring.aop.before;

public class EventServiceProxy implements EventService{

    private final EventServiceImpl baseSimpleEventService = new EventServiceImpl();

    @Override
    public void createEvent() {
        long beginTime = System.currentTimeMillis();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        baseSimpleEventService.createEvent();
        System.out.println(System.currentTimeMillis() - beginTime);
    }

    @Override
    public void publishEvent() {
        long beginTime = System.currentTimeMillis();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        baseSimpleEventService.publishEvent();
        System.out.println(System.currentTimeMillis() - beginTime);
    }

    @Override
    public void deleteEvent() {
        baseSimpleEventService.deleteEvent();
    }
}
