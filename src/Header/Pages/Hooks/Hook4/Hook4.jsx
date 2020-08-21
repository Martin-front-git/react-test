import React, { useState, useEffect, useReducer } from "react";
import HookReducer, { initialState } from "../../../../store/Reducers/HookReducer";
import { NavLink } from "react-router-dom";

export default function Hook4() {
  const [state, dispatch] = useReducer(HookReducer,initialState);
  const [todoTitle, setTodoTitle] = useState("");
  const addTodo = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: "add",
        payload: todoTitle,
      });
      setTodoTitle("");
    }
  };
  let click=()=>{
    dispatch({
        type: "add",
        payload: todoTitle,
      });
      setTodoTitle("");
  }
  let NamesConst = state.map((nm) => (
    <div>
      <NavLink to={nm.id}>{nm.name}</NavLink>
    </div>
  ));
  return (
    <div>
      <div>
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <button onClick={click} className='btn btn-primary'>Go</button>
      </div>
      <div>{NamesConst}</div>
    </div>
  );
}
