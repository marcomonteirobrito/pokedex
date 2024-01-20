import "@/styles/globals.css";
import { PokemonsProvider } from "@/hooks/usePokemon/usePokemons";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonsProvider>
      <Component {...pageProps} />
    </PokemonsProvider>
  );
}
