import styled from '@emotion/styled';

const Top4 = styled.div`
  font-size: 16px;
  word-break: keep-all;
  font-size: ${(props) => (props.type === 'specialPriceList' ? '14px' : '')};
`;

export default Top4;
