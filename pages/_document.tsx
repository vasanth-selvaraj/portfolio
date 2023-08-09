import { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../public/favicon.ico"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Vasanth's Portfolio</title>
        <meta name="description" content="I am a passionate and creative web developer, specializing in crafting elegant and responsive websites. With a keen eye for design and a deep understanding of user experience, I strive to create engaging and user-friendly digital experiences. Explore my portfolio to see a diverse range of projects that showcase my skills in front-end development, back-end programming, and more." />

        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
