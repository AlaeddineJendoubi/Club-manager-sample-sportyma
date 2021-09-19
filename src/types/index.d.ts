export interface Player {
  id: string;
  name: string;
  lastName: string;
  nbrMatch: any;
  nbrGoals: any;
  clubs: Clubs[];
}
export interface Players {
  Players: Player[];
}

export interface Club {
  id: string;
  name: string;
  logo: number;
  country: number;
  season: [Season];
}
export interface Clubs {
  Players: Club[];
}
export interface Season {
  id: string;
  startDate: Date;
  endDate: Date;
}
