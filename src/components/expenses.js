import Home from "./Home";
import "./expenses.css";
import React from "react";
function Expenses(props) {
  return (
    <div class="box">
      <Home
        date={props.item[0].date}
        title={props.item[0].title}
        price={props.item[0].price}
      />
      <Home
        date={props.item[1].date}
        title={props.item[1].title}
        price={props.item[1].price}
      />
      <Home
        date={props.item[2].date}
        title={props.item[2].title}
        price={props.item[2].price}
      />
      <Home
        date={props.item[3].date}
        title={props.item[3].title}
        price={props.item[3].price}
      />
    </div>
  );
}
export default Expenses;
