/* Dim 영역의 스크롤을 방지하기 위해 Body에 overflow 속성 변경 */

export function handlePreventScroll(showModal) {
  const body = document.getElementsByTagName('body')[0];
  if (showModal) {
    body.style.overflow = 'hidden';
  } else {
    body.style = '';
  }
}

export default handlePreventScroll;
