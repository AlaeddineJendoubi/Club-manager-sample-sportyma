const initialState = {
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
      nbrMatch: [{ season: 3, club: "adade", nbr: 5 }],
      nbrGoals: [{ season: 1, club: "adade", nbr: 8 }],
      clubs: [{ season: 3, club: "adade" }],
    },
  ],
};

export const playersReducer = (state = initialState?.players, action) => {
  switch (action?.type) {
    case "ADD_PLAYER":
      return [...state, action?.payload];
    case "UPDATE_PLAYER":
      return action?.payload;
    default:
      return state;
  }
};
