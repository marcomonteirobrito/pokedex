import { Card } from "antd";
import { usePokemons } from "@/hooks/usePokemon";
import { getPokemonElementary } from "@/utils/getPokemonElementary";

const Details = () => {
  const { pokemons } = usePokemons();
  const elementaryIcons = getPokemonElementary(pokemons?.results?.[0].types);
  const pokemonInfo = pokemons?.results?.[0];
  const pokemonType = pokemonInfo?.types;

  if (!pokemonInfo) {
    return <p>Loading...</p>;
  }

  const { name, sprites, types, base_experience } = pokemonInfo;
  const officialImage = sprites?.other["official-artwork"].front_default;

  console.log("pokemons", pokemonInfo);

  return (
    <div className="grid gap-6 p-4 rounded-lg">
      <img
        src={elementaryIcons?.painel[0]}
        alt="painel"
        className="rounded-lg"
      />
      <Card className="bg-blue-100 border-none flex items-center">
        <img src={officialImage} alt="pokemon" />

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
