import Image from "next/image";

import SearchComponent from "@/components/Search";
import Content from "@/components/Content";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <main className="flex flex-col w-sceen items-center gap-6">
      <SearchComponent />
      <Content />
      <Pagination />
    </main>
  );
}
