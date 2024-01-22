import { Input } from "antd";
import { useRouter } from "next/router";

const SearchComponent = () => {
  const router = useRouter();
  const { Search } = Input;
  return (
    <Search
      placeholder="Digite o nome do pokemon"
      className="w-9/12 md:w-1/2 2xl:w-1/3"
      onSearch={(search) => router.push(`/?search=${search}`)}
    />
  );
};

export { SearchComponent };
