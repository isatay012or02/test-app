import CostShow from "./components/CostShow";

function App() {

  const costs = [
    {
      date: new Date(2022, 4, 14),
      discription: "IPad",
      amount: 2000
    },
    {
      date: new Date(2022, 5, 17),
      discription: "Macbook",
      amount: 2500.54
    },
    {
      date: new Date(2023, 0, 23),
      discription: "Car",
      amount: 25000.47
    },
  ]

  return (
    <div>
      <h1>Hey there i'm using React</h1>
      <CostShow costsForShow = {costs} />
    </div>
  )
}

export default App;
