import Blog from "@/sections/blog";
import Navbar from "@/sections/navbar";
import TopBar from "@/sections/topbar";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout bg-main-color text-text-color">
        <TopBar/>
      <Navbar />
      <Blog />
      <main className="bg-maven-bg">{children}</main>
    </div>
  );
}
