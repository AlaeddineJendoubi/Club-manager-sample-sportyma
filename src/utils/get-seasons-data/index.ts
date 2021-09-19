import { truncate, isNil } from "lodash";
import { changeSelectedSeason } from "../../actions/seasons-actions";

export const createSeaonTitleFromDates = (startDate, endDate) => {
  return !isNil(startDate) || !isNil(endDate)
    ? "From : " +
        truncate(startDate, { length: 18 }) +
        "To : " +
        truncate(endDate, { length: 18 })
    : "SEASON DATA IS MISSSING";
};

export const selectedSeasonData = (selectedIndex, seasons) => {
  try {
    return isNil(seasons[selectedIndex]) ? null : seasons[selectedIndex];
  } catch (error) {
    "got error while getting seasons data", error;
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
