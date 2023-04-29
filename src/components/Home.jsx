import React, { useState } from 'react';

import ExpenceDate from "./expenceDate";
import './Home.css';


function Home(props) {
  const [Newtitle, setNewTitle] = useState("");
  const [title, setTitle] = useState(props.title);

  const ClickHendelr = () => {
    setTitle(Newtitle);
  }
  const changehendle = (event) => {
    setNewTitle(event.target.value);
  }
  return (
    <div className="expence-item">
      <ExpenceDate date={props.date} />
      <div className="expence-item_description">
        <h2>{title}</h2>
        <div className="expence-item_price">
          ${props.price}
        </div>
        <input type='text' value={Newtitle} onChange={changehendle} />
        <button onClick={ClickHendelr}>change Title</button>
      </div>
    </div>
  );
}

export default Home;
