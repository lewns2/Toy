package lewns2.springcore;

import lewns2.springcore.discount.DiscountPolicy;
import lewns2.springcore.discount.FixDiscountPolicy;
import lewns2.springcore.discount.RateDiscountPolicy;
import lewns2.springcore.member.MemberRepository;
import lewns2.springcore.member.MemberService;
import lewns2.springcore.member.MemberServiceImpl;
import lewns2.springcore.member.MemoryMemberRepository;
import lewns2.springcore.order.OrderService;
import lewns2.springcore.order.OrderServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public MemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }

    @Bean
    public DiscountPolicy discountPolicy() {
        return new RateDiscountPolicy();
    }

    @Bean
    public MemberService memberService() {
        return new MemberServiceImpl(memberRepository());
    }

    @Bean
    public OrderService orderService() {
        return new OrderServiceImpl(memberRepository(), discountPolicy());
    }
}
