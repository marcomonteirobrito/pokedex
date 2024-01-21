import Card from "../Card";
import { usePokemons } from "@/hooks/usePokemon";

const Content = () => {
  const { pokemons } = usePokemons();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pokemons?.results.map((pokemon) => (
        <Card {...pokemon} />
      ))}
    </div>
  );
};

export default Content;
