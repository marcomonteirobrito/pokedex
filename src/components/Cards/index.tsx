import { usePokemons } from "@/hooks/usePokemon";

const Cards = () => {
  const { pokemons } = usePokemons();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"></div>
  );
};

export default Cards;
