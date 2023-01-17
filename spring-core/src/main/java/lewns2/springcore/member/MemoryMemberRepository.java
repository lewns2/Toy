package lewns2.springcore.member;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;


@Component
public class MemoryMemberRepository implements MemberRepository{

    // 여러 군데서 동시 접근 시 동시성 문제 발생 가능성. => 이를 해결하기 위해선 ConcurrentHashMap 사용 권장.
    private static Map<Long, Member> store = new HashMap<>();

    @Override
    public void save(Member member) {
        store.put(member.getId(), member);
    }

    @Override
    public Member findById(Long memberId) {
        return store.get(memberId);
    }
}
