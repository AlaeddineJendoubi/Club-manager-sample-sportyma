import { map, compact, isNil, filter } from "lodash";
import { updatePlayerAction } from "../../actions/players-action";
import { Players, Player, Club } from "../../types";

/**
 * Transforms a club object to item object
 * @param  club club object
 * @returns A transformed club object
 */
export const transformPlayerData = (player: Player) => {
  return {
    id: player?.id,
    title: player?.name,
    clubs: player?.clubs,
  };
};
/**
 * Gets clubs data  depending on selected season
 * @param  clubs clubs array
 * @returns an array of transformed clubs data
 */
export const playersData = (players: Players) => {
  return compact(
    map(players, (player) => {
      return transformPlayerData(player);
    })
  );
};
export const selectedPlayerData = (selectedIndex, players) => {
  try {
    return isNil(players[selectedIndex]) ? null : players[selectedIndex];
  } catch (error) {
    "got error while getting seasons data", error;
  }
};

export const updatePlayerData = (dispatch, players, selectedPlayer, clubID) => {
  const newAsoociatedClub = [{ id: clubID }];
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

// export const updatePlayersState = (players,updatedPlayer)=>{
//   map(players,player =>{
//     if(player)
//   })
// }
