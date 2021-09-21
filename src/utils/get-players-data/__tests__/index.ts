import {
  getPlayerTotalMatches,
  getPlayerTotalGoals,
  getPlayerTotalMatchesPerClub,
  getPlayerTotalGoalsPerClub,
  getPlayerTotalMatchesPerSeason,
  getPlayerTotalGoalsPerSeason,
  getPlayerTotalMatchesPerSeasonPerclub,
  getPlayerTotalGoalsPerSeasonPerclub,
  getPlayerClubs,
  getPlayerMatchesStats,
  getPlayerGoalsStats,
} from "../index";
import { state } from "../../__mocks__/";
const stateMock = state;

const playerMock = state?.players[0];

test("Get player total matches played", () => {
  expect(getPlayerTotalMatches(playerMock)).toEqual(14);
});
test("Get player total goals scored", () => {
  expect(getPlayerTotalGoals(playerMock)).toEqual(11);
});
test("Get player total matches played per club", () => {
  expect(getPlayerTotalMatchesPerClub(playerMock, "ClubID1")).toEqual(8);
});
test("Get player total matches played per club [ No matches played with that club]", () => {
  expect(getPlayerTotalMatchesPerClub(playerMock, "None existing id")).toEqual(
    0
  );
});
test("Get player total goals scored per club", () => {
  expect(getPlayerTotalGoalsPerClub(playerMock, "ClubID1")).toEqual(5);
});
test("Get player total goals scored per season", () => {
  expect(getPlayerTotalGoalsPerSeason(playerMock, 1)).toEqual(8);
});

test("Get player total matches played per season", () => {
  expect(getPlayerTotalMatchesPerSeason(playerMock, 1)).toEqual(3);
});

test("Get player total matches played per season per club", () => {
  expect(
    getPlayerTotalMatchesPerSeasonPerclub(playerMock, 1, "ClubID1")
  ).toEqual(1);
});
test("Get player total goals scored per season per club", () => {
  expect(getPlayerTotalGoalsPerSeasonPerclub(playerMock, 1, "ClubID1")).toEqual(
    5
  );
});

test("Get player matches stats by filter [club + season]", () => {
  expect(getPlayerMatchesStats(playerMock, 1, "ClubID1")).toEqual(1);
});

test("Get player matches stats by filter [club conly]", () => {
  expect(getPlayerMatchesStats(playerMock, null, "ClubID1")).toEqual(8);
});
test("Get player matches stats by filter [season only]", () => {
  expect(getPlayerMatchesStats(playerMock, 1, null)).toEqual(3);
});

test("Get player matches stats by filter [club + season]", () => {
  expect(getPlayerGoalsStats(playerMock, 1, "ClubID1")).toEqual(5);
});

test("Get player matches stats by filter [club only]", () => {
  expect(getPlayerGoalsStats(playerMock, null, "ClubID2")).toEqual(6);
});

test("Get player matches stats by filter [season only]", () => {
  expect(getPlayerGoalsStats(playerMock, 2, null)).toEqual(3);
});

test("Get player clubs", () => {
  expect(getPlayerClubs(playerMock, stateMock?.clubs)).toEqual([
    {
      country: "Tunisia",
      id: "ClubID1",
      logo: 1,
      name: "EST",
      seasons: [{ id: 1 }, { id: 2 }],
    },
    {
      country: "Tunisia",
      id: "ClubID2",
      logo: 2,
      name: "CA",
      seasons: [{ id: 1 }, { id: 2 }],
    },
  ]);
});
