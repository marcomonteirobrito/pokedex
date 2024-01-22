import { Card } from "antd";
import { usePokemons } from "@/hooks/usePokemon";
import { getPokemonElementary } from "@/utils/getPokemonElementary";
import Link from "next/link";

const Details = () => {
  const { pokemons, currentPage } = usePokemons();
  const elementaryIcons = getPokemonElementary(pokemons?.results?.[0].types);
  const pokemonInfo = pokemons?.results?.[0];
  const pokemonType = pokemonInfo?.types;

  if (!pokemonInfo) {
    return <p>Loading...</p>;
  }

  const { sprites, base_experience } = pokemonInfo;
  const officialImage = sprites?.other["official-artwork"].front_default;

  return (
    <div className="grid gap-6 p-4 rounded-lg">
      <Link
        href={`/?page=${currentPage}`}
        className="rounded-full bg-white w-12 h-12 flex items-center justify-center"
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
          <div>
            <strong>Name</strong>
            <p>{pokemonInfo?.name}</p>
          </div>

          <div>
            <strong>Tipo primário</strong>
            <div className="flex gap-2">
              <p>{pokemonType?.[0].type.name}</p>
              <img src={elementaryIcons?.elementary[0]} alt="icon" />
            </div>
          </div>

          <div>
            <strong>Experiencia</strong>
            <p>{base_experience}</p>
          </div>

          <div className="flex flex-col">
            <strong>Tipo secundário</strong>
            {pokemonType?.[1] ? (
              <div className="flex gap-2">
                <p>{pokemonType?.[1].type.name}</p>
                <img src={elementaryIcons?.elementary[1]} alt="icon" />
              </div>
            ) : (
              " - "
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export { Details };
