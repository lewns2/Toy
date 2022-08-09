import styled from '@emotion/styled';
import Top3 from './Top3';
import Top4 from './Top4';

const publicUrl = process.env.PUBLIC_URL;

const Outline = styled.div`
  border: 1.5px solid;
  border-radius: 5%;
  background-color: white;
  border-color: white;
  margin: 20px 10px 20px 10px;

  padding: 15px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.25);

  cursor: ${(props) => (props.type === 'allList' ? 'pointer' : '')};
`;

const ImgContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: auto;

  object-fit: cover;
`;

const Wrapper = styled.div`
  padding: 10px 20px 10px 20px;
  white-space: nowrap;
  padding: ${(props) =>
    props.type === 'specialPriceList' ? '0px 10px 0px 10px' : '20px 10px 20px 10px'};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Tags = styled.div`
  display: flex;
`;

const TagId = styled.div`
  margin-left: 10px;
  background-color: #eee;
  font-weight: bolder;
  padding: 4px;
  border-radius: 4px;
`;

const Price = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
`;

const Percent = styled.div`
  color: rgba(0, 184, 255, 1);
  font-size: 18px;
  font-weight: bolder;
  font-size: ${(props) => (props.type === 'specialPriceList' ? '16px' : '')};
`;

const BottomInfo = styled.div`
  display: flex;
`;

const OverBottomInfo = styled.div`
  font-size: 12px;
  display: block;
  text-overflow: ${(props) => (props.isOver ? 'ellipsis' : '')};
  overflow: ${(props) => (props.isOver ? 'hidden' : '')};
`;

/* 가격 : 10자리에서 반올림 후, 3자리마다 콤마로 구분 */
const setPrice = (olderPrice) => {
  olderPrice = Math.round(olderPrice / 10) * 10;
  let newPrice = olderPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return String(newPrice);
};

/* 거리 : 1000 이상은 천, 10000 이상은 만으로 표기 / 테스트를 위해 String으로 형변환 */
const setDistance = (olderDistance) => {
  if (olderDistance >= 10000) {
    olderDistance /= 10000;

    return String(olderDistance + '만');
  } else if (olderDistance < 10000 && olderDistance >= 1000) {
    olderDistance /= 1000;

    return String(olderDistance + '천');
  }

  return String(olderDistance);
};

/* 지역 : '/' -> ', ' 치환 &&  ',' ->  ', '로 치환 */
const setRegionGroups = (olderRegion) => {
  let newRegion = olderRegion.toString().replace(/,/gi, ', ');
  return newRegion;
};

// 빠른 대여, 인기, 특가 등 종류에 따라 다른 디자인을 하기 위해 정규 표현식 대신 for문을 통해 작성
const setTags = (olderTags) => {
  const newTags = [];
  for (let i = 0; i < olderTags.length; i++) {
    newTags.push(
      <TagId id={olderTags[i]} key={i}>
        {olderTags[i]}
      </TagId>,
    );
  }
  return newTags;
};

// 하단 표기 정보 길이를 찾기 위해 String 형 변환 => 차량 캐러셀이면서 길이가 20이 넘는다면 '...' 스타일 적용
const setBottomInfomations = (type, year, dist, region) => {
  const newBottomInfomations = year + '년 | ' + dist + 'km | ' + region;
  const infoLength = newBottomInfomations.length;
  var isOver = 0;
  if (infoLength > 20) {
    isOver = 1;
  } else {
    isOver = 0;
  }

  if (type === 'specialPriceList') {
    return <OverBottomInfo isOver={isOver}>{newBottomInfomations}</OverBottomInfo>;
  } else {
    return <Top4>{newBottomInfomations}</Top4>;
  }
};

const Card = ({
  type,
  image,
  className,
  carTypeTags,
  price,
  discountPercent,
  year,
  drivingDistance,
  regionGroups,
}) => {
  return (
    <Outline type={type}>
      <ImgContainer>
        {/* <Img loading={type === 'allList' ? 'lazy' : ''} src={image} alt={`${className} 차량`} /> */}
        <Img
          loading={type === 'allList' ? 'lazy' : ''}
          src={`${publicUrl}/${image}`}
          alt={`${className} 차량`}
        />
      </ImgContainer>
      <Wrapper type={type}>
        <Title>
          <Top3 type={type}>{className}</Top3>
          {type === 'specialPriceList' ? '' : <Tags>{setTags(carTypeTags)}</Tags>}
        </Title>

        <Price>
          <Top4 data-testid="price-text" type={type}>
            {setPrice(price)}원
          </Top4>
          &nbsp;
          {discountPercent === 0 ? (
            ''
          ) : (
            <Percent data-testid="discountPercent-text" type={type}>
              (-{discountPercent}%)
            </Percent>
          )}
        </Price>

        <BottomInfo>
          {setBottomInfomations(
            type,
            year,
            setDistance(drivingDistance),
            setRegionGroups(regionGroups),
          )}
        </BottomInfo>
      </Wrapper>
    </Outline>
  );
};

export default Card;
