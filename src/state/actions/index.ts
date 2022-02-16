export * as Actions from "./Counter";
import { ActionType } from "../types";

interface ActionAdd {
  type: ActionType.ADD;
  payload: number;
}
interface ActionDelete {
  type: ActionType.DELETE;
  payload: number;
}

interface ActionReset {
  type: ActionType.RESET;
}

export type Action = ActionAdd | ActionDelete | ActionReset;
