import { Pagination as PaginationComponent, PaginationProps } from "antd";
import { usePokemons } from "@/hooks/usePokemon";
import { useState } from "react";

const Pagination = () => {
  const { updateApiParams, pokemons, apiParams } = usePokemons();

  return (
    <PaginationComponent
      defaultCurrent={1}
      current={apiParams.currentPage}
      total={pokemons?.count}
      onChange={(currentPage) => updateApiParams({ currentPage })}
      responsive
      showSizeChanger={false}
    />
  );
};

export { Pagination };
