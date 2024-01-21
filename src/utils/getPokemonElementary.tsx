import { ResultProps } from "@/services/pokemons/types";

type ElementaryProps = {
  elementary: string[];
  painel: string[];
};

export const getPokemonElementary = (
  types: ResultProps["types"]
): ElementaryProps | null => {
  type ElementaryType = keyof typeof elementary;

  const elementary = {
    bug: "/assets/elementary/bug.png",
    dark: "/assets/elementary/dark.png",
    dragon: "/assets/elementary/dragon.png",
    electric: "/assets/elementary/electric.png",
    fairy: "/assets/elementary/fairy.png",
    fighting: "/assets/elementary/fighting.png",
    fire: "/assets/elementary/fire.png",
    flying: "/assets/elementary/flying.png",
    ghost: "/assets/elementary/ghost.png",
    grass: "/assets/elementary/grass.png",
    ground: "/assets/elementary/ground.png",
    ice: "/assets/elementary/ice.png",
    normal: "/assets/elementary/normal.png",
    poison: "/assets/elementary/poison.png",
    psychic: "/assets/elementary/psychic.png",
    rock: "/assets/elementary/rock.png",
    steel: "/assets/elementary/steel.png",
    water: "/assets/elementary/water.png",
  };

  const painels = {
    bug: "/assets/painels/bug.png",
    dark: "/assets/painels/dark.png",
    dragon: "/assets/painels/dragon.png",
    electric: "/assets/painels/electric.png",
    fairy: "/assets/painels/fairy.png",
    fighting: "/assets/painels/fighting.png",
    fire: "/assets/painels/fire.png",
    flying: "/assets/painels/flying.png",
    ghost: "/assets/painels/ghost.png",
    grass: "/assets/painels/grass.png",
    ground: "/assets/painels/ground.png",
    ice: "/assets/painels/ice.png",
    normal: "/assets/painels/normal.png",
    poison: "/assets/painels/poison.png",
    psychic: "/assets/painels/psychic.png",
    rock: "/assets/painels/rock.png",
    steel: "/assets/painels/steel.png",
    water: "/assets/painels/water.png",
  };

  if (!types) {
    return null;
  }

  const elementaryImages = types.map((type) => {
    const typeName = type.type.name as ElementaryType;
    return elementary[typeName];
  });

  const painelImages = types.map((type) => {
    const typeName = type.type.name as ElementaryType;
    return painels[typeName];
  });

  return { elementary: elementaryImages, painel: painelImages };
};
