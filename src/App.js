import React from "react";
import { Revive } from "./revive/context";
import load from "./load";
import Todo from "./todo";

const App = () => {
  return (
    <Revive load={load}>
      <div>
        <Todo />
      </div>
    </Revive>
  );
};

export default App;
