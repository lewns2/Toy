package lewns2.springcore.autowired;

import lewns2.springcore.AutoAppConfig;
import lewns2.springcore.discount.DiscountPolicy;
import lewns2.springcore.member.Grade;
import lewns2.springcore.member.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.List;
import java.util.Map;

public class AllBeanTest {

    @Test
    void findAllBean() {
        ApplicationContext ac = new AnnotationConfigApplicationContext(AutoAppConfig.class, DiscountService.class);

        DiscountService discountService = ac.getBean(DiscountService.class);
        Member member = new Member(1L, "userA", Grade.VIP);
        int discountPrice = discountService.discount(member, 10000, "fixDiscountPolicy");

        Assertions.assertThat(discountService).isInstanceOf(DiscountService.class);
        Assertions.assertThat(discountPrice).isEqualTo(1000);

        int rateDiscountPrice = discountService.discount(member, 20000, "rateDiscountPolicy");
        Assertions.assertThat(rateDiscountPrice).isEqualTo(2000);
    }

    // 스프링 빈 등록
    static class DiscountService {
        private final Map<String, DiscountPolicy> policyMap;
        private final List<DiscountPolicy> policyList;

        // 생성자
        @Autowired
        public DiscountService(Map<String, DiscountPolicy> policyMap, List<DiscountPolicy> policyList) {
            this.policyMap = policyMap;
            this.policyList = policyList;

            //
            System.out.println("policyMap = " + policyMap);
            System.out.println("policyList = " + policyList);

            /* 결과 : fix, rate 정책이 모두 조회
            policyMap = {fixDiscountPolicy=lewns2.springcore.discount.FixDiscountPolicy@1d0d6318, rateDiscountPolicy=lewns2.springcore.discount.RateDiscountPolicy@4bc28c33}
            policyList = [lewns2.springcore.discount.FixDiscountPolicy@1d0d6318, lewns2.springcore.discount.RateDiscountPolicy@4bc28c33]
            */
        }

        // 할인 선택 후, 할인 가격 리턴하는 메서드
        public int discount(Member member, int price, String discountCode) {
            DiscountPolicy discountPolicy =  policyMap.get(discountCode);
            return discountPolicy.discount(member, price);
        }
    }
}
