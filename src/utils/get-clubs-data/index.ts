import { map, compact, isNil, first, filter, size, flatten } from "lodash";
import { Club, Clubs, Season } from "../../types";

/**
 * Transforms a club object to item object
 * @param  club club object
 * @returns A transformed club object
 */
export const transformClubData = (club: Club) => {
  return {
    id: club?.id,
    title: club?.name,
    logo: club?.logo,
    country: club?.country,
  };
};
/**
 * Transforms all clubs data to item format
 * @param  clubs clubs array
 * @returns an array of transformed clubs data
 */
export const clubsData = (clubs: Clubs) => {
  return compact(
    map(clubs, (club) => {
      return transformClubData(club);
    })
  );
};

/**
 * Filters clubs data depending on selected season
 * @param  state redux state
 * @returns an array of filtered clubs in selected season
 */
export const filteredClubsData = (state) => {
  return isNil(state?.seasons?.selectedSeason)
    ? clubsData(state?.clubs)
    : flatten(
        compact(
          map(state?.clubs, (club) => {
            return compact(
              map(club?.seasons, (season) => {
                return season?.id === state?.seasons?.selectedSeason?.id
                  ? transformClubData(club)
                  : null;
              })
            );
          })
        ),
        size
      );
};

/**
 * Gets selected club details
 * @param clubID the selected club idç
 * @param clubs clubs array from state
 * @returns an object containing the selected club id
 */
export const getClubDetailsByID = (clubID: number, clubs: Clubs) => {
  return first(
    compact(
      map(clubs, (club) => {
        return clubID === club?.id ? club : null;
      })
    )
  );
};

/**
 * Filters players per selected club per season
 * @param  players array of players
 * @param selectedClub the selected club object
 * @returns an array of filtered players that plays in that club
 */
export const getClubPlayers = (players, selectedClub: Club, season: Season) => {
  return flatten(
    filter(
      compact(
        map(players, (player) => {
          return compact(
            map(player?.clubs, (club) => {
              return club?.club === selectedClub?.id &&
                club?.season === season?.id
                ? player
                : null;
            })
          );
        })
      ),
      size
    )
  );
};
