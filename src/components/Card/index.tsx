import { ResultProps } from "@/services/pokemons/types";
import { getPokemonElementary } from "@/utils/getPokemonElementary";
import Image from "next/image";

const Card = (pokemon: ResultProps) => {
  const elementaryIcons = getPokemonElementary(pokemon.types);

  return (
    <div
      key={pokemon?.id}
      className="bg-white rounded-lg h-56 w-44 text-gray-800 p-2"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-between">
          {elementaryIcons?.map((icon, index) => (
            <Image
              src={icon}
              alt={`${index}`}
              width={24}
              height={24}
              className="mr-2"
            />
          ))}
        </div>
      </div>

      <div>
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          }
          alt="image"
          width={44}
          height={44}
          layout="responsive"
        />
      </div>

      <div className="flex flex-col items-center my-2">
        <p>{pokemon?.name}</p>
      </div>
    </div>
  );
};

export default Card;
