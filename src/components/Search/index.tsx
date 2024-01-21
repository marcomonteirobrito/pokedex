import { usePokemons } from "@/hooks/usePokemon";
import { Input } from "antd";

const SearchComponent = () => {
  const { updateApiParams } = usePokemons();
  const { Search } = Input;

  return (
    <Search
      placeholder="Name"
      className="w-9/12"
      onSearch={(search) => updateApiParams({ search })}
    />
  );
};

export default SearchComponent;
