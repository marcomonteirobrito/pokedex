import { usePokemons } from "@/hooks/usePokemon";
import { Input } from "antd";

const SearchComponent = () => {
  const { updateApiParams } = usePokemons();

  return (
    <Input.Search
      placeholder="Pokemon name"
      className="w-2/3"
      onSearch={(search) => updateApiParams({ search })}
    />
  );
};

export default SearchComponent;
