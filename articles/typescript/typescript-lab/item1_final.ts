interface State {
  name: string;
  capital: string;
}

const states2: State[] = [
  { name: "Alabama", capitol: "Montgomery" },
  { name: "Alaska", capitol: "Juneau" },
  { name: "Arizona", capitol: "Phoenix" },
];

for (const state of states2) {
  console.log(state.capital);
}
