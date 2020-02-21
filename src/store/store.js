import { createStore, combineReducer } from "../react-store";
import todoReducer, { todos } from "../reducers/todoReducer";
import counterReducer, { counter } from "../reducers/counterReducer";

const initialState = {
  todos,
  counter
};

const store = createStore(
  combineReducer({ todos: todoReducer, counter: counterReducer }),
  initialState
);

export default store;
