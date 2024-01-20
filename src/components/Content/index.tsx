import { Pagination } from "antd";
import Card from "../Card";
import { usePokemons } from "@/hooks/usePokemon";

const Content = () => {
  const { updateApiParams, pokemons } = usePokemons();

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4"></div>
      <Pagination
        defaultCurrent={1}
        total={pokemons?.count}
        pageSizeOptions={[10, 15]}
        responsive
        onChange={(currentPage) => updateApiParams({ currentPage })}
      />
    </div>
  );
};

export default Content;
