import Layout from "@/layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist, Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  fallback: ["sans-serif"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  fallback: ["sans-serif"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
   <div className={`${geistSans.variable} ${inter.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}