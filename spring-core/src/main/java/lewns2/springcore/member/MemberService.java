package lewns2.springcore.member;

public interface MemberService {

    void join(Member member);

    Member findMember(Long memberId);
}
