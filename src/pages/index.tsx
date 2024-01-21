import Image from "next/image";

import SearchComponent from "@/components/Search";
import Content from "@/components/Content";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#000B2C] h-vw">
      <div className="w-screen">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={390}
          height={100}
          layout="responsive"
        />
      </div>

      <div className="flex flex-col w-full items-center">
        <SearchComponent />
        <Content />
        <Pagination />
      </div>
    </main>
  );
}
