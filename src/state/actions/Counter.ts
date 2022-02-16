import { Dispatch } from "redux";

import { ActionType } from "../types";
import { Action } from ".";

export const addCounter = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD,
      payload: amount,
    });
  };
};

export const deleteCounter = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE,
      payload: amount,
    });
  };
};

export const resetCounter = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET,
    });
  };
};
