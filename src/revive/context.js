import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const Revive = ({ load, ...rest }) => {
  const [state, dispatch] = useReducer(load.reducer, load.initialState);

  return <AppContext.Provider value={{ state, dispatch }} {...rest} />;
};

const useRevive = () => useContext(AppContext);

export { Revive, useRevive };
