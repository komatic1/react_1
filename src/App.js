import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2020, 2, 12),
    description: "Холодильник",
    amount: 999.99,
    show: false
  },
  { 
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 125.72,
    show: false
  }, 
  {
    id: 'c3',
    date: new Date(2021, 4, 1),
    description: "Джинсы",
    amount: 49.99,
    show: false
  }
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);
   
  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  };

  return (
    <div>
      <NewCost onAddCost = {addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
