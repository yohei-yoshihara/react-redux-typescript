import { createStore } from "redux";

type ActionType =
  { type: "INCREMENT"; payload: number };

export const reducer = (state = 0, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export const store = createStore(reducer);