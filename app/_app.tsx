import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

