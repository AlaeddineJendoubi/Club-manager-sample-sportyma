import { Club } from "../types";

export const addClubAction = (club: Club) => {
  return {
    type: "ADD_CLUB",
    payload: club,
  };
};
