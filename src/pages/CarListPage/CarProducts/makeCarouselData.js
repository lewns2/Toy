export function makeCarouselData(props, setInfos) {
  const CarouselData = [];
  props.items.map((item) => {
    var findSpecialPrice = item.carTypeTags.includes('특가');
    if (findSpecialPrice) {
      CarouselData.push(item);
    }
    setInfos(CarouselData);

    props.setCarouselSize(CarouselData.length);
  });
  const a = CarouselData[0];
  const b = CarouselData[1];
  const c = CarouselData[2];
  CarouselData.push(a);
  CarouselData.push(b);
  CarouselData.push(c);

  return CarouselData;
}

export default makeCarouselData;
