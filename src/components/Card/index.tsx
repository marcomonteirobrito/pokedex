import { ResultProps } from "@/services/pokemons/types";
import { getPokemonElementary } from "@/utils/getPokemonElementary";
import Image from "next/image";
import Link from "next/link";

const Card = (pokemon: ResultProps) => {
  const elementaryIcons = getPokemonElementary(pokemon.types);

  return (
    <div
      key={pokemon?.id}
      className="bg-white rounded-lg h-auto w-44 text-gray-800 p-2"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-between">
          {elementaryIcons?.map((icon, index) => (
            <Image
              src={icon}
              alt={`${index}`}
              width={24}
              height={24}
              className="mr-2 mb-2"
            />
          ))}
        </div>
      </div>

      <div>
        <Image
          src={
            pokemon.sprites?.other["official-artwork"].front_default ||
            "/assets.notFound.png"
          }
          alt="not-found"
          width={44}
          height={44}
          layout="responsive"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <strong>{pokemon?.name}</strong>
        <Link href={`info/${pokemon.id}`} className="text-blue-600">
          Ver detalhes
        </Link>
      </div>
    </div>
  );
};

export default Card;
