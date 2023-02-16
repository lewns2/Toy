const useState = (initValue) => {
  let currentState = initValue;

  const state = () => currentState; // 함수

  const setState = (newValue) => {
    currentState = newValue;
  };

  return [state, setState];
};

const [num, setNum] = useState(10);
console.log(num()); // 10
setNum(100);
console.log(num()); // 100
