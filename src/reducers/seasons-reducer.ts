const initialState = {
  selectedSeason: 1,
  seasons: [
    {
      id: 1,
      startDate: new Date("2021-01-18T00:45:26+0000"),
      endDate: new Date("2021-04-18T00:45:26+0000"),
    },
    {
      id: 2,
      startDate: new Date("2021-04-18T00:45:26+0000"),
      endDate: new Date("2021-08-18T00:45:26+0000"),
    },
    {
      id: 3,
      startDate: new Date("2021-08-18T00:45:26+0000"),
      endDate: new Date("2021-12-18T00:45:26+0000"),
    },
  ],
};

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
