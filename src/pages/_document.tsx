import { Html, Head, Main, NextScript } from "next/document";
import { geistSans, inter } from "@/lib/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
