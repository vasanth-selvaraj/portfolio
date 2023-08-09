import { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../public/favicon.ico"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>Vasanth Portfolio</title> */}
        <meta name="description" content="I am a passionate and creative web developer, specializing in crafting elegant and responsive websites. With a keen eye for design and a deep understanding of user experience, I strive to create engaging and user-friendly digital experiences. Explore my portfolio to see a diverse range of projects that showcase my skills in front-end development, back-end programming, and more." />
        <meta property="og:image" content="/path/to/your/share-image.jpg" />
        <meta property="og:url" content="https://vasanth-selvaraj.github.io/vasanth/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="https://drive.google.com/uc?export=download&id=1VmcKtY39_jFUtUB_pcSjFj5VYHaPitHJ" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
