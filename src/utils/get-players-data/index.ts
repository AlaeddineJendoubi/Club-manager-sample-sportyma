import { map, compact, isNil, filter, sum, flatten, size } from "lodash";
import { updatePlayerAction } from "../../actions/players-action";
import { Players, Player } from "../../types";

/**
 * Transforms a player object to item object
 * @param  player player object
 * @returns A transformed player object
 */
export const transformPlayerData = (player: Player) => {
  return {
    id: player?.id,
    title: player?.name + " " + player?.lastName,
    clubs: player?.clubs,
    totalGoals: getPlayerTotalGoals(player),
    nbrMatch: player?.nbrMatch,
    nbrGoals: player?.nbrGoals,
    name: player?.name,
    lastName: player?.lastName,
  };
};

/**
 * Gets players data  depending on selected season
 * @param  players players array
 * @returns an array of transformed players data
 */
export const playersData = (players: Players) => {
  return compact(
    map(players, (player) => {
      return transformPlayerData(player);
    })
  );
};

/**
 * Retruns selected player data
 * @param  selectedIndex selected player index
 * @param  players players array
 * @returns an array of transformed players data
 */
export const selectedPlayerData = (selectedIndex, players) => {
  try {
    return isNil(players[selectedIndex]) ? null : players[selectedIndex];
  } catch (error) {
    "got error while getting seasons data", error;
  }
};

/**
 * Retruns selected player data
 * @param  dispatch redux dispatch hook
 * @param  players players array
 * @param  selectedPlayer selected player data
 * @param  players players array
 * @param  season selected season object
 * @returns updates selected club state
 */
export const updatePlayerData = (
  dispatch,
  players,
  selectedPlayer,
  clubID,
  season
) => {
  const newAsoociatedClub = [{ season: season?.id, club: clubID }];
  const updatedPlayerData = {
    ...selectedPlayer,
    clubs: [...selectedPlayer?.clubs, ...newAsoociatedClub],
  };
  const playersWithoutUpdatedPlayer = filter(players, (player) => {
    return player?.id !== selectedPlayer?.id;
  });
  const updatedPlayers = [...playersWithoutUpdatedPlayer, updatedPlayerData];
  dispatch(updatePlayerAction(updatedPlayers));
};

/**
 * get player total goals count (all seasons)
 * @param  players players array
 * @returns total number of scored goals
 */
export const getPlayerTotalGoals = (player) => {
  return sum(
    map(player?.nbrGoals, (nbrGoal) => {
      return nbrGoal?.nbr;
    })
  );
};
/**
 * get player total matches count (all seasons)
 * @param  players players array
 * @returns total number of scored goals
 */
export const getPlayerTotalMatches = (player) => {
  return sum(
    map(player?.nbrMatch, (nbrMatch) => {
      return nbrMatch?.nbr;
    })
  );
};
/**
 * get player played matches per club
 * @param  player player object
 * @param  club club id
 * @returns total number of played matches per club
 */
export const getPlayerTotalMatchesPerClub = (player: Player, club) => {
  return sum(
    map(player?.nbrMatch, (nbrMatch) => {
      return nbrMatch?.club === club ? nbrMatch?.nbr : 0;
    })
  );
};
/**
 * get player scored goals per club
 * @param  player player object
 * @param  club club id
 * @returns total number of scored goals per club
 */
export const getPlayerTotalGoalsPerClub = (player: Player, club) => {
  return sum(
    map(player?.nbrGoals, (nbrGoal) => {
      return nbrGoal?.club === club ? nbrGoal?.nbr : 0;
    })
  );
};

/**
 * get player played matches per season
 * @param  player player object
 * @param  club season id
 * @returns total number of played matches per season
 */
export const getPlayerTotalMatchesPerSeason = (player: Player, season) => {
  return sum(
    map(player?.nbrMatch, (nbrMatch) => {
      return nbrMatch?.season === season ? nbrMatch?.nbr : 0;
    })
  );
};

/**
 * get player scored goals per season
 * @param  player player object
 * @param  club season id
 * @returns total number of played matches per season
 */
export const getPlayerTotalGoalsPerSeason = (player: Player, season) => {
  return sum(
    map(player?.nbrGoals, (nbrGoal) => {
      return nbrGoal?.season === season ? nbrGoal?.nbr : 0;
    })
  );
};

/**
 * get player played matches per season/club
 * @param  player player object
 * @param  club season id
 * @param  season season id
 * @returns total number of played matches per season
 */
export const getPlayerTotalMatchesPerSeasonPerclub = (
  player: Player,
  season,
  club
) => {
  return sum(
    map(player?.nbrMatch, (nbrMatch) => {
      return nbrMatch?.season === season && nbrMatch?.club === club
        ? nbrMatch?.nbr
        : 0;
    })
  );
};
/**
 * get player scored goals per season/club
 * @param  player player object
 * @param  club season id
 * @param  season season id
 * @returns total number of scored goals per season
 */
export const getPlayerTotalGoalsPerSeasonPerclub = (
  player: Player,
  season,
  club
) => {
  return sum(
    map(player?.nbrGoals, (nbrGoal) => {
      return nbrGoal?.season === season && nbrGoal?.club === club
        ? nbrGoal?.nbr
        : 0;
    })
  );
};
/**
 * get player clubs
 * @param  player player object
 * @param  clubsseason id
 * @returns an array of player's clubs
 */
export const getPlayerClubs = (player, clubs) => {
  return flatten(
    compact(
      map(player?.clubs, (playerClub) => {
        return compact(
          map(clubs, (club) => {
            return playerClub?.club === club?.id ? club : 0;
          })
        );
      })
    ),
    size
  );
};

/**
 * get player  matches per selected filter
 * @param  player player object
 * @param  seasonID id
 * @param  clubID id
 *
 * @returns an array of player's clubs
 */
export const getPlayerMatchesStats = (player, seasonID, clubID) => {
  return !isNil(seasonID) && !isNil(clubID)
    ? getPlayerTotalMatchesPerSeasonPerclub(player, seasonID, clubID)
    : !isNil(seasonID)
    ? getPlayerTotalMatchesPerSeason(player, seasonID)
    : getPlayerTotalMatchesPerClub(player, clubID);
};
/**
 * get playergoals matches per selected filter
 * @param  player player object
 * @param  seasonID id
 * @param  clubID id
 *
 * @returns an array of player's clubs
 */
export const getPlayerGoalsStats = (player, seasonID, clubID) => {
  return !isNil(seasonID) && !isNil(clubID)
    ? getPlayerTotalGoalsPerSeasonPerclub(player, seasonID, clubID)
    : !isNil(seasonID)
    ? getPlayerTotalGoalsPerSeason(player, seasonID)
    : getPlayerTotalGoalsPerClub(player, clubID);
};
