import Blog from "@/sections/blog";
import Navbar from "@/sections/navbar";
import TopBar from "@/sections/topbar";
import Providers from "./providers";


interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <Providers>
      <div className="layout dark:bg-main-color bg-light-main-color text-light-text-color dark:text-text-color">
        <TopBar />
        <Navbar />
        <Blog />
        <main className="bg-maven-bg">{children}</main>
      </div>
    </Providers>
  );
}
