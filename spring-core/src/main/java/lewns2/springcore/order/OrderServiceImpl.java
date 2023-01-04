package lewns2.springcore.order;

import lewns2.springcore.discount.DiscountPolicy;
import lewns2.springcore.discount.FixDiscountPolicy;
import lewns2.springcore.member.Member;
import lewns2.springcore.member.MemberRepository;
import lewns2.springcore.member.MemoryMemberRepository;

public class OrderServiceImpl implements OrderService{

    // 회원 찾기
    private final MemberRepository memberRepository = new MemoryMemberRepository();

    // 할인 정책 찾기
    private final DiscountPolicy discountPolicy = new FixDiscountPolicy();

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {
        Member member = memberRepository.findById(memberId);
        int discountPrice = discountPolicy.discount(member, itemPrice);

        return new Order(memberId, itemName, itemPrice, discountPrice);
    }
}
