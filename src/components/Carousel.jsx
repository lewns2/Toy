import styled from '@emotion/styled';

const CarouselContainer = styled.div`
  transition-duration: 0.5s;
`;

const CarouselInner = styled.div`
  display: flex;
`;

const NonScroll = styled.div`
  overflow: hidden;
`;

const Carousel = ({ carouselRef, children }) => {
  return (
    <NonScroll>
      <CarouselContainer ref={carouselRef}>
        <CarouselInner>{children}</CarouselInner>
      </CarouselContainer>
    </NonScroll>
  );
};

export default Carousel;
