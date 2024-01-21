import "@/styles/globals.css";
import { PokemonsProvider } from "@/hooks/usePokemon";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonsProvider>
      <img
        src="/assets/logo.png"
        alt="logo"
        className="flex items-center w-auto h-auto"
      />

      <Component {...pageProps} />
    </PokemonsProvider>
  );
}
