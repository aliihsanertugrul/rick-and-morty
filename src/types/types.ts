// types.ts
export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  };
  
  export type CharacterResponse = {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Character[];
  };
  


  type Origin = {
    name: string;
    url: string;
  };
  
  type Location = {
    name: string;
    url: string;
  };
  
  type Episode = string; // URL strings for episodes
  
  // Define the main Character type
  export type CharacterDetail = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string; // This is an empty string in your example but can be a more specific type if needed
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: Episode[]; // Array of episode URLs
    url: string;
    created: string; // ISO date string
  };


  export type FilterCharacterProps ={
    name?:string,
    status?:"alive" | "dead" | "unknown",
    species?:string,
    type?:string,
    gender?:string
  }