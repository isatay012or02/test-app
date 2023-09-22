import { useState } from "react";
import Costs from "./components/Costs/Costs";
import AddCost from "./components/CreateCost/AddCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 4, 14),
    description: "IPad",
    amount: 2000
  },
  {
    id: "c2",
    date: new Date(2022, 5, 17),
    description: "Macbook",
    amount: 2500.54
  },
  {
    id: "c3",
    date: new Date(2023, 0, 23),
    description: "Car",
    amount: 25000.47
  },
]

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...costs]
    })
  }

  return (
    <div>
      <AddCost onAddCost={addCostHandler} />
      <Costs costs = {costs} />
    </div>
  )
}

export default App;
