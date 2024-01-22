import Link from "next/link";
import { Card } from "antd";
import { usePokemons } from "@/hooks/usePokemon";
import { getPokemonElementary } from "@/utils/getPokemonElementary";
import { InfoDisplay } from "./InfoDisplay";

const Details = () => {
  const { pokemons, currentPage } = usePokemons();
  const elementaryIcons = getPokemonElementary(pokemons?.results?.[0].types);
  const pokemonInfo = pokemons?.results?.[0];
  const pokemonType = pokemonInfo?.types;

  if (!pokemonInfo) {
    return <p>Loading...</p>; //TODO: Adicionar component loading
  }

  const { sprites, base_experience } = pokemonInfo;
  const officialImage = sprites?.other["official-artwork"].front_default;

  return (
    <div className="grid gap-6 p-4 rounded-lg">
      <Link
        href={`/?page=${currentPage}`}
        className="rounded-full bg-white w-8 h-8 flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-black">arrow_back</span>
      </Link>

      <img
        src={elementaryIcons?.painel[0]}
        alt="painel"
        className="rounded-lg max-h-56 w-full"
      />

      <Card className="bg-blue-100 border-none">
        <img src="/assets/pokeball.png" className="w-12 h-12" />
        <img src={officialImage} alt="pokemon" className="flex w-1/2  m-auto" />

        <div className="grid grid-cols-2">
          <InfoDisplay title="Nome" value={pokemonInfo?.name} />
          <InfoDisplay
            title="Tipo primário"
            value={pokemonType?.[0].type.name || "-"}
            icon={elementaryIcons?.elementary[0]}
          />
          <InfoDisplay title="Experiência" value={base_experience || "-"} />
          <InfoDisplay
            title="Tipo secundário"
            value={pokemonType?.[1]?.type.name || "-"}
            icon={pokemonType?.[1] && elementaryIcons?.elementary[1]}
          />
        </div>
      </Card>
    </div>
  );
};

export { Details };
