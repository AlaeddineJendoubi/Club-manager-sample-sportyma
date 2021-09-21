export const state = {
  players: [
    {
      id: "PlayerID1",
      name: "Blake",
      lastName: "Holmes",
      nbrMatch: [
        { season: 1, club: "ClubID1", nbr: 1 },
        { season: 2, club: "ClubID1", nbr: 7 },
        { season: 3, club: "ClubID2", nbr: 4 },
        { season: 1, club: "ClubID2", nbr: 2 },
      ],
      nbrGoals: [
        { season: 1, club: "ClubID1", nbr: 5 },
        { season: 1, club: "ClubID2", nbr: 3 },
        { season: 2, club: "ClubID2", nbr: 3 },
      ],
      clubs: [
        { season: 1, club: "ClubID1" },
        { season: 2, club: "ClubID2" },
      ],
    },
    {
      id: "PlayerID2",
      name: "Baker",
      lastName: "Rubie",
      nbrMatch: [{ season: 1, club: "ClubID1", nbr: 5 }],
      nbrGoals: [{ season: 1, club: "ClubID2", nbr: 5 }],
      clubs: [{ season: 2, club: "ClubID3" }],
    },
    {
      id: "PlayerID3",
      name: "Alina",
      lastName: "Reed",
      nbrMatch: [{ season: 1, club: "ClubID2", nbr: 0 }],
      nbrGoals: [{ season: 1, club: "ClubID3", nbr: 5 }],
      clubs: [{ season: 1, club: "ClubID1" }],
    },
  ],
  clubs: [
    {
      id: "ClubID1",
      name: "EST",
      logo: 1,
      country: "Tunisia",
      seasons: [{ id: 1 }, { id: 2 }],
    },
    {
      id: "ClubID2",
      name: "CA",
      logo: 2,
      country: "Tunisia",
      seasons: [{ id: 1 }, { id: 2 }],
    },
    {
      id: "ClubID3",
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
