import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { State } from "./state/reducers";
import { Actions } from "./state/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: State) => state.counter);

  const { resetCounter, addCounter, deleteCounter } =
    bindActionCreators(Actions, dispatch);

  return (
    <div>
      <div>{counter}</div>

      <div>
        <button onClick={() => addCounter(1)}>add</button>
        <button onClick={() => deleteCounter(1)}>delete</button>
        <button onClick={() => resetCounter()}>reset</button>
      </div>
    </div>
  );
}

export default App;
