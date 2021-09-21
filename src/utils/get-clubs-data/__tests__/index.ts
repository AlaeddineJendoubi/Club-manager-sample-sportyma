import {
  transformClubData,
  clubsData,
  filteredClubsData,
  getClubDetailsByID,
  getClubPlayers,
} from "../index";
import { state } from "../../__mocks__/";
const stateMock = state;
const clubMock = {
  id: "adade",
  name: "EST",
  logo: 1,
  country: "Tunisia",
  seasons: [{ id: 1 }, { id: 2 }],
};

test("transform club data to item format", () => {
  expect(transformClubData(clubMock)).toEqual({
    id: "adade",
    title: "EST",
    logo: 1,
    country: "Tunisia",
  });
});

test("Transform all clubs data to item format", () => {
  expect(clubsData(stateMock?.clubs)).toEqual([
    { country: "Tunisia", id: "adade", logo: 1, title: "EST" },
    { country: "Tunisia", id: "adadqwde", logo: 2, title: "CA" },
    { country: "Tunisia", id: "adasdaade", logo: 3, title: "ESS" },
  ]);
});

test("Filter clubs data depending on selected season", () => {
  expect(filteredClubsData(stateMock)).toEqual([
    { country: "Tunisia", id: "adade", logo: 1, title: "EST" },
    { country: "Tunisia", id: "adadqwde", logo: 2, title: "CA" },
  ]);
});

test("Gets selected club detail by ID", () => {
  expect(getClubDetailsByID("adade", state?.clubs)).toEqual({
    id: "adade",
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
        {
          club: "adade",
          season: 1,
        },
        {
          club: "adadqwde",
          season: 2,
        },
      ],
      id: "234321ac",
      lastName: "Holmes",
      name: "Blake",
      nbrGoals: [
        {
          club: "adade",
          nbr: 50,
          season: 1,
        },
        {
          club: "adadqwde",
          nbr: 3,
          season: 2,
        },
      ],
      nbrMatch: [
        {
          club: "adade",
          nbr: 3,
          season: 1,
        },
        {
          club: "adadqwde",
          nbr: 7,
          season: 1,
        },
        {
          club: "adasdaade",
          nbr: 23,
          season: 3,
        },
      ],
    },
    {
      clubs: [
        {
          club: "adade",
          season: 1,
        },
      ],
      id: "3sad1",
      lastName: "Reed",
      name: "Alina",
      nbrGoals: [
        {
          club: "adade",
          nbr: 5,
          season: 1,
        },
      ],
      nbrMatch: [
        {
          club: "adade",
          nbr: 0,
          season: 1,
        },
      ],
    },
  ]);
});
