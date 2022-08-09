export function handleOffset(offset, maxPage, setIsVisible) {
  if (offset === maxPage) {
    setIsVisible(false);
  }
}

export default handleOffset;
