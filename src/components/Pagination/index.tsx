import { Pagination as PaginationComponent, PaginationProps } from "antd";
import { usePokemons } from "@/hooks/usePokemon";
import { useRouter } from "next/router";

const Pagination = () => {
  const router = useRouter();
  const { pokemons, currentPage } = usePokemons();

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <PaginationComponent
      current={currentPage}
      total={pokemons?.count || 0}
      onChange={handlePageChange}
      responsive
      showSizeChanger={false}
    />
  );
};

export { Pagination };
