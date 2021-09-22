import { stateMock } from "../utils/__mocks__";

const initialState = {
  clubs: stateMock?.clubs,
};

export const clubsReducer = (state = initialState?.clubs, action) => {
  switch (action?.type) {
    case "ADD_CLUB":
      return [...state, action?.payload];
    default:
      return state;
  }
};
