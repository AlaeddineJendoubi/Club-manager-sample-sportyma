import { Clubs } from "../types";

const initialState = {
  clubs: [
    {
      id: "adade",
      name: "EST",
      logo: 1,
      country: "Tunisia",
      seasons: [{ id: 1 }, { id: 2 }],
    },
    {
      id: "adadqwde",
      name: "CA",
      logo: 2,
      country: "Tunisia",
      seasons: [{ id: 1 }, { id: 2 }],
    },
    {
      id: "adasdaade",
      name: "ESS",
      logo: 3,
      country: "Tunisia",
      seasons: [{ id: 3 }],
    },
  ],
};

export const clubsReducer = (state = initialState?.clubs, action) => {
  switch (action?.type) {
    case "ADD_CLUB":
      return [...state, action?.payload];
    default:
      return state;
  }
};
