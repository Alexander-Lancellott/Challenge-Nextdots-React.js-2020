export interface Character {
  id: number;
  name: string;
  species?: string;
  type?: string;
  gender?: string;
  image: string;
}

export interface Info {
  pages: number;
}

export interface Characters {
  info: Info;
  results: [Character];
}

export interface Locations {
  info: Info;
  results: [Location];
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [Character];
}

export interface Episodes {
  info: Info;
  results: [Episode];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [Character];
}
