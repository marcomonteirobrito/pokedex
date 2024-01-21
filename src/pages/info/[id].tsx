import { useRouter } from "next/router";

const Info = () => {
  const { query } = useRouter();

  return <h1>{query.id}</h1>;
};

export default Info;
