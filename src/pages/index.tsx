import Image from "next/image";

import logo from "../assets/logo.png";
import SearchComponent from "@/components/Search";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#000B2C] h-screen">
      <div className="w-screen">
        <Image src={logo} alt="logo" />
      </div>

      <SearchComponent />
      <Container />
    </main>
  );
}
