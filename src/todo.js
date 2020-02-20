import React, { useState } from "react";
import { useRevive } from "./revive/context";

const Todo = () => {
  const [value, setValue] = useState("");
  const { state, dispatch } = useRevive();
  return (
    <div>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: value });
          setValue("");
        }}
      >
        Add
      </button>
      <div>
        {state.todos.map(todo => (
          <div key={todo}>{todo}</div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
