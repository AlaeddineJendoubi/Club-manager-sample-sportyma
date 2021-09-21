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
  playersStatsByClubs,
  playersStatsBySeason,
} from "../index";

import { getSeasonDataById } from "../../get-seasons-data";
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

test("Get season data by ID", () => {
  expect(getSeasonDataById(stateMock?.seasons?.seasons, 1)).toEqual([
    { endDate: "2019", id: 1, startDate: "2020" },
  ]);
});

test("Get player stats per club", () => {
  expect(playersStatsByClubs(stateMock?.players, stateMock?.clubs)).toEqual([
    {
      playerid: "PlayerID1",
      playerLastName: "Holmes",
      playerName: "Blake",
      clubName: "EST",
      nbrGoal: 5,
      nbrMatch: 8,
    },
    {
      playerid: "PlayerID1",
      playerLastName: "Holmes",
      playerName: "Blake",
      clubName: "CA",
      nbrGoal: 6,
      nbrMatch: 6,
    },
    {
      playerid: "PlayerID2",
      playerLastName: "Rubie",
      playerName: "Baker",
      clubName: "ESS",
      nbrGoal: 0,
      nbrMatch: 0,
    },
    {
      playerid: "PlayerID3",
      playerLastName: "Reed",
      playerName: "Alina",
      clubName: "EST",
      nbrGoal: 0,
      nbrMatch: 0,
    },
  ]);
});

test("Get player stats per club", () => {
  expect(
    playersStatsBySeason(stateMock?.players, stateMock?.seasons?.seasons)
  ).toEqual([
    {
      season: 1,
      playerName: "Blake",
      playerLastName: "Holmes",
      nbrGoals: 8,
      nbrMatches: 3,
    },
    {
      season: 1,
      playerName: "Baker",
      playerLastName: "Rubie",
      nbrGoals: 5,
      nbrMatches: 5,
    },
    {
      season: 1,
      playerName: "Alina",
      playerLastName: "Reed",
      nbrGoals: 5,
      nbrMatches: 0,
    },
    {
      season: 2,
      playerName: "Blake",
      playerLastName: "Holmes",
      nbrGoals: 3,
      nbrMatches: 7,
    },
  ]);
});
