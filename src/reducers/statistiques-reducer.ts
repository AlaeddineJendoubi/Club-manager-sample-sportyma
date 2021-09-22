import { stateMock } from "../utils/__mocks__";

const initialState = {};

export const statistiquesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "ADD_STATS":
      return { ...state, ...action?.payload };

    default:
      return state;
  }
};
