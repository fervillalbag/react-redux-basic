import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

const reducers = combineReducers({
  counter: CounterReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
