import { useRouter } from "next/router";
import { usePokemons } from "@/hooks/usePokemon";
import { useEffect } from "react";
import Details from "@/components/Details";

const Info = () => {
  const { query } = useRouter();
  const { updateApiParams } = usePokemons();

  useEffect(() => {
    if (query.id) {
      updateApiParams({ search: `${query.id}` });
    }
  }, [query]);

  return <Details />;
};

export default Info;
