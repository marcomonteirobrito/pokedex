import React, { createContext, useContext, useEffect, useState } from "react";
import { message } from "antd";
import { PokemonsContextProps, PokemonsProviderProps } from "./types";
import { getPokemonInfo, getPokemonList } from "@/services/pokemons";
import { ResponseProps, ResultProps } from "@/services/pokemons/types";
import { useRouter } from "next/router";

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
  contextHolder: () => {},
  fetchPokemons: () => {},
  currentPage: 1,
});

export const PokemonsProvider = ({ children }: PokemonsProviderProps) => {
  const router = useRouter();
  const [pokemons, setPokemons] = useState<ResponseProps>();
  const [messageApi, contextHolder] = message.useMessage();
  const currentPage = parseInt(router.query.page as string) || 1;
  const { search } = router.query;

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Nome incorreto",
    });
  };

  const fetchPokemons = async () => {
    try {
      const data = await getPokemonList({ params: search, currentPage });
      if (data && data.results) {
        const pokemonInfo = await Promise.all(
          data.results.map(async (pokemon: ResultProps) => {
            const info = await getPokemonInfo(pokemon.url);
            return { ...pokemon, ...info };
          })
        );

        setPokemons({ ...data, results: pokemonInfo });
      }
    } catch {
      error();
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [search, currentPage]);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        contextHolder,
        fetchPokemons,
        currentPage,
      }}
    >
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
