import React, { useState } from "react";
import "./Task.css";

export default function Task() {
  // const array = [];
  const [task, setTask] = useState("");
  const [toggle, setToggle] = useState(true);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const clickHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
    // console.log(toggle)
  };
  return (
    <div >
      <input
        type="text"
        className={toggle ? "style" : "styled"}
        onChange={changeHandler}
        value={task}
      />
      <button onClick={clickHandler} className={toggle ? "styled" : "style"}>
        click to add
      </button>

      <div>
        <ul></ul>
      </div>
    </div>
  );
}
