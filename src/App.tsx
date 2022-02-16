import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "./state/actions";

function App() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const { addCounter, deleteCounter } = bindActionCreators(
    Actions,
    dispatch
  );

  return (
    <div>
      <div>{counter}</div>

      <div>
        <button onClick={() => addCounter(1)}>add</button>
        <button onClick={() => deleteCounter(1)}>delete</button>
      </div>
    </div>
  );
}

export default App;
