import { Player, Players } from "../types";

export const addPlayerAction = (player: Player) => {
  return {
    type: "ADD_PLAYER",
    payload: player,
  };
};
export const updatePlayerAction = (updatedPlayerData: Players) => {
  return {
    type: "UPDATE_PLAYER",
    payload: updatedPlayerData,
  };
};
