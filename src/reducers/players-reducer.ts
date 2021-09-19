const initialState = {
  players: [
    {
      id: "234321ac",
      name: "Alaeddine",
      lastNAme: "Jendoubi",
      nbrMatch: [{ season: 1, club: "adade", nbr: 5 }],
      nbrGoals: [{ season: 1, club: "adade", nbr: 5 }],
      clubs: [{ season: 1, club: "adade" }],
    },
    {
      id: "23432sad1ac",
      name: "Mohammed",
      lastNAme: "Logani",
      nbrMatch: [{ season: 1, club: "adade", nbr: 5 }],
      nbrGoals: [{ season: 1, club: "adade", nbr: 5 }],
      clubs: [{ season: 2, club: "adade" }],
    },
    {
      id: "3sad1",
      name: "Yasine",
      lastNAme: "Jendoubi",
      nbrMatch: [{ season: 1, club: "adade", nbr: 5 }],
      nbrGoals: [{ season: 1, club: "adade", nbr: 5 }],
      clubs: [{ season: 1, club: "adade" }],
    },
    {
      id: "44fadas",
      name: "HSAN",
      lastNAme: "Selliti",
      nbrMatch: [{ season: 1, club: "adade", nbr: 5 }],
      nbrGoals: [{ season: 1, club: "adade", nbr: 5 }],
      clubs: [{ season: 2, club: "adade" }],
    },
    {
      id: "890asd809089ad",
      name: "Neymar",
      lastNAme: "doe",
      nbrMatch: [{ season: 3, club: "adade", nbr: 5 }],
      nbrGoals: [{ season: 1, club: "adade", nbr: 5 }],
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
