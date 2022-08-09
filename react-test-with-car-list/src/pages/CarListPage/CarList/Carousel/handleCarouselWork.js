/* 특가 차량 무한 캐로셀 로직 : ( 절반 - 한개 - 절반 ) 
  - 1개의 길이 : 캐로셀 전체 길이 / 2 (carouselRef.current.clientWidth / 2)
  - 초기 시작 위치 : (carouselRef.current.clientWidth / 4)
  - 이동 거리 : 1개의 길이 만큼 이동, translate(-${carouselCurrentPosition}px)
  - 무한 스크롤을 위해 리스트 추가 한 뒤, 슬라이더 바꿔치기 (마지막 슬라이더 -> 첫번째 슬라이더) : transition-timing-function: step-end 속성을 활용 */

export function handleCarouselWork(
  carouselRef,
  carouselSize,
  carouselCurrentPosition,
  setCarouselCurrentPosition,
  loop,
  setLoop,
) {
  // 캐로셀 전체 길이를 벗어난 경우, 일시적으로 이동 효과를 제거한 뒤, 현재 위치를 시작 위치로 변경.
  if (typeof carouselCurrentPosition == 'undefined') {
    carouselRef.current.style =
      'transition-timing-function: step-end; transform : translate(-105px)';
    setCarouselCurrentPosition(carouselRef.current.clientWidth / 4);
  }
  // caroulseLoop 함수에 의해, 3초마다 상품 하나의 길이 만큼 -x로 이동한다.
  else {
    carouselRef.current.style = `transform : translate(-${carouselCurrentPosition}px)`;
  }

  // 이동해야할 위치를 계산한다.
  const caroulselLoop = setTimeout(() => {
    setCarouselCurrentPosition((prev) => {
      if (prev <= (carouselRef.current.clientWidth / 2) * carouselSize) {
        return prev + carouselRef.current.clientWidth / 2;
      } else return;
    });
  }, 3000);

  setLoop(caroulselLoop);
  return clearTimeout(loop);
}

export default handleCarouselWork;
