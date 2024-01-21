import { Pagination as PaginationComponent } from "antd";
import { usePokemons } from "@/hooks/usePokemon";

const Pagination = () => {
  const { updateApiParams, pokemons } = usePokemons();
  return (
    <div className="flex justify-center w-11/12">
      <PaginationComponent
        defaultCurrent={1}
        total={pokemons?.count}
        pageSizeOptions={[10, 15]}
        onChange={(currentPage) => updateApiParams({ currentPage })}
        className="bg-white flex w-full rounded-lg"
      />
    </div>
  );
};

export default Pagination;
