import { stateMock } from "../utils/__mocks__";

const initialState = {
  players: stateMock?.players,
};

export const playersReducer = (state = initialState?.players, action) => {
  switch (action?.type) {
    case "ADD_PLAYER":
      return [...state, action?.payload];
    case "UPDATE_PLAYER":
      return action?.payload;
    default:
      return state;
  }
};
