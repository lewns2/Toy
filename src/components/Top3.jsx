import styled from '@emotion/styled';

const Top3 = styled.div`
  font-size: 20px;
  font-weight: bold;
  word-break: keep-all;
  font-size: ${(props) => (props.type === 'specialPriceList' ? '16px' : '')};
`;

export default Top3;
