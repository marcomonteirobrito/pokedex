import React, { createContext, useContext, useEffect, useState } from "react";
import { PokemonsContextProps, PokemonsProviderProps } from "./types";
import { getPokemonList } from "@/services/pokemons";

const PokemonsContext = createContext<PokemonsContextProps>({
  pokemons: [],
});

export const PokemonsProvider = ({ children }: PokemonsProviderProps) => {
  const [pokemons, setPokemons] = useState([]);
  const [apiParams, setApiParams] = useState({
    search: "",
    currentPage: 1,
  });

  console.log("list", pokemons);

  useEffect(() => {
    const fetchPokemons = async () => {
      const limit = 10;
      const offset = (apiParams.currentPage - 1) * limit;
      const params =
        apiParams === "" ? `offset=${offset}&limit=${limit}` : apiParams.search;
      const data = await getPokemonList(params);
      if (data) {
        setPokemons(data);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <PokemonsContext.Provider value={{ pokemons }}>
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
