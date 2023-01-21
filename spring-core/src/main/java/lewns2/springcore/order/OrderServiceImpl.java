package lewns2.springcore.order;

import lewns2.springcore.annotation.MainDiscountPolicy;
import lewns2.springcore.discount.DiscountPolicy;
import lewns2.springcore.member.Member;
import lewns2.springcore.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class OrderServiceImpl implements OrderService{

    // 회원 찾기
    private final MemberRepository memberRepository;

    // 할인 정책 찾기
//    private final DiscountPolicy discountPolicy = new FixDiscountPolicy(); // DIP 위반 : 추상(인터페이스)에만 의존하지 않고 구체(구현)에도 의존한다. OCP 위반 : 할인 정책 변경(기능 변경)에 따른 "OrderServieImpl" 코드 변경(클라이언트 코드에 영향)을 하므로
    private final DiscountPolicy discountPolicy; // DIP 해결, 다만 구현체가 없어 누군가 대신 생성하고 주입해야한다. => 이를 위해 공연 기획자(AppConfig)가 필요하다.

    // 생성자 주입을 위한 생성자
    @Autowired
    public OrderServiceImpl(MemberRepository memberRepository, @MainDiscountPolicy DiscountPolicy discountPolicy) {
        this.memberRepository = memberRepository;
        this.discountPolicy = discountPolicy;
    }

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {
        Member member = memberRepository.findById(memberId);
        int discountPrice = discountPolicy.discount(member, itemPrice);

        return new Order(memberId, itemName, itemPrice, discountPrice);
    }
}
