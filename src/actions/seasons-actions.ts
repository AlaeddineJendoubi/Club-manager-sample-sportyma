export const changeSelectedSeason = (seasonID: number) => {
  return {
    type: "CHANGE_SEASON",
    payload: seasonID,
  };
};
