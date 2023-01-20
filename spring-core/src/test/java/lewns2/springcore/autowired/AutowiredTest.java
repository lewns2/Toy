package lewns2.springcore.autowired;

import lewns2.springcore.member.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.lang.Nullable;

import java.util.Optional;

public class AutowiredTest {

    @Test
    void AutowiredOption() {
        // 임의의 스프링 빈 등록
        ApplicationContext ac = new AnnotationConfigApplicationContext(TestBean.class);

    }

    // 임의의 스프링 빈 만들기
    static class TestBean {

        // 1. @Autowired(required=false)
        @Autowired(required = false)
        public void setNoBean1(Member noBean1) {
            System.out.println("noBean1 = " + noBean1);
        }

        // 결과 : 의존관계가 없어 호출되지 않는다.

        // 2. Nullable
        @Autowired
        public void setNoBean2(@Nullable Member noBean2) {
            System.out.println("noBean2 = " + noBean2);
        }

        // 결과 : noBean2 = null 호출은 되지만 null로 들어온다.


        // 3. Optional<> - 자바 8
        @Autowired
        public void setNoBean3(Optional<Member> noBean3) {
            System.out.println("noBean3 = " + noBean3);
        }

        // 결과 : noBean3 = Optional.empty 값이 없어 Optional.empty를 반환
    }

}
