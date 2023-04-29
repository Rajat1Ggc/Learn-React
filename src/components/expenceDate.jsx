import React from "react";
import "./expenceDate.css";

function ExpenceDate(props) {
    const month = props.date.toLocaleString('es-US', { month: 'short' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('es-US', { day: '2-digit' });

    return (
        <div className="date">
            <div className="day">{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    );
}
export default ExpenceDate;