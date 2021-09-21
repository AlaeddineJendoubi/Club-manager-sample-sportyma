import {
  transformClubData,
  clubsData,
  filteredClubsData,
  getClubDetailsByID,
  getClubPlayers,
} from "../index";
import { state } from "../../__mocks__/";
const stateMock = state;
const clubMock = state?.clubs[0];

test("transform club data to item format", () => {
  expect(transformClubData(clubMock)).toEqual({
    id: "ClubID1",
    title: "EST",
    logo: 1,
    country: "Tunisia",
  });
});

test("Transform all clubs data to item format", () => {
  expect(clubsData(stateMock?.clubs)).toEqual([
    { country: "Tunisia", id: "ClubID1", logo: 1, title: "EST" },
    { country: "Tunisia", id: "ClubID2", logo: 2, title: "CA" },
    { country: "Tunisia", id: "ClubID3", logo: 3, title: "ESS" },
  ]);
});

test("Filter clubs data depending on selected season", () => {
  expect(filteredClubsData(stateMock)).toEqual([
    { country: "Tunisia", id: "ClubID1", logo: 1, title: "EST" },
    { country: "Tunisia", id: "ClubID2", logo: 2, title: "CA" },
  ]);
});

test("Gets selected club detail by ID", () => {
  expect(getClubDetailsByID("ClubID1", state?.clubs)).toEqual({
    id: "ClubID1",
    name: "EST",
    logo: 1,
    country: "Tunisia",
    seasons: [{ id: 1 }, { id: 2 }],
  });
});

test("Filters players per selected club", () => {
  expect(
    getClubPlayers(
      stateMock?.players,
      stateMock?.clubs[0],
      stateMock?.seasons?.seasons[0]
    )
  ).toEqual([
    {
      clubs: [
        { club: "ClubID1", season: 1 },
        { club: "ClubID2", season: 2 },
      ],
      id: "PlayerID1",
      lastName: "Holmes",
      name: "Blake",
      nbrGoals: [
        { club: "ClubID1", nbr: 5, season: 1 },
        { club: "ClubID2", nbr: 3, season: 1 },
        { club: "ClubID2", nbr: 3, season: 2 },
      ],
      nbrMatch: [
        { club: "ClubID1", nbr: 1, season: 1 },
        { club: "ClubID1", nbr: 7, season: 2 },
        { club: "ClubID2", nbr: 4, season: 3 },
        { club: "ClubID2", nbr: 2, season: 1 },
      ],
    },
    {
      clubs: [{ club: "ClubID1", season: 1 }],
      id: "PlayerID3",
      lastName: "Reed",
      name: "Alina",
      nbrGoals: [{ club: "ClubID3", nbr: 5, season: 1 }],
      nbrMatch: [{ club: "ClubID2", nbr: 0, season: 1 }],
    },
  ]);
});
