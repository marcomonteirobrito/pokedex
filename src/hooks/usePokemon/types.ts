import { ResponseProps } from "@/services/pokemons/types";

export type ApiParamsProps = {
  search: string;
  currentPage: number;
};

export type PokemonsContextProps = {
  pokemons?: ResponseProps;
  apiParams: ApiParamsProps;
  updateApiParams: (params: Partial<ApiParamsProps>) => void;
};

export type PokemonsProviderProps = {
  children: React.ReactNode;
};
