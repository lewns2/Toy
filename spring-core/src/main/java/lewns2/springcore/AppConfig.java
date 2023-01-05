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

public class AppConfig {

    private MemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }

    private DiscountPolicy discountPolicy() {
        return new RateDiscountPolicy();
    }

    public MemberService memberService() {
        return new MemberServiceImpl(memberRepository());
    }

    public OrderService orderService() {
        return new OrderServiceImpl(memberRepository(), discountPolicy());
    }
}
