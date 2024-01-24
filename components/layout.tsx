import Blog from "@/sections/blog";
import Navbar from "@/sections/navbar";
import TopBar from "@/sections/topbar";
import Providers from "./providers";
import Head from "next/head";


interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <Providers>
      <Head>
        <title>Vasanth`s Portfolio</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="layout dark:bg-main-color bg-light-main-color text-light-text-color dark:text-text-color">
        <TopBar />
        <Navbar />
        <Blog />
        <main className="bg-maven-bg">{children}</main>
      </div>
    </Providers>
  );
}
