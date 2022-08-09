import styled from '@emotion/styled';

const Dim = styled.div`
  overflow: hidden;
  position: fixed;

  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBlock = styled.div`
  overflow: auto;
  position: fixed;

  z-index: 9999;
  opacity: 1;
  max-width: 420px;
  width: 80%;
  height: 80%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  padding: 20px;
`;

const Close = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

/* 클릭 이벤트를 통해 자식의 갯수가 1일 경우, Dim 영역을 선택했다고 판단 
   영역 내부 클릭 시, Close(X)버튼과 내용들로 인해 수많은 자식들이 존재할 것이기 때문에 */
const handleClose = (e, setShowModal) => {
  if (e.target.children.length === 1) {
    setShowModal(0);
  }
};

/* showModal의 True/False(1/0)에 따라 모달의 표시 여부 */
const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <Dim
      data-testid="modal-container"
      style={{ display: showModal ? 'flex' : 'none' }}
      onClick={(e) => handleClose(e, setShowModal)}>
      <ModalBlock>
        <Close data-testid="close-modal-button" onClick={() => setShowModal(0)}>
          X
        </Close>
        {children}
      </ModalBlock>
    </Dim>
  );
};

export default Modal;
