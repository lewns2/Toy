import { useState, useEffect, useRef } from 'react';

// 하위 컴포넌트
import CarProducts from './CarProducts';
import CarDetail from './CarDetail';

// 스타일 컴포넌트
import Container from '../../components/Container';
import Top from '../../components/Top';
import Top2 from '../../components/Top2';
import Carousel from '../../components/Carousel';
import AllVehicles from '../../components/AllVehicles';
import Modal from '../../components/Modal';
import MoreButton from '../../components/MoreButton';

// 기능 함수
import handleOffset from './CarList/MoreButton/handleOffset';
import handleCarouselInitSetting from './CarList/Carousel/handleCarouselInitSetting';
import handleCarouselWork from './CarList/Carousel/handleCarouselWork';
import handlePreventScroll from './CarList/Modal/handlePreventScroll';
import loadCarList from './CarList/loadCarList';

const CarListPage = () => {
  /* 차량 리스트 데이터 */
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  /* 캐로셀 데이터 */
  const carouselRef = useRef();
  const [carouselCurrentPosition, setCarouselCurrentPosition] = useState(null);
  const [loop, setLoop] = useState(0);
  const [carouselSize, setCarouselSize] = useState(null);
  const [carouselWidth, setCarouselWidth] = useState(null);
  const [oneWidth, setOneWidth] = useState(null);

  /* 모달 데이터 */
  const [showModal, setShowModal] = useState(0);
  const [carId, setCarId] = useState(0);

  /* 차량 리스트 : 페이지 렌더링 시, 최초 요청 */
  useEffect(() => {
    loadCarList(setItems, setMaxPage);
  }, []);

  /* 캐로셀 : 캐로셀 전체 길이, 한 상품의 길이, 초기 시작 위치 설정 */
  useEffect(() => {
    handleCarouselInitSetting(
      carouselRef,
      setCarouselWidth,
      setOneWidth,
      setCarouselCurrentPosition,
    );
  }, [carouselWidth, carouselSize]);

  /* 캐로셀 : 특가 차량 무한 캐로셀 로직 */
  useEffect(() => {
    handleCarouselWork(
      carouselRef,
      carouselSize,
      carouselCurrentPosition,
      setCarouselCurrentPosition,
      loop,
      setLoop,
    );
  }, [carouselCurrentPosition, carouselSize]);

  /* 모달 : Dim 영역 스크롤 방지 */
  useEffect(() => {
    handlePreventScroll(showModal);
  }, [showModal]);

  /* 더보기 버튼 : 보여줄 항목 길이 결정 */
  useEffect(() => {
    handleOffset(offset, maxPage, setIsVisible);
  }, [offset, maxPage]);

  return (
    <Container>
      <Top data-testid="page-title">차량 리스트</Top>

      {/* 차량 캐로셀 */}
      <Top2>특가 차량</Top2>
      <Carousel carouselRef={carouselRef}>
        <CarProducts
          items={items}
          offset={offset}
          type="specialPriceList"
          oneWidth={oneWidth}
          setCarouselSize={setCarouselSize}
          carouselWidth={carouselWidth}
        />
      </Carousel>

      {/* 차량 리스트 */}
      <Top2>모든 차량</Top2>
      <AllVehicles>
        <CarProducts
          items={items}
          offset={offset}
          type="allList"
          setShowModal={setShowModal}
          setCarId={setCarId}
        />
      </AllVehicles>

      {/* 차량 상세 모달 */}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <CarDetail carId={carId} showModal={showModal} />
      </Modal>

      {/* 더보기 버튼 */}
      <MoreButton isVisible={isVisible} setOffset={setOffset}>
        더보기
      </MoreButton>
    </Container>
  );
};
export default CarListPage;
