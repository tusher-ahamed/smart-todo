import React from "react";
import { useStore } from "./react-store";

const Counter = () => {
  const { state, dispatch } = useStore();
  return (
    <div>
      <div>{state.counter}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default Counter;
