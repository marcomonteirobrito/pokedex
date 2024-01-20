import React, { createContext, useContext, useState } from "react";
import { PokemonsContextProps, PokemonsProviderProps } from "./types";

const PokemonsContext = createContext<PokemonsContextProps>({
  pokemons: [],
});

export const PokemonsProvider: React.FC<PokemonsProviderProps> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<string[]>([]);

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
