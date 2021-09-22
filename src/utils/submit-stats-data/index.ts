import { addStatsAction } from "../../actions/statistiques-action";
import { playersStatsByClubs, playersStatsBySeason } from "../get-players-data";

export const saveGeneratedStats = (state, type, dispatch) => {
  const players = state?.players;
  const clubs = state?.clubs;
  const seasons = state?.seasons?.seasons;

  switch (type) {
    case "CLUB":
      dispatch(addStatsAction({ club: playersStatsByClubs(players, clubs) }));
      alert("club stats saved");
    case "SEASON":
      dispatch(
        addStatsAction({ season: playersStatsBySeason(players, seasons) })
      );
      alert("seasons stats saved");
    default:
      break;
  }
};
