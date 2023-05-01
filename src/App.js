import React, { useState } from "react";
import Expenses from "./components/expenses";
import "./App.css";
import NewExpence from "./newExpences/newExpence";

// import Submithundler from "./newExpences/expenceForm";
let Dummy_expence = [
  {
    id: "1",
    date: new Date(2022, 4, 5),
    title: "afternoon ",
    price: 88,
  },
  {
    id: "1",
    date: new Date(2022, 4, 5),
    title: "afternoon ",
    price: 88,
  },
  {
    id: "1",
    date: new Date(2022, 4, 5),
    title: "afternoon ",
    price: 88,
  },
  {
    id: "1",
    date: new Date(2022, 4, 5),
    title: "afternoon ",
    price: 88,
  },
];

function App() {
  const [expences, setExpence] = useState(Dummy_expence);

  const AddexpenceHundler = (expence) => {
    const UpdatedArray = [expence, ...expences];
    setExpence(UpdatedArray);
  };

  return (
    <div>
      <NewExpence OnAddExpence={AddexpenceHundler} />
      <div className="body">
        <Expenses item={expences} />
      </div>
    </div>
  );
}

export default App;
