import { map, compact } from "lodash";
import { truncate, isNil } from "lodash";
import { changeSelectedSeason } from "../../actions/seasons-actions";
import { Season, Seasons } from "../../types";

export const createSeaonTitleFromDates = (startDate, endDate) => {
  return !isNil(startDate) || !isNil(endDate)
    ? "From :    " +
        truncate(startDate, { length: 18 }) +
        "   To : " +
        truncate(endDate, { length: 18 })
    : "SEASON DATA IS MISSSING";
};

export const selectedSeasonData = (selectedIndex, seasons) => {
  try {
    return isNil(seasons[selectedIndex]) ? null : seasons[selectedIndex];
  } catch (error) {
    console.log("got error while getting seasons data", error);
  }
};

export const selectedClubData = (selectedIndex, clubs) => {
  try {
    return isNil(clubs[selectedIndex]) ? null : clubs[selectedIndex];
  } catch (error) {
    console.log("got error while getting seasons data", error);
  }
};
export const resetSelectedSeason = (dispatch) => {
  dispatch(changeSelectedSeason(null));
};

export const updateSelectedSeason = (dispatch, selectedIndex, seasons) => {
  const selectedSeason = selectedSeasonData(selectedIndex, seasons);
  return isNil(selectedSeason)
    ? resetSelectedSeason(dispatch)
    : dispatch(changeSelectedSeason(selectedSeason));
};

/**
 * Returns season data by season
 * @param  seasons seasons array
 * @param  seasonID season id
 * @returns season data
 */
export const getSeasonDataById = (seasons: Seasons, seasonID: String) => {
  return compact(
    map(seasons, (season: Season) => {
      return season?.id === seasonID ? season : null;
    })
  );
};
