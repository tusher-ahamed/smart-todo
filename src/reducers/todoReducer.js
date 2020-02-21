/** state you write here will be available for this reducer */

export const todos = [];

const reducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    return [...state, action.payload];
  }
  return state;
};

export default reducer;
