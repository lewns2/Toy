import styled from '@emotion/styled';

const ImgContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: auto;

  object-fit: cover;
`;

const DescribeBlock = styled.div`
  display: grid;
  justify-items: start;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 20px 0;
`;

const Detail = styled.div`
  font-size: 16px;
  margin: 5px 0 5px 0;
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0 15px 0;
`;

const setSafetyOption = (safetyOption) => {
  const safetyOptionList = [];
  for (let i = 0; i < safetyOption.length; i++) {
    safetyOptionList.push(<div key={i}> - {safetyOption[i]}</div>);
  }
  return safetyOptionList;
};

const setAdditionalOption = (additionalOption) => {
  const additionalOptionList = [];
  for (let i = 0; i < additionalOption.length; i++) {
    additionalOptionList.push(<div key={i}> - {additionalOption[i]}</div>);
  }
  return additionalOptionList;
};

const ModalContent = ({
  carImage,
  carClassName,
  maker,
  carModel,
  fuel,
  gearbox,
  capacity,
  safetyOption,
  additionalOption,
}) => {
  return (
    <>
      <ImgContainer>
        <Img src={carImage} alt={`${carClassName} 차량`} />
      </ImgContainer>
      <DescribeBlock>
        <Title>{carClassName}</Title>
        <Detail>제조사 : {maker}</Detail>
        <Detail>분류 : {carModel}</Detail>
        <Detail>연료 : {fuel}</Detail>
        <Detail>변속방식 : {gearbox}</Detail>
        <Detail>승차정원 : {capacity}</Detail>
        <SubTitle>안전 옵션</SubTitle>
        {setSafetyOption(safetyOption)}
        <SubTitle>편의 옵션</SubTitle>
        {setAdditionalOption(additionalOption)}
      </DescribeBlock>
    </>
  );
};

export default ModalContent;
