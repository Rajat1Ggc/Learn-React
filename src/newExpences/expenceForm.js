import "./expenceForm.css";
import React, { useState } from "react";

const ExpenceForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  const titleChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const AmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  const Submithundler = (event) => {
    event.preventDefault();
    const expreceData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveData(expreceData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={Submithundler}>
      <div className="new-expence_controls">
        <div className="new-expence_control">
          <label>title</label>
          <input type="text" value={EnteredTitle} onChange={titleChange} />
        </div>
        <div className="new-expence_control">
          <label>Amount</label>
          <input
            type="number"
            min=" 0.1"
            step="0.1"
            value={EnteredAmount}
            onChange={AmountChange}
          />
        </div>
        <div className="new-expence_control">
          <label>Date </label>
          <input type="date" value={EnteredDate} onChange={DateChange} />
        </div>
      </div>
      <div className="new-expence_actions">
        <button className="submit">Add expence</button>
      </div>
    </form>
  );
};
export default ExpenceForm;
