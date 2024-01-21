import { usePokemons } from "@/hooks/usePokemon";
import { Input } from "antd";

const SearchComponent = () => {
  const { updateApiParams } = usePokemons();
  const { Search } = Input;

  return (
    <Search
      placeholder="Name"
      className="w-9/12 md:w-1/2 2xl:w-1/3"
      onSearch={(search) => updateApiParams({ search })}
    />
  );
};

export { SearchComponent };
