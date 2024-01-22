import { ResponseProps } from "@/services/pokemons/types";

export type ApiParamsProps = {
  search: string;
};

export type PokemonsContextProps = {
  pokemons?: ResponseProps;
  apiParams: ApiParamsProps;
  updateApiParams: (params: Partial<ApiParamsProps>) => void;
  contextHolder: any;
  fetchPokemons: () => void;
  currentPage: number;
};

export type PokemonsProviderProps = {
  children: React.ReactNode;
};
