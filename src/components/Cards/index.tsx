import { usePokemons } from "@/hooks/usePokemon";
import Card from "../Card";

const Cards = () => {
  const { pokemons } = usePokemons();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      <Card id={1} name="marco" style="fogo" description="o mais forte" />
      <Card id={2} name="marco" style="fogo" description="o mais forte" />
    </div>
  );
};

export default Cards;
