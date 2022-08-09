import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  margin: 14px 0 30px 0;
`;
const ButtonStyle = styled.button`
  background-color: white;
  border: 1px solid;
  border-radius: 10px;
  border-color: black;
  padding: 5px;
  font-weight: bold;
  box-shadow: 1px 2px 2px 2px rgb(0 0 0 / 25%);
  cursor: pointer;
`;

const MoreButton = ({ isVisible, setOffset, children }) => {
  return (
    <ButtonContainer>
      <ButtonStyle
        data-testid="more-button"
        style={{ display: isVisible ? '' : 'none' }}
        onClick={() => setOffset((offset) => offset + 1)}>
        {children}
      </ButtonStyle>
    </ButtonContainer>
  );
};

export default MoreButton;
