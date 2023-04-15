package spring.aop.after;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
public class Config {

    @Bean
    public EventService eventService() {
        return new SimpleEventService();
    }

    @Bean
    public PerformanceAspect performanceAspect() {
        return new PerformanceAspect();
    }
}
