import { useRouter } from "next/router";

const Info = () => {
  const { query } = useRouter();

  return (
    <div className="w-full bg-white h-full">
      <p>detalhes</p>
    </div>
  );
};

export default Info;
