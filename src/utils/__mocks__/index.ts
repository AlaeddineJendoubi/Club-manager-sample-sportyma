export const state = {
  players: [
    {
      id: "234321ac",
      name: "Blake",
      lastName: "Holmes",
      nbrMatch: [
        { season: 1, club: "adade", nbr: 3 },
        { season: 1, club: "adadqwde", nbr: 7 },
        { season: 3, club: "adasdaade", nbr: 23 },
      ],
      nbrGoals: [
        { season: 1, club: "adade", nbr: 50 },
        { season: 2, club: "adadqwde", nbr: 3 },
      ],
      clubs: [
        { season: 1, club: "adade" },
        { season: 2, club: "adadqwde" },
      ],
    },
    {
      id: "23432sad1ac",
      name: "Baker",
      lastName: "Rubie",
      nbrMatch: [{ season: 1, club: "adade", nbr: 5 }],
      nbrGoals: [{ season: 1, club: "adade", nbr: 5 }],
      clubs: [{ season: 2, club: "adadqwde" }],
    },
    {
      id: "3sad1",
      name: "Alina",
      lastName: "Reed",
      nbrMatch: [{ season: 1, club: "adade", nbr: 0 }],
      nbrGoals: [{ season: 1, club: "adade", nbr: 5 }],
      clubs: [{ season: 1, club: "adade" }],
    },
    {
      id: "44fadas",
      name: "HSAN",
      lastName: "Selliti",
      nbrMatch: [{ season: 1, club: "adade", nbr: 5 }],
      nbrGoals: [{ season: 1, club: "adade", nbr: 1 }],
      clubs: [{ season: 2, club: "adade" }],
    },
    {
      id: "890asd809089ad",
      name: "Neymar",
      lastName: "doe",
      nbrMatch: [],
      nbrGoals: [],
    },
  ],
  clubs: [
    {
      id: "adade",
      name: "EST",
      logo: 1,
      country: "Tunisia",
      seasons: [{ id: 1 }, { id: 2 }],
    },
    {
      id: "adadqwde",
      name: "CA",
      logo: 2,
      country: "Tunisia",
      seasons: [{ id: 1 }, { id: 2 }],
    },
    {
      id: "adasdaade",
      name: "ESS",
      logo: 3,
      country: "Tunisia",
      seasons: [{ id: 3 }],
    },
  ],

  seasons: {
    selectedSeason: { id: 1 },
    seasons: [
      {
        id: 1,
        startDate: new Date("2021-01-18T00:45:26+0000"),
        endDate: new Date("2021-04-18T00:45:26+0000"),
      },
      {
        id: 2,
        startDate: new Date("2021-04-18T00:45:26+0000"),
        endDate: new Date("2021-08-18T00:45:26+0000"),
      },
      {
        id: 3,
        startDate: new Date("2021-08-18T00:45:26+0000"),
        endDate: new Date("2021-12-18T00:45:26+0000"),
      },
    ],
  },
};
