/* 페이지 렌더링 시, 최초 요청 */
import axios from 'axios';
const url = `http://localhost:8080/carClasses`;

export const loadCarList = async (setItems, setMaxPage) => {
  try {
    let res = await axios.get(url);
    setItems(res.data);
    setMaxPage(Math.ceil(res.data.length / 5));
  } catch (err) {
    alert(err);
  }
};

export default loadCarList;
