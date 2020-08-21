import React, { useState } from "react";


function Hook1() {
  let initialState = () => {
    return Math.trunc(Math.random() * 50);
  };
  const [count, setcount] = useState(() => {
    return initialState();
  });
  let Plus = () => {
    setcount(count + 1);
  };
  let Minus = () => {
    setcount(count - 1);
  };
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={Plus} className="btn btn-primary">
        +
      </button>
      <button onClick={Minus} className="btn btn-danger">
        -
      </button>
    </div>
  );
}

export default Hook1;
