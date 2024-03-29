import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`bg-light-300 relative font-noto`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
