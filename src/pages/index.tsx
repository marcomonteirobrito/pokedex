import Image from "next/image";

import logo from '../assets/logo.png'
import { SearchComponent } from "@/components/Search";

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center`}
    >
      <div className="w-screen">
        <Image src={logo} alt="logo" />
      </div>
      <SearchComponent />
    </main>
  );
}
