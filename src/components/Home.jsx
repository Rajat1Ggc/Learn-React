import React from 'react';
import ExpenceDate from "./expenceDate";
import './Home.css';


function Home(props) {
  return (
    <div className="expence-item">
      <ExpenceDate date={props.date} />
      <div className="expence-item_description">
        <h2>{props.title}</h2>
        <div className="expence-item_price">
          ${props.price}
        </div>
      </div>
    </div>
  );
}

export default Home;
