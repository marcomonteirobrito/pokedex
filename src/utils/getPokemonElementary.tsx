import { ResultProps } from "@/services/pokemons/types";

export const getPokemonElementary = (types: ResultProps["types"]) => {
  type ElementaryType = keyof typeof elementary;

  const elementary = {
    bug: "/assets/elementary/bug.png",
    dark: "/assets/elementary/dark.png",
    dragon: "/assets/elementary/dragon.png",
    eletric: "/assets/elementary/eletric.png",
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

  return types?.map((type) => {
    const typeName = type.type.name as ElementaryType;
    return elementary[typeName];
  });
};
