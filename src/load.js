import createLoad from "./revive/createLoad";

const initialState = {
  todos: []
};

const reducer = (state, action) => {
  console.log(action);
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.payload]
    };
  }
  return state;
};

const load = createLoad(reducer, initialState);

export default load;
