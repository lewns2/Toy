package lewns2.springcore;

import lewns2.springcore.discount.FixDiscountPolicy;
import lewns2.springcore.member.MemberService;
import lewns2.springcore.member.MemberServiceImpl;
import lewns2.springcore.member.MemoryMemberRepository;
import lewns2.springcore.order.OrderService;
import lewns2.springcore.order.OrderServiceImpl;

public class AppConfig {

    public MemberService memberService() {
        return new MemberServiceImpl(new MemoryMemberRepository());
    }

    public OrderService orderService() {
        return new OrderServiceImpl(new MemoryMemberRepository(), new FixDiscountPolicy());
    }
}
