package spring.aop.after;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AppRunner {

    public static void main(String[] args) {
        ApplicationContext ac = new AnnotationConfigApplicationContext(Config.class, PerformanceAspect.class);
        EventService eventService = ac.getBean("eventService", EventService.class);

        eventService.createEvent();
        eventService.publishEvent();
        eventService.deleteEvent();

    }
}
