/* 캐로셀 전체 길이, 한 상품의 길이, 초기 시작 위치 설정 */

export function handleCarouselInitSetting(
  carouselRef,
  setCarouselWidth,
  setOneWidth,
  setCarouselCurrentPosition,
) {
  setCarouselWidth(carouselRef.current.clientWidth);
  setOneWidth(carouselRef.current.clientWidth / 2);
  setCarouselCurrentPosition(carouselRef.current.clientWidth / 4);
}

export default handleCarouselInitSetting;
