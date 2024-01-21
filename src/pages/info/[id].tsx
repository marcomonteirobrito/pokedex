import { useRouter } from "next/router";
import { Card } from "antd";
import { usePokemons } from "@/hooks/usePokemon";

const Info = () => {
  const { query } = useRouter();
  const { pokemons } = usePokemons();

  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src={
            pokemons?.results[0]?.sprites?.other["official-artwork"]
              .front_default
          }
        />
      }
      className="bg-bug"
    ></Card>
  );
};

export default Info;
