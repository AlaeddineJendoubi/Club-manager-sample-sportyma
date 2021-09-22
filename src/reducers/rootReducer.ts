import { playersReducer, clubsReducer, seasonsReducer } from "./";
import { combineReducers } from "redux";
import { statistiquesReducer } from "./statistiques-reducer";
export const rootReducer = combineReducers({
  players: playersReducer,
  clubs: clubsReducer,
  seasons: seasonsReducer,
  statistiques: statistiquesReducer,
});
