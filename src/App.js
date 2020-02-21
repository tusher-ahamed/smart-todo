import React from "react";
import GlobalStore from "./react-store";
import load from "./store/store";
import Todo from "./todo";
import Counter from "./counter";

const App = () => {
  return (
    <GlobalStore load={load}>
      <div>
        <Todo />
        <Counter />
      </div>
    </GlobalStore>
  );
};

export default App;
