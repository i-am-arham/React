import List from "./list";

function App() {
  const chais = [
    { id: 1, name: "Milk", calories: 20 },
    { id: 2, name: "Black", calories: 15 },
    { id: 3, name: "Green", calories: 31 },
  ];
  return <List items={chais} category="Chai"/>;
}

export default App;
