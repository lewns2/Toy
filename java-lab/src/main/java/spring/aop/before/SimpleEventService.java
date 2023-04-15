//package spring.aop.before;
//
///*
//TODO: 메서드 실행 시간 측정
//* */
//public class SimpleEventService implements EventService{
//    @Override
//    public void createEvent() {
//        long beginTime = System.currentTimeMillis();
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        System.out.println("Created an event");
//        System.out.println(System.currentTimeMillis() - beginTime);
//    }
//
//    @Override
//    public void publishEvent() {
//        long beginTime = System.currentTimeMillis();
//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        System.out.println("Published an event");
//        System.out.println(System.currentTimeMillis() - beginTime);
//    }
//
//    @Override
//    public void deleteEvent() {
//        System.out.println("Deleted an event");
//    }
//}
