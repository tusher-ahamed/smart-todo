/** state you write here will be available for this reducer */

export const counter = 0;

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
