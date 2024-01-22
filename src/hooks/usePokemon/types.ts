import { ResponseProps } from "@/services/pokemons/types";

export type PokemonsContextProps = {
  pokemons?: ResponseProps;
  contextHolder: any;
  fetchPokemons: () => void;
  currentPage: number;
};

export type PokemonsProviderProps = {
  children: React.ReactNode;
};
