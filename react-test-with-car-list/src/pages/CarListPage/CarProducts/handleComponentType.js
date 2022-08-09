export const handleComponentType = (props) => {
  if (props.type === 'allList') {
    return 'allList';
  } else if (props.type === 'specialPriceList') {
    return 'specialPriceList';
  }
};

export default handleComponentType;
