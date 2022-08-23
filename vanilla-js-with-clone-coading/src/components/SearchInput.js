/* 함수형 */
// export default function SearchInput({ $target, initalState }) {
//   this.$element = document.createElement("form");
//   this.$element.className = "SearchInput";
//   this.state = initalState;

//   document.querySelector(".App").appendChild(this.$element);
//   $target.appendChild(this.$element);

//   this.render = () => {
//     this.$element.innerHTML = `<input class="SearchInput_input" type="text" placeholder="Search">`;
//   };
//   this.render();
// }

/* Class형 */
class Component {
  $target;
  $state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHtml = this.template();
    this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

export default class SearchInput extends Component {
  setup() {
    this.$target = document.querySelector(".App");
    this.$state = "";
  }
  template() {
    this.$element = document.createElement("form");
    this.$element.className = "SearchInput";
    this.$target.appendChild(this.$element);
    this.$element.innerHTML = `<input class="SearchInput_input" type="text" placeholder="Search">`;
  }
}
