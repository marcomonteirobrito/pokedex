import Image from "next/image";

import SearchComponent from "@/components/Search";
import Content from "@/components/Content";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#000B2C] h-screen">
      <div className="w-screen">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={44}
          height={44}
          layout="responsive"
        />
      </div>

      <SearchComponent />
      <Content />
    </main>
  );
}
