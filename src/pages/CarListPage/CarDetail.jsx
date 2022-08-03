import { useState, useEffect } from 'react';
import axios from 'axios';
import ModalContent from '../../components/ModalContent';

const url = `http://localhost:8080/carClasses`;

export const CarDetail = (props) => {
  const [detailInfo, setDetailInfo] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [prevSelect, setPrevSelect] = useState();

  // 이전에 선택했던 항목 기록
  useEffect(() => {
    setPrevSelect(props.carId);
  }, [props.carId]);

  useEffect(() => {
    // 모달이 닫힌 경우, 로딩 여부 초기화 (성공 여부를 초기화하게 되면 이전에 성공,실패했는 지를 알 수 없으므로 초기화하지 않는다.)
    if (!props.showModal) {
      setIsPending(false);
    }
    // 이전에 선택했던 항목과 똑같은 항목을 선택한 경우, 가지고 있던 데이터를 보여준다. -> 로딩의 절차만 없어짐 : 이전 결과 성공인 경우 가진 데이터 렌더링, 실패인 경우(isSucess가 실패로 되어 있음) 에러 출력
    else if (props.showModal && prevSelect === props.carId) {
      setIsPending(true);
    }
    // 이전 선택과 다른 항목 선택 시, 요청을 통해 데이터를 받아온다.
    else if (props.showModal && prevSelect !== props.carId) {
      loadDetailInfo();
    }
  }, [props.showModal]);

  const loadDetailInfo = async () => {
    try {
      let res = await axios.get(`${url}/${props.carId}`);
      setDetailInfo(res.data);
      setIsPending(true);
      setIsSuccess(true);
    } catch (err) {
      setIsPending(true);
      setIsSuccess(false);
    }
  };

  return (
    <>
      {isPending ? (
        isSuccess ? (
          <div>
            {detailInfo &&
              detailInfo.map((item, idx) => (
                <div key={idx}>
                  <ModalContent
                    carImage={item.carImage}
                    carClassName={item.carClassName}
                    maker={item.maker}
                    carModel={item.carModel}
                    fuel={item.fuel}
                    gearbox={item.gearbox}
                    capacity={item.capacity}
                    safetyOption={item.safetyOption}
                    additionalOption={item.additionalOption}></ModalContent>
                </div>
              ))}
          </div>
        ) : (
          <div>
            <h1>Error...</h1>
          </div>
        )
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
};

export default CarDetail;
