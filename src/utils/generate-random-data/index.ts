const {
  uniqueNamesGenerator,
  names,
  countries,
} = require("unique-names-generator");
import cuid from "cuid";
import { addClubAction } from "../../actions/clubs-action";
import { addPlayerAction } from "../../actions/players-action";

export const generateRandomClub = () => {
  let seasons = [];

  while (seasons.length !== 3) {
    seasons.push({ id: Math.floor(Math.random() * 3) + 1 });
  }
  return {
    id: cuid(),
    name: uniqueNamesGenerator({
      dictionaries: [names],
      style: "upperCase",
    }).substring(0, 3),
    logo: Math.floor(Math.random() * (7 - 0 + 1) + 0),
    country: uniqueNamesGenerator({
      dictionaries: [countries],
    }),
    seasons: seasons,
  };
};
export const generateRandomPlayer = (clubs) => {
  let nbrGoals = [];

  while (nbrGoals.length !== 2) {
    nbrGoals.push({
      season: Math.floor(Math.random() * (3 - 0 + 1) + 0),
      club: clubs[Math.floor(Math.random() * (clubs?.length - 0 + 1) + 0)]?.id,
      nbr: Math.floor(Math.random() * 4) + 1,
    });
  }
  return {
    id: cuid(),
    name: uniqueNamesGenerator({
      dictionaries: [names],
    }),
    lastName: uniqueNamesGenerator({
      dictionaries: [names],
    }),
    nbrGoals: nbrGoals,
    nbrMatch: nbrGoals,
    clubs: [],
  };
};
export const addGeneratedClub = (dispatch) => {
  dispatch(addClubAction(generateRandomClub()));
};

export const addGeneratedPlayer = (dispatch, clubs) => {
  dispatch(addPlayerAction(generateRandomPlayer(clubs)));
};
