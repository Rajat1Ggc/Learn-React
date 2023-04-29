import React from "react";
import Expenses from "./components/expenses";
import "./App.css";

function App() {
  let expence = [
    {
      id: "1",
      date: new Date(2022, 4, 5),
      title: "afternoon ",
      price: 88,
    },
    {
      id: "2",
      date: new Date(2022, 5, 5),
      title: "morning ",
      price: 444,
    },
    {
      id: "3",
      date: new Date(2022, 6, 5),
      title: "night ",
      price: 440,
    },
    {
      id: "4",
      date: new Date(2022, 7, 5),
      title: "evening ",
      price: 4444,
    },
  ];
  return (
    <div>
      <h2>let's started </h2>
      <div className="body">
        <Expenses item={expence} />
      </div>
    </div>
  );
}

export default App;
