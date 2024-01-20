import React, { createContext, useContext, useEffect, useState } from "react";
import {
  ApiParamsProps,
  PokemonsContextProps,
  PokemonsProviderProps,
} from "./types";
import { getPokemonList } from "@/services/pokemons";
import { ResponseProps, ResultProps } from "@/services/pokemons/types";

const PokemonsContext = createContext<PokemonsContextProps>({
  pokemons: {
    count: 0,
    next: "",
    previous: "",
    results: [
      {
        name: "",
        url: "",
      },
    ],
  },
  apiParams: {
    search: "",
    currentPage: 1,
  },
  updateApiParams: () => {},
});

export const PokemonsProvider = ({ children }: PokemonsProviderProps) => {
  const [pokemons, setPokemons] = useState<ResponseProps>();
  const [apiParams, setApiParams] = useState({
    search: "",
    currentPage: 1,
  });

  console.log("poke", pokemons);

  const updateApiParams = (updateProps: Partial<ApiParamsProps>) => {
    setApiParams((state) => ({ ...state, ...updateProps }));
  };

  const getPokemonInfo = (url: ResultProps["url"]) => {};

  const fetchPokemons = async () => {
    const limit = 10;
    const offset = (apiParams.currentPage - 1) * limit;
    const params =
      apiParams.search === ""
        ? `?offset=${offset}&limit=${limit}`
        : apiParams.search;
    const data = await getPokemonList(params);
    if (data) {
      setPokemons(data);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [apiParams]);

  return (
    <PokemonsContext.Provider value={{ pokemons, apiParams, updateApiParams }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemons = () => {
  const context = useContext(PokemonsContext);

  if (context === undefined) {
    throw new Error("usePokemons must be used within a PokemonsProvider");
  }

  return context;
};
