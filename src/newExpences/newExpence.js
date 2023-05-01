import React from "react";
import "./newExpence.css";
import ExpenceForm from "./expenceForm";

const NewExpence = (props) => {
  const SameExpenceDataHandler = (enteredExpancedata) => {
    const ExpreceData = {
      ...enteredExpancedata,
      id: Math.random().toString(),
    };
    props.OnAddExpence(ExpreceData);
  };
  return (
    <div className="new-expence">
      <ExpenceForm onSaveData={SameExpenceDataHandler} />
    </div>
  );
};
export default NewExpence;
