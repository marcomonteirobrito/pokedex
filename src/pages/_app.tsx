import "@/styles/globals.css";
import { PokemonsProvider } from "@/hooks/usePokemon";
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonsProvider>
      <Image
        src="/assets/logo.png"
        alt="logo"
        width={390}
        height={100}
        className="flex items-center"
        layout="responsive"
      />

      <Component {...pageProps} />
    </PokemonsProvider>
  );
}
