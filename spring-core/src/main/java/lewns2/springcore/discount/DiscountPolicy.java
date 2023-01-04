package lewns2.springcore.discount;

import lewns2.springcore.member.Member;

public interface DiscountPolicy {

    // return 할인 대상 금액
    int discount(Member member, int price);
}
