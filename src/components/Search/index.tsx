import { usePokemons } from "@/hooks/usePokemon";
import { Input } from "antd";

const SearchComponent = () => {
  const { updateApiParams } = usePokemons();
  const { Search } = Input;

  return (
    <Search
      placeholder="Name"
      className="w-2/3"
      onSearch={(search) => updateApiParams({ search })}
    />
  );
};

export default SearchComponent;
