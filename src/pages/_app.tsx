import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import NextNProgress from "nextjs-progressbar";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <NextNProgress stopDelayMs={0} />

      <Component {...pageProps} />
    </div>
  );
}
