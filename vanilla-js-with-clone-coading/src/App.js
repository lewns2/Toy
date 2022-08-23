import SearchInput from "./components/SearchInput";

/* 함수형 */
// export default function App({ $target }) {
//   new SearchInput({ $target, initailState: "" });
// }

/* Class형 */
export default class App {
  constructor() {
    new SearchInput();
  }
}
