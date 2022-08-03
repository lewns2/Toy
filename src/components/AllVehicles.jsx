import styled from '@emotion/styled';

const AllVehiclesContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
`;

const Contents = styled.div`
  width: 100%;
`;

const AllVehicles = ({ children }) => {
  return (
    <AllVehiclesContainer>
      <Contents>{children}</Contents>
    </AllVehiclesContainer>
  );
};

export default AllVehicles;
