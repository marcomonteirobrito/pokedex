import { ResultProps } from "@/services/pokemons/types";
import { getPokemonElementary } from "@/utils/getPokemonElementary";
import Link from "next/link";

const PokemonCard = (pokemon: ResultProps) => {
  const elementaryIcons = getPokemonElementary(pokemon.types);

  const backgroundImage = elementaryIcons?.painel[0]
    ? `url(${elementaryIcons.painel[0]})`
    : "bg-white";

  return (
    <Link
      href={`/details/?search=${pokemon.id}`}
      className="rounded-lg text-gray-800 p-2"
      style={{ backgroundImage }}
    >
      <div className="flex">
        {elementaryIcons?.elementary.map((icon, index) => (
          <img src={icon} alt={`${index}`} className="mr-2 mb-2" key={index} />
        ))}
      </div>

      <img
        src={pokemon?.sprites?.other["official-artwork"].front_default}
        alt="pokemon-image"
        className="w-44 h-44"
      />

      <strong className="flex items-center justify-center gap-2 text-yellow-300">
        {pokemon?.name}
      </strong>
    </Link>
  );
};

export { PokemonCard };
