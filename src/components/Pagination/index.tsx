import { Pagination as PaginationComponent } from "antd";
import { usePokemons } from "@/hooks/usePokemon";

const Pagination = () => {
  const { updateApiParams, pokemons } = usePokemons();
  return (
    <div className="flex justify-center w-1/2 mt-2">
      <PaginationComponent
        defaultCurrent={1}
        total={pokemons?.count}
        responsive
        onChange={(currentPage) => updateApiParams({ currentPage })}
        className="bg-white w-full flex rounded-lg"
      />
    </div>
  );
};

export default Pagination;
