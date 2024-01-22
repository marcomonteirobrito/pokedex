import { useRouter } from "next/router";
import { useEffect } from "react";
import { Details } from "@/components/Details";

const Info = () => {
  const router = useRouter();
  const id = router.query.search;
  console.log("id", id);

  useEffect(() => {
    if (id) {
      ({ search: `${id}` });
    }
  }, [router.query]);

  return <Details />;
};

export default Info;
