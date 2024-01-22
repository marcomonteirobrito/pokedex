import React, { createContext, useContext, useEffect, useState } from "react";
import { message } from "antd";
import {
  ApiParamsProps,
  PokemonsContextProps,
  PokemonsProviderProps,
} from "./types";
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
  apiParams: {
    search: "",
  },
  contextHolder: () => {},
  updateApiParams: () => {},
  fetchPokemons: () => {},
  currentPage: 1,
});

export const PokemonsProvider = ({ children }: PokemonsProviderProps) => {
  const router = useRouter();
  const [pokemons, setPokemons] = useState<ResponseProps>();
  const [apiParams, setApiParams] = useState({
    search: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const currentPage = parseInt(router.query.page as string) || 1;

  const updateApiParams = (updateProps: Partial<ApiParamsProps>) => {
    setApiParams((state) => ({ ...state, ...updateProps }));
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Informe um nome correto",
    });
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "This is a warning message",
    });
  };

  const fetchPokemons = async () => {
    const limit = 10;
    const offset = (currentPage - 1) * limit;
    const params =
      apiParams.search === ""
        ? `?offset=${offset}&limit=${limit}`
        : apiParams.search;

    const data = await getPokemonList(params);

    if (!data) {
      error();
    }

    if (data && data.results) {
      const pokemonInfo = await Promise.all(
        data.results.map(async (pokemon: ResultProps) => {
          const info = await getPokemonInfo(pokemon.url);
          return { ...pokemon, ...info };
        })
      );

      setPokemons({ ...data, results: pokemonInfo });
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [apiParams, currentPage]);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        apiParams,
        updateApiParams,
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
