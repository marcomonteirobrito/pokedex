import "@/styles/globals.css";
import type { AppProps } from "next/app";

import pokeball from '../assets/pokeball.png'
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <header>
    {/* <div className="z-20 w-full bg-[#011030] h-8 rounded-lg"></div> */}
  </header>
  <Component {...pageProps} />
  </>;
}
