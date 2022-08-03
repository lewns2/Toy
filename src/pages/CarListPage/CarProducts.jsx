import { useEffect, useState } from 'react';

// 스타일 컴포넌트
import Card from '../../components/Card';

// 기능 함수
import { handleComponentType } from './CarProducts/handleComponentType';
import makeCarouselData from './CarProducts/makeCarouselData';

export const Products = (props) => {
  const [infos, setInfos] = useState([]);
  const [type, setType] = useState();

  /* 공통 컴포넌트로 사용하면서 특가 차량과 모든 차량을 보여주는 것에 대한 분기 */
  useEffect(() => {
    // 컴포넌트 타입 결정
    const componentType = handleComponentType(props);
    setType(componentType);

    // 타입에 따른 함수 호출 : 차량 리스트일 경우, 5개씩 잘라서 보여준다. / 캐로셀의 경우, 캐로셀을 위한 데이터로 만들어준다.
    if (type === 'allList') {
      setInfos(props.items.slice(0, props.offset * 5));
    } else if (type === 'specialPriceList') {
      const result = makeCarouselData(props, setInfos);
      return result;
    }
  }, [props]);

  /* 모든 차량 리스트에 대해서만, 모달에 대한 권한을 가진다. */
  const handleOpenModal = (id) => {
    if (type === 'allList') {
      props.setShowModal(1);
      props.setCarId(id);
    }
  };

  return (
    <>
      {infos &&
        infos.map((item, idx) => (
          <div
            key={idx}
            data-testid={type === 'allList' ? 'car-list-area' : ''}
            style={{ width: type === 'specialPriceList' ? `${props.oneWidth}px` : '' }}
            onClick={() => {
              handleOpenModal(item.carClassId);
            }}>
            <Card
              type={props.type}
              image={item.image}
              className={item.carClassName}
              carTypeTags={item.carTypeTags}
              price={item.price}
              discountPercent={item.discountPercent}
              year={item.year}
              drivingDistance={item.drivingDistance}
              regionGroups={item.regionGroups}></Card>
          </div>
        ))}
    </>
  );
};

export default Products;
