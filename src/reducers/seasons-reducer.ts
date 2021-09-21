const initialState = {
  selectedSeason: 1,
  seasons: [
    {
      id: 1,
      startDate: 2020,
      endDate: 2021,
    },
    {
      id: 2,
      startDate: 2019,
      endDate: 2020,
    },
    {
      id: 3,
      startDate: 2018,
      endDate: 2019,
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
