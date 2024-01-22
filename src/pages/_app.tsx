import "@/styles/globals.css";
import { PokemonsProvider } from "@/hooks/usePokemon";
import type { AppProps } from "next/app";
import Link from "next/link";
import { StyleConfig } from "@/styles/style";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonsProvider>
      <StyleConfig>
        <main className="flex flex-col items-center">
          <Link href={"/?page=1"}>
            <img src="/assets/logo.png" alt="logo" className="max-w-56" />
          </Link>

          <Component {...pageProps} />
        </main>

        <Footer />
      </StyleConfig>
    </PokemonsProvider>
  );
}
