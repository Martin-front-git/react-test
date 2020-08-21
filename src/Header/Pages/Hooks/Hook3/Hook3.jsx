import React, { useState } from "react";
import style from './Hook3.module.scss';


function Hook3(props) {
  const [state, setstate] = useState((count) => 0);
  let Plus = () => {
    setstate(state + 1);
  };
  let Minus = () => {
    if (state > 0) {
      setstate(state - 1);
    } else {
      return "error";
    }
  };
  return (
    <div className={style.table}>
      <div>
        <tr>
          <th>Price</th>
          <th>Count</th>
          <th>All Price</th>
        </tr>
        <tr>
          <td>{props.price}</td>
          <td>{state}</td>
          <td>{state * props.price}</td>
        </tr>
      </div>
      <div>
        <button onClick={Minus} className="btn btn-danger">
          -
        </button>
        <button onClick={Plus} className="btn btn-primary">
          +
        </button>
      </div>
    </div>
  );
}

export default Hook3;
