import { Action } from "../actions";

const CounterReducer = (state: number = 0, action: Action) => {
  switch (action.type) {
    case "add":
      return state + action.payload;

    case "delete":
      return state - action.payload;
    case "reset":
      return 0;

    default:
      return state;
  }
};

export default CounterReducer;
