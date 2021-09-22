import { stateMock } from "../utils/__mocks__";
const initialState = stateMock?.seasons;

export const seasonsReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "CHANGE_SEASON":
      return {
        ...state,
        seasons: state?.seasons,
        selectedSeason: action?.payload,
      };
      break;
    default:
      return state;
  }
};
