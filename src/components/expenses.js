import Home from "./Home";
import "./expenses.css";
import React from "react";
function Expenses(props) {
  return (
    <div class="box">
      {props.item.map((expence) => (
        <Home date={expence.date} title={expence.title} price={expence.price} />
      ))}
    </div>
  );
}
export default Expenses;
