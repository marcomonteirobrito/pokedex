import { SearchComponent } from "@/components/Search";
import { Content } from "@/components/Content";
import { Pagination } from "@/components/Pagination";
import { usePokemons } from "@/hooks/usePokemon";

const Home = () => {
  const { contextHolder } = usePokemons();

  return (
    <main className="flex flex-col w-full items-center gap-6">
      {contextHolder}
      <SearchComponent />
      <Content />
      <Pagination />
    </main>
  );
};

export default Home;
