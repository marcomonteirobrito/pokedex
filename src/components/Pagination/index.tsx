import { Pagination as PaginationComponent } from "antd";
import { usePokemons } from "@/hooks/usePokemon";

const Pagination = () => {
  const { updateApiParams, pokemons } = usePokemons();
  return (
    <PaginationComponent
      defaultCurrent={1}
      total={pokemons?.count}
      pageSizeOptions={[10, 15]}
      onChange={(currentPage) => updateApiParams({ currentPage })}
      className="bg-white flex w-11/12 rounded-lg"
    />
  );
};

export default Pagination;
