import { playersReducer, clubsReducer, seasonsReducer } from "./";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({
  players: playersReducer,
  clubs: clubsReducer,
  seasons: seasonsReducer,
});
