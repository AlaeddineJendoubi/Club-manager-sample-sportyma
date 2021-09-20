import { map, compact, isNil, filter } from "lodash";
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
    title: player?.name,
    clubs: player?.clubs,
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
